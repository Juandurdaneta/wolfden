import type { Variants } from "framer-motion";

export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as const;
export const EASE_DRAMATIC = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  section: 0.7,
  hero: 1.5,
} as const;

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE_SMOOTH },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.section, ease: EASE_SMOOTH },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.section, ease: EASE_SMOOTH },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.section, ease: EASE_SMOOTH },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.fast,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.section, ease: EASE_DRAMATIC },
  },
};

export const cardHover = {
  y: -6,
  transition: { duration: DURATION.normal, ease: EASE_SMOOTH },
};

export const buttonTap = {
  scale: 0.97,
};

export const buttonHover = {
  scale: 1.03,
};
