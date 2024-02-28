import React from 'react';
import olvideo from '../../public/t-shirt-video-featuring-a-young-woman-posing-against-a-gray-brick-wall-12828.mp4';

function HeroVideo() {
    return (
        <div>
            <div className="relative">
                <video className="w-full h-65xvh object-cover" controls autoPlay loop muted>
                    <source src={olvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <div className="absolute inset-0 text-white bg-black bg-opacity-50 p-8">

                    <div className='absolute bottom-3 mb-2.5'>
                        <h2 className="text-3xl font-bold sm:text-5xl">
                            Dare to go headless!
                        </h2>

                        <p className="mt-4 max-w-xl sm:text-xl/relaxed">
                            Enter the realm of limitless digital possibilities with headless websites. Embrace the future of web development where content reigns supreme, and design knows no boundaries. 
                        </p>

                        <div className="mt-8 flex flex-wrap justify-start gap-4">
                            <a
                                className="block rounded-full border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-pink-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="#" 
                            >
                                Get Started
                            </a>

                            <a
                                className="block rounded-full border border-pink-600 bg-white px-12 py-3 text-sm font-medium text-pink-600 hover:bg-pink-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>                        
                    </div>
                    
                </div> */}
            </div>
        </div>
    );
}

export default HeroVideo;
