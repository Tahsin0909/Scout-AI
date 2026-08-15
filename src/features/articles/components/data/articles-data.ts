export type ArticleCategory =
    | "Hiking"
    | "Safety"
    | "Gear"
    | "Destinations"
    | "Camping";

export type Article = {
    id: number;
    title: string;
    excerpt: string;
    category: ArticleCategory;
    image: string;
    publishedAt: string;
    readTime: number;
    content: string;
    views: number;
};

const articleTitles = [
    "Sustainable Stays: Leave No Trace 2.0",
    "How to Prepare for Your First Backcountry Hike",
    "Essential Camping Gear for Every Adventure",
    "The Complete Guide to Wilderness Safety",
    "Ten Scenic Trails Worth Exploring",
    "How to Choose the Right Hiking Backpack",
    "Campfire Safety: What Every Camper Should Know",
    "Exploring Hidden Mountain Destinations",
    "Navigation Basics for Remote Adventures",
    "Best Lightweight Gear for Long Trips",
    "How Weather Changes Your Hiking Strategy",
    "Responsible Travel in Protected Landscapes",
    "Building the Perfect Camping Checklist",
    "Emergency Planning for Solo Travelers",
    "The Best Weekend Hiking Destinations",
    "How to Read a Topographic Map",
    "Choosing a Safe and Sustainable Campsite",
    "Beginner’s Guide to Multi-Day Hiking",
    "Adventure Photography in the Wilderness",
    "Planning a Low-Impact Outdoor Expedition",
];

const categories: ArticleCategory[] = [
    "Hiking",
    "Safety",
    "Gear",
    "Destinations",
];

const images = [
    "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
];

export const articles: Article[] = articleTitles.map((title, index) => ({
    id: index + 1,
    title,
    category: categories[index % categories.length],
    image: images[index % images.length],
    publishedAt: new Date(
        2025,
        1,
        23 - index,
    ).toISOString(),
    readTime: 5 + (index % 6),
    excerpt:
        "The modern explorer’s guide to preparing for outdoor adventures with practical advice, responsible planning, and field-tested recommendations.",
    content: `
    Outdoor exploration becomes more rewarding when preparation, safety,
    and respect for the environment work together.

    This article provides practical advice for planning your next adventure,
    selecting the right equipment, understanding changing conditions, and
    making responsible decisions in the field.

    Every journey is different, but a clear route, reliable equipment, and a
    thoughtful backup plan can make the experience safer and more enjoyable.
  `,
    views: 20
}));