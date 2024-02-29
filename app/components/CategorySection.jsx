import React from 'react'
import newArrivals from "../../public/cateogry_bg_new.png"
import apparel from "../../public/category_bg_apparel.png"
import music from "../../public/category_bg_music.png"
import accessories from "../../public/category_bg_accessories.png"
import sale from "../../public/category_bg_sale.png"

const categories = [
    {
        name: 'New Arrivals',
        href: '/collections/new-arrivals',
        imageSrc: newArrivals,
    },
    {
        name: 'Apparel',
        href: '/collections/apparel',
        imageSrc: apparel,
    },
    {
        name: 'Music',
        href: '/collections/music',
        imageSrc: music
    },    
    {
        name: 'Accessories',
        href: '/collections/accessories',
        imageSrc: accessories,
    },
    {
        name: 'Sale',
        href: '/collections/sale',
        imageSrc: sale,
    },
]

function CategorySection() {
    
  return (
    <div>
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-4 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                    Shop by Category
                </h2>
                {/* <a href="#" className="hidden text-sm font-semibold text-pink-600 hover:text-red-500 sm:block">
                    Browse all categories
                    <span aria-hidden="true"> &rarr;</span>
                </a> */}
            </div>

            <div className="mt-4 flow-root">
                <div className="-my-2">
                    <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                        <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                            {categories.map((category) => (
                                <a
                                    key={category.name}
                                    href={category.href}
                                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                >
                                    <span aria-hidden="true" className="absolute inset-0">
                                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                    />
                                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
                <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    Browse all categories
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </section>
    </div>
  )
}

export default CategorySection