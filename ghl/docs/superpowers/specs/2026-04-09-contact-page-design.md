# Contact Page + GHL Integration — Design Spec

**Date:** 2026-04-09
**Status:** Approved
**Builds on:** Blueprint Lead Capture pattern (footer.html, shipped earlier today)

## Context

The Wolf Den marketing site has no contact form today — the only "get in touch" channel is a `mailto:jess@jwolfpax.com` link in the footer. The client wants a dedicated contact page connected to GoHighLevel so every inquiry creates a contact with proper attribution and tagging.

The site is uploaded into GHL's website builder as Custom Code blocks. Same constraint as the Blueprint integration: pure frontend, no backend, no build step. We reuse the same integration pattern (browser `fetch()` → GHL Workflow Inbound Webhook) since it's already proven and a second webhook is trivial to provision.

## Purpose

**Catch-all general inquiries.** Visitor can ask about anything — services, partnerships, press, vendors, event ideas. The form sorts itself in GHL via tags and the inquiry text. Lowest friction, broadest funnel. Not a pre-qualification form, not a quote request.

## Scope

### In scope
- New `contact.html` page
- Inline form (Name, Email, Phone optional, Message) with success/error states
- Honeypot spam protection
- POST to a **second** GHL Workflow Inbound Webhook
- One new navbar link ("Contact")
- New GHL workflow ("Website — Contact Form") — manual GHL UI work, separate from the Blueprint workflow

### Out of scope
- Replacing the footer `mailto:` link (stays as a fallback channel)
- Changing the existing Blueprint workflow
- Captcha beyond the honeypot (Cloudflare Turnstile is a clean v2 drop-in)
- Conditional/segmented forms ("what brings you here?" tabs)
- Subject/topic field (the message field already covers this)
- Touching home / about / services / products / footer pages

## Page layout

`contact.html` follows the same structure as `home.html`/`about.html`:

```
┌─────────────────────────────────────┐
│  navbar.html (loaded by GHL)        │
├─────────────────────────────────────┤
│                                     │
│  HERO                               │
│  Eyebrow: "Get In Touch"            │
│  Title: "Let's Talk"                │
│  Subtitle: "Have a question, an    │
│  event idea, or want to bring The   │
│  Wolf Den to your facility? Drop    │
│  us a line and we'll get back       │
│  within 1 business day."            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  FORM SECTION (2 cols desktop)      │
│  ┌────────────┐ ┌────────────────┐  │
│  │            │ │ Contact Info   │  │
│  │  FORM      │ │ • email        │  │
│  │            │ │ • location     │  │
│  │  First/Last│ │ • response time│  │
│  │  Email     │ │ • social icons │  │
│  │  Phone     │ │                │  │
│  │  Message   │ │                │  │
│  │  [Submit]  │ │                │  │
│  └────────────┘ └────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  FINAL CTA — Blueprint download     │
│  (matches existing pattern)         │
│                                     │
├─────────────────────────────────────┤
│  footer.html (loaded by GHL)        │
└─────────────────────────────────────┘
```

Mobile (≤768px): two columns collapse to single column, form first, contact info card below.

## Form fields

| Field | Type | Required | Notes |
|---|---|---|---|
| First Name | text | yes | autocomplete="given-name" |
| Last Name | text | yes | autocomplete="family-name", helpful for personalized email replies |
| Email | email | yes | autocomplete="email" |
| Phone | tel | no | autocomplete="tel" |
| Message | textarea (5 rows) | yes | autocomplete="off", maxlength=2000 |
| website (honeypot) | text | hidden | offscreen, tabindex=-1, autocomplete="off" |

## Form states (inline, not modal)

- **form** — default
- **submitting** — submit button disabled, spinner visible
- **success** — form replaced in place: "✓ Thanks, we got it. Jess will be in touch within 1 business day."
- **error** — form replaced with error message + "Try Again" button + fallback `mailto:` link

## Webhook payload

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com",
  "phone": "+15551234567",
  "message": "Hi, I run a CrossFit box in Fort Lauderdale and...",
  "source": "Website Contact Form",
  "page_url": "https://wolfdenwellness.com/contact",
  "tags": ["website-contact", "website-lead"],
  "submitted_at": "2026-04-09T17:23:00.000Z"
}
```

## GHL workflow setup ("Website — Contact Form")

Separate from the Blueprint workflow on purpose — different intent, different actions, easier to debug. Same setup pattern as before (Automation → Workflows → + Create → Inbound Webhook trigger):

1. **Trigger** → Inbound Webhook → copy URL → schema-capture POST
2. **Action: Create/Update Contact**
   - Email → `{{inboundWebhookRequest.email}}`
   - First Name → `{{inboundWebhookRequest.first_name}}`
   - Last Name → `{{inboundWebhookRequest.last_name}}`
   - Phone → `{{inboundWebhookRequest.phone}}`
   - Source → `{{inboundWebhookRequest.source}}`
3. **Action: Add Contact Tag** → `website-contact`, `website-lead`
4. **Action: Add Note** →
   ```
   Inquiry from Contact Page on {{inboundWebhookRequest.page_url}}
   
   Message:
   {{inboundWebhookRequest.message}}
   ```
5. **Action: Send Internal Email** → to `jess@jwolfpax.com` with subject `New Contact Form Submission from {{inboundWebhookRequest.first_name}}` and body containing the message + a link to the contact in GHL
6. *(Optional)* **Action: Send Acknowledgement Email** → to `{{contact.email}}`: "Thanks, we got your message and will be in touch within 1 business day"
7. **Publish**

## Files touched

| File | Action | Approx size |
|---|---|---|
| `contact.html` | **Create** | ~600 lines (markup + scoped styles + form-handler script) |
| `navbar.html` | **Modify** | +1 line — insert `<li><a href="/contact">Contact</a></li>` between Products and the Blueprint CTA |
| `home.html`, `about.html`, `services.html`, `products.html`, `footer.html` | **No change** | — |

## Integration details

- **Webhook URL constant** lives at the top of the inline `<script>` block in `contact.html`, named `WEBHOOK_URL`
- **Placeholder behavior**: until the user pastes the real URL, the form detects the `PASTE_*` prefix, logs a console warning, simulates a success state, and skips the network call (same fallback as the Blueprint form)
- **No changes to footer.html** — the Blueprint modal click delegation already handles every page that loads `footer.html`, so the new contact page automatically inherits the Blueprint flow if a visitor clicks the final-CTA Blueprint button

## Verification

1. Open `contact.html` in a browser. Hero displays, form renders, contact info card visible.
2. Submit empty → HTML5 validation blocks first required field.
3. Submit with invalid email → HTML5 blocks email field.
4. Honeypot test: in DevTools, set the hidden `website` field, submit → request silently dropped client-side, success state shown.
5. Submit valid form → Network tab shows POST to webhook URL with 2xx, success state replaces form in place.
6. Check GHL → new contact with tags `website-contact`, `website-lead`, source = "Website Contact Form", note containing page URL + message body.
7. Workflow History tab → all actions green.
8. Internal notification email arrives at `jess@jwolfpax.com`.
9. Mobile view (≤768px) → form and contact info card stack vertically, both readable, submit button full width.
10. Navigate to other pages via navbar → "Contact" link appears in 5th position on every page that loads `navbar.html`.
11. Click any "Download Blueprint" button on `contact.html` (in the Final CTA section) → Blueprint modal opens (inherited from `footer.html`).
12. Reduced motion: enable `prefers-reduced-motion` → form animations disabled, no regressions.

## Open items for the user

- **Provision a second GHL Workflow Inbound Webhook** ("Website — Contact Form") and paste the URL into `contact.html` once the page is built. The form will function with a placeholder URL during development.
