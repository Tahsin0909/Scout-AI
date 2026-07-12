'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'


import { faqs } from './data'
import { accordionContentVariants, accordionVariants, chevronVariants, transitions } from '@/lib/animation'

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
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Common Questions
                </p>

                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Frequently{' '}
                    <span className="italic text-[#97B900]">
                        Asked
                    </span>
                </h2>

                <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                    Everything you need to know before your first package
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

            <div className="mb-14 text-center">
                <p className="mb-4">Still have questions?</p>

                <Button variant="default" size="lg">
                    Contact our team
                </Button>
            </div>

            <div
                className="
        relative isolate flex min-h-[324px] w-full overflow-hidden
        rounded-[28px] bg-[#1e1e1e] px-6 py-[82px]
        text-center text-white md:px-12
    "
            >
                {/* Background glow */}
                <div
                    aria-hidden="true"
                    className=" 
            pointer-events-none absolute inset-0 -z-10
            bg-[radial-gradient(ellipse_55%_65%_at_5%_-10%,rgba(123,108,42,0.75),transparent_70%),radial-gradient(ellipse_48%_65%_at_96%_5%,rgba(194,161,45,0.75),transparent_68%)]
        "
                />
                <div className="mx-auto flex w-full max-w-[720px] flex-col items-center">
                    <h3
                        className="
                mb-[8px] text-[30px] font-semibold leading-[1.2]
                tracking-[-0.02em] md:text-[40px]
            "
                    >
                        Your next expedition starts here.
                    </h3>

                    <p
                        className="
                mb-[20px] max-w-[520px] text-[14px] leading-[20px]
                text-[#a8a8a8]
            "
                    >
                        Scout AI is ready. Give us the details and we&apos;ll build your
                        dossier — adventure, down to a science.
                    </p>

                    <div className="flex w-full flex-col justify-center gap-[13px] sm:flex-row">
                        <Button
                            variant="default"
                            size={"lg"}
                        >

                            Plan Your Trip
                        </Button>

                        <Button
                            variant="outline"
                            size={"lg"}
                        >
                            Services Plan
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    )
}