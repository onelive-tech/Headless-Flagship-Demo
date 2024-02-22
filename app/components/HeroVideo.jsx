import React from 'react';
import olvideo from '../../public/t-shirt-video-featuring-a-young-woman-posing-against-a-gray-brick-wall-12828.mp4';

function HeroVideo() {
    return (
        <div>
            <div className="relative">
                <video className="w-full h-65vh object-cover" controls autoPlay loop muted>
                    <source src={olvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-white text-3xl font-normal sm:text-5xl">
                                Dare to go headless!
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    className="block w-full rounded-full border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    href="#"
                                >
                                    Get Started
                                </a>

                                <a
                                    className="block w-full rounded-full border border-pink-600 bg-white px-12 py-3 text-sm font-medium text-pink-600 hover:bg-pink-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                    href="#"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroVideo;
