import React from 'react'

const collections = [
    {
        name: 'Handcrafted Collection',
        href: '#',
        imageSrc: promoImg2,
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
        description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
        name: 'Organized Desk Collection',
        href: '#',
        imageSrc: promoImg3,
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
        name: 'Focus Collection',
        href: '#',
        imageSrc: promoImg5,
        imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description: 'Be more productive than enterprise project managers with a single piece of paper.',
    },
]

function CollectionSection() {
  return (
    <div>
        <section
            aria-labelledby="collection-heading"
            className="mx-auto max-w-xl px-4 pt-4 sm:px-6 sm:pt4 lg:max-w-7xl lg:px-8"
        >
            <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Shop by Collection
            </h2>
            <p className="mt-4 text-base text-gray-500">
                Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
            </p>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {collections.map((collection) => (
                    <a key={collection.name} href={collection.href} className="group block">
                        <div
                            aria-hidden="true"
                            className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                        >
                            <img
                                src={collection.imageSrc}
                                alt={collection.imageAlt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                    </a>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CollectionSection