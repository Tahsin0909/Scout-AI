'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    ChevronLeft,
    ChevronRight,
} from 'lucide-react'
import { ArticleAdvertisement } from './data/articles-add'



type ArticleAdvertisementsProps = {
    advertisements: ArticleAdvertisement[]
}

const ArticleAffiliation = ({
    advertisements,
}: ArticleAdvertisementsProps) => {
    const [activeIndex, setActiveIndex] = useState(0)

    if (!advertisements.length) {
        return null
    }

    const currentAdvertisement =
        advertisements[activeIndex]

    const showPrevious = () => {
        setActiveIndex(current =>
            current === 0
                ? advertisements.length - 1
                : current - 1,
        )
    }

    const showNext = () => {
        setActiveIndex(current =>
            current === advertisements.length - 1
                ? 0
                : current + 1,
        )
    }

    return (
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-3 shadow-sm">
                <Link
                    href={currentAdvertisement.href}
                    className="group block"
                >
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={currentAdvertisement.image}
                            alt={currentAdvertisement.title}
                            className="
                                size-full object-contain
                                transition-transform duration-700
                                ease-[cubic-bezier(0.45,0,0.55,1)]
                                group-hover:scale-[1.035]
                            "
                        />
                    </div>

                    <div className="pt-4">
                        <p className="text-xs text-muted-foreground">
                            {currentAdvertisement.label}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">
                            {currentAdvertisement.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground h-10 line-clamp-2">
                            {currentAdvertisement.description}
                        </p>
                    </div>
                </Link>
            </div>

            {advertisements.length > 1 && (
                <div className="mt-4 flex items-center justify-between">
                    <button
                        type="button"
                        aria-label="Previous advertisement"
                        onClick={showPrevious}
                        className="
                            flex size-9 items-center justify-center
                            rounded-lg border border-border bg-card
                            text-muted-foreground
                            transition-colors duration-200
                            hover:bg-muted hover:text-foreground
                        "
                    >
                        <ChevronLeft className="size-4" />
                    </button>

                    <div className="flex items-center gap-2">
                        {advertisements.map((advertisement, index) => (
                            <button
                                key={advertisement.id}
                                type="button"
                                aria-label={`Show advertisement ${index + 1}`}
                                aria-current={
                                    activeIndex === index
                                        ? 'true'
                                        : undefined
                                }
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    rounded-full transition-all duration-200
                                    ${activeIndex === index
                                        ? 'h-2 w-4 bg-[#ff7043]'
                                        : 'size-2 bg-muted-foreground/30'
                                    }
                                `}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        aria-label="Next advertisement"
                        onClick={showNext}
                        className="
                            flex size-9 items-center justify-center
                            rounded-lg border border-border bg-card
                            text-muted-foreground
                            transition-colors duration-200
                            hover:bg-muted hover:text-foreground
                        "
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            )}
        </aside>
    )
}

export default ArticleAffiliation