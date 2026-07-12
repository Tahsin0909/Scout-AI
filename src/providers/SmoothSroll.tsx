'use client'

import { useEffect, useRef } from 'react'
import {
    ReactLenis,
    type LenisRef,
} from 'lenis/react'
import {
    cancelFrame,
    frame,
    useReducedMotion,
} from 'framer-motion'

import { smoothScrollConfig } from '@/lib/animation'

export function SmoothScroll() {
    const lenisRef = useRef<LenisRef>(null)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        if (shouldReduceMotion) {
            return
        }

        function update({
            timestamp,
        }: {
            timestamp: number
        }) {
            lenisRef.current?.lenis?.raf(timestamp)
        }

        frame.update(update, true)

        return () => {
            cancelFrame(update)
        }
    }, [shouldReduceMotion])

    if (shouldReduceMotion) {
        return null
    }

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                ...smoothScrollConfig,
                autoRaf: false,
            }}
        />
    )
}