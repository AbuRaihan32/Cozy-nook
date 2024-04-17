import { Link } from 'react-router-dom';
import home1 from '../../../public/home1.png';
import home2 from '../../../public/home2.png';
import home3 from '../../../public/home3.svg';
import { BsArrowUpRight } from "react-icons/bs";

const WhatWant = () => {
    return (
        <div>
            <div className='mb-7 text-center'>
                <h1 className='text-4xl font-bold mb-2'>What Do You Want</h1>
                <p>You can safely manage your work, inshallah you will not fall for any scams</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center text-center">


                <div data-aos="flip-left" data-aos-duration="1000" className="max-w-xs flex flex-col rounded-md hover:shadow-lg mx-auto border border-orange-100 p-6">
                    <div className='w-full h-60 flex items-center'>
                        <img src={home1} alt="" className="object-contain object-center mx-auto w-[70%] rounded-t-md h-[100%]" />
                    </div>
                    <div className="flex-grow pt-0 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Buy A Home</h2>
                            <p className="">Please read and understand before Buying, especially the sellers history.</p>
                        </div>
                    </div>
                    <div>
                        <Link to={``} className="relative w-[80%] mx-auto border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                            <span className="h-48 w-full rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="flex justify-center gap-2 items-center relative w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white"><span>Find a Home</span> <BsArrowUpRight className='text-xl'></BsArrowUpRight></span>
                        </Link>
                    </div>
                </div>


                <div data-aos="flip-left" data-aos-duration="1000" className="max-w-xs flex flex-col rounded-md hover:shadow-lg mx-auto border border-orange-100 p-6">
                    <div className='w-full h-60 flex items-center'>
                        <img src={home2} alt="" className="object-contain object-center mx-auto w-[50%] rounded-t-md h-[80%]" />
                    </div>
                    <div className="flex-grow pt-0 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Sale a Home</h2>
                            <p className="">Please read and understand before selling, especially the Buyers history.</p>
                        </div>
                    </div>
                    <div>
                        <Link to={``} className="relative w-[80%] mx-auto border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                            <span className="h-48 w-full rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="flex justify-center gap-2 items-center relative w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white"><span>Place an Ad</span> <BsArrowUpRight className='text-xl'></BsArrowUpRight></span>
                        </Link>
                    </div>
                </div>


                <div data-aos="flip-left" data-aos-duration="1000" className="max-w-xs flex flex-col rounded-md hover:shadow-lg mx-auto border border-orange-100 p-6">
                    <div className='w-full h-60 flex items-center'>
                        <img src={home3} alt="" className="object-contain object-center mx-auto w-[50%] rounded-t-md h-[80%]" />
                    </div>
                    <div className="flex-grow pt-0 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Rent A Home</h2>
                            <p className="">Please read and understand before Renting, especially the Rentals history.</p>
                        </div>
                    </div>
                    <div>
                        <Link to={``} className="relative w-[80%] mx-auto border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                            <span className="h-48 w-full rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="flex justify-center gap-2 items-center relative w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white"><span>Find a Rental</span> <BsArrowUpRight className='text-xl'></BsArrowUpRight></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWant;