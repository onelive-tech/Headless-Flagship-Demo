import promoImg1 from "../../public/promotion1.webp"
import promoImg2 from "../../public/promotion2.webp"
import promoImg3 from "../../public/promotion3.webp"
import promoImg4 from "../../public/promotion4.webp"
import promoImg5 from "../../public/promotion5.webp"
import promoImg6 from "../../public/cateogry_bg_new.png"

export default function Promotion() {
    return (
        <div className="bg-white">
            <div className="overflow-hidden pt-32 sm:pt-14">
                <div className="bg-gradient-to-r from-red-600 to-pink-600">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative pb-16 pt-48 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                    Final Stock.
                                    <br/>
                                    Up to 50% off.
                                </h2>
                                <div className="mt-6 text-base">
                                    <a href="#" className="font-semibold text-white">
                                        Shop the sale
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                            </div>

                            <div className="absolute -top-32 left-1/3 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src={promoImg3}
                                                alt=""
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            <img
                                                className="h-64 w-64 rounded-lg object-cover  md:h-72 md:w-72"
                                                src={promoImg1}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-64 w-64 rounded-lg object-cover  md:h-72 md:w-72"
                                                src={promoImg5}
                                                alt=""
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            <img
                                                className="h-64 w-64 rounded-lg object-cover  md:h-72 md:w-72"
                                                src={promoImg2}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-64 w-64 rounded-lg object-cover  md:h-72 md:w-72"
                                                src={promoImg4}
                                                alt=""
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            <img
                                                className="h-64 w-64 rounded-lg object-cover  md:h-72 md:w-72"
                                                src={promoImg6}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
