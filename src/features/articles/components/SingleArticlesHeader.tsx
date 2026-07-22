'use client'

import { useState } from 'react'
import {
    Check,
    Clock3,
    Eye,
    Share2,
} from 'lucide-react'

import { cn } from '@/lib/utils'

type SingleArticlesHeaderProps = {
    backgroundImage?: string
    title: string
    category: string
    publishedAt: string
    readTime?: number | string
    views?: number | string
    shareUrl?: string
    className?: string
}

export default function SingleArticlesHeader({
    backgroundImage = '/singleArticles.jpg',
    title,
    category,
    publishedAt,
    readTime = 8,
    views = '1.2k',
    shareUrl,
    className,
}: SingleArticlesHeaderProps) {
    const [copied, setCopied] = useState(false)

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(publishedAt))

    const handleShare = async () => {
        const url =
            shareUrl ||
            (typeof window !== 'undefined'
                ? window.location.href
                : '')

        const shareData = {
            title,
            text: `Read: ${title}`,
            url,
        }

        try {
            if (
                typeof navigator !== 'undefined' &&
                navigator.share
            ) {
                await navigator.share(shareData)
                return
            }

            await navigator.clipboard.writeText(url)
            setCopied(true)

            window.setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (error) {
            // Do not report an error when the user closes the share dialog.
            if (
                error instanceof DOMException &&
                error.name === 'AbortError'
            ) {
                return
            }

            try {
                await navigator.clipboard.writeText(url)
                setCopied(true)

                window.setTimeout(() => {
                    setCopied(false)
                }, 2000)
            } catch {
                setCopied(false)
            }
        }
    }

    return (
        <section
            className={cn(
                `
                    relative isolate flex min-h-[560px] w-full
                    overflow-hidden bg-neutral-950
                    sm:min-h-[620px]
                    lg:min-h-[680px]
                `,
                className,
            )}
        >
            {/* Background image */}
            <div
                aria-hidden="true"
                className="
                    absolute inset-0 -z-30
                    bg-cover bg-center bg-no-repeat
                "
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            />

            {/* Global dark overlay */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-20
                    bg-black/20
                "
            />

            {/* Left readability gradient */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    bg-[linear-gradient(90deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.32)_48%,rgba(0,0,0,0.08)_76%,transparent_100%)]
                "
            />

            {/* Bottom cinematic gradient */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    bg-[linear-gradient(to_top,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.52)_34%,rgba(0,0,0,0.08)_72%,transparent_100%)]
                "
            />

            <div
                className="
                    container flex w-full items-end
                     pb-8 pt-32
                    sm:px-8 sm:pb-10
                     lg:pb-12
                "
            >
                <div className="w-full text-white">
                    {/* Category and date */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                        <span
                            className="
                                rounded-md border border-white/15
                                bg-white/20 px-3 py-1.5
                                font-medium text-white
                                backdrop-blur-md
                            "
                        >
                            {category}
                        </span>

                        <time
                            dateTime={publishedAt}
                            className="text-white/65"
                        >
                            {formattedDate}
                        </time>
                    </div>

                    {/* Title */}
                    <h1
                        className="
                            mt-5 max-w-[1120px]
                            text-[38px] font-medium
                            leading-[1.18] tracking-[-0.035em]
                            text-white
                            sm:text-[52px]
                            lg:text-[62px]
                        "
                    >
                        {title}
                    </h1>

                    {/* Divider */}
                    <div className="mt-7 h-px w-full bg-white/25" />

                    {/* Bottom metadata */}
                    <div
                        className="
                            mt-4 flex flex-col gap-5
                            sm:flex-row sm:items-center
                            sm:justify-between
                        "
                    >
                        <div className="flex flex-wrap items-center gap-5 text-xs text-white/75 sm:text-sm">
                            <span className="inline-flex items-center gap-2">
                                <Clock3
                                    aria-hidden="true"
                                    className="size-4"
                                    strokeWidth={1.8}
                                />

                                {readTime} Min Read
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <Eye
                                    aria-hidden="true"
                                    className="size-4"
                                    strokeWidth={1.8}
                                />

                                {views} Views
                            </span>
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                            <span className="text-xs text-white/65 sm:text-sm">
                                {copied
                                    ? 'Link Copied'
                                    : 'Share Article'}
                            </span>

                            <button
                                type="button"
                                onClick={handleShare}
                                aria-label={
                                    copied
                                        ? 'Article link copied'
                                        : 'Share article'
                                }
                                className="
                                    flex size-10 items-center justify-center
                                    rounded-lg border border-white/15
                                    bg-white/10 text-white
                                    backdrop-blur-md
                                    transition-[background-color,border-color,transform]
                                    duration-300 ease-out
                                    hover:border-white/30
                                    hover:bg-white/20
                                    active:scale-95
                                "
                            >
                                {copied ? (
                                    <Check
                                        className="size-[18px]"
                                        strokeWidth={2}
                                    />
                                ) : (
                                    <Share2
                                        className="size-[18px]"
                                        strokeWidth={1.8}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}