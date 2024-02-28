import React from 'react';
import jerseyBanner from "../../public/jersey_banner2.png"

function FeaturedSection() {
    return (
        <div>
            <section
                aria-labelledby="social-impact-heading"
                className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-4 lg:px-8 relative"
            >
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={jerseyBanner}
                        alt="Customize your jersey"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 flex justify-left items-center">
                        <div className="px-6 py-4 sm:px-12 sm:py-40 lg:px-16 max-w-xl">
                            <div className="relative mx-auto max-w-full flex flex-col items-center text-center">
                                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    <span className="block sm:inline">CUSTOMIZE YOUR FAVORITE TEAM'S JERSEY.</span>
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Show off your team pride in your own style with customizable jerseys! Personalize your favorite team's jersey with your name, number to express your unique personality.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Start Customizing
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeaturedSection;
