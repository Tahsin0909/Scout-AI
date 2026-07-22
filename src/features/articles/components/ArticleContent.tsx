type ArticleContentProps = {
    content: string
}

const ArticleContent = ({
    content,
}: ArticleContentProps) => {
    return (
        <article
            className="
                article-content min-w-0

                [&_blockquote]:mb-10
                [&_blockquote]:border-l-2
                [&_blockquote]:border-[#ff7043]
                [&_blockquote]:pl-5
                [&_blockquote]:text-sm
                [&_blockquote]:italic
                [&_blockquote]:leading-relaxed
                [&_blockquote]:text-muted-foreground
                sm:[&_blockquote]:text-base

                [&_section]:mb-10
                [&_section:last-child]:mb-0

                [&_h2]:mb-3
                [&_h2]:text-xl
                [&_h2]:font-semibold
                [&_h2]:tracking-[-0.02em]
                sm:[&_h2]:text-2xl

                [&_h2_span]:mr-1

                [&_p]:text-sm
                [&_p]:leading-[1.7]
                [&_p]:text-muted-foreground
                sm:[&_p]:text-base

                [&_ul]:mt-4
                [&_ul]:space-y-2
                [&_ul]:pl-0
                [&_ul]:text-sm
                [&_ul]:text-muted-foreground
                sm:[&_ul]:text-base

                [&_li]:list-none

                [&_.article-spec-grid]:mt-5
                [&_.article-spec-grid]:grid
                [&_.article-spec-grid]:gap-x-8
                [&_.article-spec-grid]:gap-y-3
                [&_.article-spec-grid]:text-sm
                [&_.article-spec-grid]:italic
                sm:[&_.article-spec-grid]:grid-cols-2
            "
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        />
    )
}

export default ArticleContent