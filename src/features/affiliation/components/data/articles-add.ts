export type ArticleAdvertisement = {
    id: number
    label: string
    title: string
    description: string
    image: string
    href: string
}



export const advertisements: ArticleAdvertisement[] = [
    {
        id: 1,
        label: 'Apex Choice',
        title: 'Summit Series 65L',
        description:
            'Lightweight, ergonomic load distribution.',
        image: 'https://www.paddypallin.com.au/media/catalog/product/t/h/the_north_face_cobra_65_pack_tnfwhite_rawundyed_side.jpg?width=800&height=&canvas=800,&quality=80&fit=bounds',
        href: '/products/summit-series-65l',
    },
    {
        id: 2,
        label: 'Recommended Gear',
        title: 'Expedition Sleep System',
        description:
            'A lightweight sleep system designed for colder environments.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnK3dmQ_QuzOJrcPQqjB66e8dxdm0sBxMD3urAl0sYA&s=10',
        href: '/products/expedition-sleep-system',
    },
    {
        id: 3,
        label: 'Field Tested',
        title: 'Adventure Cooking Kit',
        description:
            'Compact cookware created for long-distance travel.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn7Q22LN_wdjV9jloRs1bjonUt8bNE9puUyghFZKfJ4m5HCWOtfBbEICt&s=10',
        href: '/products/adventure-cooking-kit',
    }
]