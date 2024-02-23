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
                <div className="absolute inset-0 text-white bg-black bg-opacity-50 p-8">

                    <div className='absolute bottom-3 mb-2.5'>
                        <h2 className="text-3xl font-bold sm:text-5xl">
                            Dare to go headless!
                        </h2>

                        <p className="mt-4 max-w-xl sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-start gap-4">
                            <a
                                className="block transition-all rounded-full bg-pink-600 bg-gradient-to-r from-red-600 to-pink-600  px-12 py-3 text-sm font-medium text-white hover:bg-white hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="#" 
                            >
                                Get Started
                            </a>

                            <a
                                className="block transition-all rounded-full border border-white bg-wxhite px-12 py-3 text-sm font-medium text-white hover:bg-pink-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default HeroVideo;
