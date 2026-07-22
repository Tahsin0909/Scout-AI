export type Article = {
    id: number
    title: string
    category: string
    publishedAt: string
    readTime: number
    views: string
    backgroundImage: string
    content: string
}

export const articlesData: Article[] = [
    {
        id: 1,
        title:
            'The Ultimate Camping Checklist For Your Next Outdoor Adventure',
        category: 'Camping Guides',
        publishedAt: '2026-06-15',
        readTime: 8,
        views: '1.2k',
        backgroundImage: '/singleArticles.jpg',

        content: `
            <blockquote>
                Preparing for the wild requires more than just spirit; it requires
                precision. Whether you're navigating the deep forests of the Pacific
                Northwest or the high-altitude plateaus of the Andes, your gear is
                your lifeline. This guide breaks down the essential components of a
                job-proof camping setup.
            </blockquote>

            <section>
                <h2>
                    <span>01.</span>
                    Essential Equipment
                </h2>

                <p>
                    Before you even think about the tent, consider the tools that
                    bridge the gap between survival and comfort. A reliable
                    multi-tool, high-output headlamp, and navigation system are
                    non-negotiable.
                </p>

                <ul>
                    <li>Global Satellite Communicator (Garmin inReach or similar)</li>
                    <li>High-Lumen Headlamp with extra lithium batteries</li>
                    <li>Rugged Multitool with pliers and serrated blade</li>
                    <li>Waterproof topo maps of the local quadrant</li>
                </ul>
            </section>

            <section>
                <h2>
                    <span>02.</span>
                    Shelter &amp; Sleep Systems
                </h2>

                <p>
                    Your ability to recover overnight dictates your performance the
                    next day. We recommend a layered sleep system: a high-R-value
                    sleeping pad paired with a down-filled bag rated for 10 degrees
                    lower than your expected minimum temperature.
                </p>
            </section>

            <section>
                <h2>
                    <span>03.</span>
                    High-Performance Cooking
                </h2>

                <p>
                    Efficiency is key. A compact, integrated canister stove system
                    is the gold standard for weight-conscious travelers. Ensure you
                    have a reliable ignition source and a wind-blocking shield.
                </p>

                <div class="article-spec-grid">
                    <strong>Isobutane-propane fuel mix</strong>
                    <strong>Titanium spork and nesting pot</strong>
                    <strong>Bear-resistant food canister</strong>
                    <strong>Dual-stage water filtration</strong>
                </div>
            </section>

            <section>
                <h2>
                    <span>04.</span>
                    Safety &amp; First Aid
                </h2>

                <p>
                    Never compromise on safety. Your kit should be tailored to your
                    group size and the duration of your trip. Beyond bandages, carry
                    items that address the environmental risks of your destination.
                </p>
            </section>
        `
    },
]