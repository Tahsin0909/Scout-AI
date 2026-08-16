'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'


import { accordionContentVariants, accordionVariants, chevronVariants, transitions } from '@/lib/animation'
import Link from 'next/link'
import { faqs } from './data'

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(currentIndex =>
            currentIndex === index ? null : index
        )
    }

    return (
        <section className="container px-4 py-16 md:px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                {/* <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit mx-auto px-3 py-1 rounded-full bg-white/5 ">
                {/* <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit mx-auto px-3 py-1 rounded-full bg-white/5 ">
                    Common Questions
                </p> */}
                </p> */}

                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Frequently{' '}
                    <span className="italic text-[#97B900]">
                        Asked
                    </span>
                </h2>

                <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                    {/* Everything you need to know before your first package */}
                    Everything you need to know before taking your first trip.
                    {/* Everything you need to know before your first package */}
                    Everything you need to know before taking your first trip.
                </p>
            </div>

            <div className="mb-14 space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index
                    const animationState = isOpen ? 'open' : 'closed'

                    return (
                        <motion.div
                            key={faq.question}
                            layout
                            transition={transitions.layout}
                            className="overflow-hidden rounded-lg bg-card "
                        >
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${index}`}
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors "
                            >
                                <span className="font-semibold ">
                                    {faq.question}
                                </span>

                                <motion.span
                                    variants={chevronVariants}
                                    initial={false}
                                    animate={animationState}
                                    className="flex shrink-0 "
                                >
                                    <ChevronDown size={20} />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        key={`faq-answer-${index}`}
                                        variants={accordionVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            variants={accordionContentVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            className="px-6 py-4"
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>

            {/* <div className="mb-14 text-center">
                <p className="mb-4">Still have questions?</p>

                <Button
                    asChild
                >
                    <Link href="/contact">
                        Contact Us
                    </Link>
                </Button>
            </div> */}
        </section >
    )
}