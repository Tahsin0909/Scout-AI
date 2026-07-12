import type { Transition, Variants } from 'framer-motion'

export const animationConfig = {
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.4,
    },

    ease: {
        default: [0.4, 0, 0.2, 1] as const,
        smooth: [0.22, 1, 0.36, 1] as const,
        easeInOut: 'easeInOut' as const,
    },

    distance: {
        small: 8,
        medium: 16,
        large: 24,
    },

    scale: {
        hover: 1.03,
        tap: 0.97,
    },
}

export const transitions = {
    fast: {
        duration: animationConfig.duration.fast,
        ease: animationConfig.ease.smooth,
    },

    default: {
        duration: animationConfig.duration.normal,
        ease: animationConfig.ease.smooth,
    },

    slow: {
        duration: animationConfig.duration.slow,
        ease: animationConfig.ease.smooth,
    },

    layout: {
        layout: {
            duration: animationConfig.duration.normal,
            ease: animationConfig.ease.smooth,
        },
    },
} satisfies Record<string, Transition>

export const fadeInVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: transitions.default,
    },
    exit: {
        opacity: 0,
        transition: transitions.fast,
    },
}

export const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: animationConfig.distance.medium,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.default,
    },
    exit: {
        opacity: 0,
        y: animationConfig.distance.small,
        transition: transitions.fast,
    },
}

export const accordionVariants: Variants = {
    closed: {
        height: 0,
        opacity: 0,
        transition: {
            height: transitions.default,
            opacity: transitions.fast,
        },
    },

    open: {
        height: 'auto',
        opacity: 1,
        transition: {
            height: transitions.default,
            opacity: transitions.fast,
        },
    },
}

export const accordionContentVariants: Variants = {
    closed: {
        y: -animationConfig.distance.small,
        opacity: 0,
    },

    open: {
        y: 0,
        opacity: 1,
        transition: transitions.default,
    },
}

export const chevronVariants: Variants = {
    closed: {
        rotate: 0,
    },

    open: {
        rotate: 180,
        transition: transitions.default,
    },
}