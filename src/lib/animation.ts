import type {
    MotionProps,
    Transition,
    Variants,
} from 'framer-motion'

/*
|--------------------------------------------------------------------------
| Global animation configuration
|--------------------------------------------------------------------------
*/

export const animationConfig = {
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.4,
        section: 0.65,
        background: 1.2,
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
        section: 32,
    },

    scale: {
        hover: 1.02,
        tap: 0.99,
        hidden: 0.97,
    },

    stagger: {
        fast: 0.08,
        default: 0.12,
        slow: 0.16,
    },
    parallax: {
        background: {
            from: -80,
            to: 80,
            scale: 1.08,
        },

        spring: {
            stiffness: 80,
            damping: 20,
            mass: 0.25,
        },
    },
} as const

/*
|--------------------------------------------------------------------------
| Shared transitions
|--------------------------------------------------------------------------
*/

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

    section: {
        duration: animationConfig.duration.section,
        ease: animationConfig.ease.smooth,
    },

    background: {
        duration: animationConfig.duration.background,
        ease: animationConfig.ease.smooth,
    },

    layout: {
        layout: {
            duration: animationConfig.duration.normal,
            ease: animationConfig.ease.smooth,
        },
    },
} satisfies Record<string, Transition>

/*
|--------------------------------------------------------------------------
| Viewport settings
|--------------------------------------------------------------------------
*/

export const viewportConfig = {
    once: true,
    amount: 0.2,
    margin: '0px 0px -80px 0px',
} as const

/*
|--------------------------------------------------------------------------
| General animations
|--------------------------------------------------------------------------
*/

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
        transition: transitions.section,
    },

    exit: {
        opacity: 0,
        y: animationConfig.distance.small,
        transition: transitions.fast,
    },
}

export const fadeDownVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -animationConfig.distance.medium,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.section,
    },

    exit: {
        opacity: 0,
        y: -animationConfig.distance.small,
        transition: transitions.fast,
    },
}

export const fadeLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: animationConfig.distance.large,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.section,
    },

    exit: {
        opacity: 0,
        x: animationConfig.distance.small,
        transition: transitions.fast,
    },
}

export const fadeRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -animationConfig.distance.large,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.section,
    },

    exit: {
        opacity: 0,
        x: -animationConfig.distance.small,
        transition: transitions.fast,
    },
}

export const scaleInVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: animationConfig.scale.hidden,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.section,
    },

    exit: {
        opacity: 0,
        scale: animationConfig.scale.hidden,
        transition: transitions.fast,
    },
}

/*
|--------------------------------------------------------------------------
| Stagger containers
|--------------------------------------------------------------------------
*/

export const staggerContainerVariants: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: animationConfig.stagger.default,
            delayChildren: 0.08,
        },
    },
}

export const fastStaggerContainerVariants: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: animationConfig.stagger.fast,
            delayChildren: 0.05,
        },
    },
}

export const slowStaggerContainerVariants: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: animationConfig.stagger.slow,
            delayChildren: 0.1,
        },
    },
}

/*
|--------------------------------------------------------------------------
| Section animations
|--------------------------------------------------------------------------
*/

export const sectionRevealVariants: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: transitions.section,
    },
}

export const backgroundRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 1.06,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.background,
    },
}

/*
|--------------------------------------------------------------------------
| Card animations
|--------------------------------------------------------------------------
*/

export const cardRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: animationConfig.distance.section,
        scale: animationConfig.scale.hidden,
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: transitions.section,
    },

    exit: {
        opacity: 0,
        y: animationConfig.distance.medium,
        scale: animationConfig.scale.hidden,
        transition: transitions.fast,
    },
}

export const cardContentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: animationConfig.distance.medium,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ...transitions.slow,
            delay: 0.08,
        },
    },
}

export const iconRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.7,
        rotate: -8,
    },

    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: transitions.slow,
    },
}

export const numberRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        x: animationConfig.distance.medium,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.slow,
    },
}

/*
|--------------------------------------------------------------------------
| Reusable interaction effects
|--------------------------------------------------------------------------
*/

export const cardInteractionProps: Pick<
    MotionProps,
    'whileHover' | 'whileTap' | 'transition'
> = {
    whileHover: {
        y: -4,
    },

    whileTap: {
        scale: animationConfig.scale.tap,
    },

    transition: transitions.default,
}

export const subtleInteractionProps: Pick<
    MotionProps,
    'whileHover' | 'whileTap' | 'transition'
> = {
    whileHover: {
        scale: animationConfig.scale.hover,
    },

    whileTap: {
        scale: animationConfig.scale.tap,
    },

    transition: transitions.default,
}

/*
|--------------------------------------------------------------------------
| Accordion animations
|--------------------------------------------------------------------------
*/

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
        opacity: 0,
        y: -animationConfig.distance.small,
    },

    open: {
        opacity: 1,
        y: 0,
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


/*
|--------------------------------------------------------------------------
| cardImageVariants animations
|--------------------------------------------------------------------------
*/



export const cardImageVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 1.06,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.background,
    },

    hover: {
        scale: 1.04,
        transition: {
            duration: 0.7,
            ease: animationConfig.ease.smooth,
        },
    },
}

export const travelCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: animationConfig.distance.section,
        scale: animationConfig.scale.hidden,
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: transitions.section,
    },

    hover: {
        transition: transitions.default,
    },

    tap: {
        scale: animationConfig.scale.tap,
        transition: transitions.fast,
    },
}

/*
|--------------------------------------------------------------------------
| Smooth-scroll configuration
|--------------------------------------------------------------------------
*/

export const smoothScrollConfig = {
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
    anchors: true,
    stopInertiaOnNavigate: true,
}