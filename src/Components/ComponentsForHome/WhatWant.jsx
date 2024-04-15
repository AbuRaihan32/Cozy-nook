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


                <div data-aos="flip-left" data-aos-duration="1000" className="max-w-xs rounded-md hover:shadow-lg mx-auto border border-orange-100">
                    <div className='w-full h-72 flex items-center'>
                        <img src={home1} alt="" className="object-contain object-center mx-auto w-[70%] rounded-t-md h-full" />
                    </div>
                    <div
                        className="flex flex-col justify-between p-6 pt-0 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Buy a Property</h2>
                            <p className="">Please read and understand before Buy, especially the sellers history.</p>
                        </div>
                        <button type="button" className="flex justify-center gap-2 items-center border-2 border-orange-600 p-3 font-semibold tracking-wide rounded-lg hover:bg-orange-600 hover:text-white "><span>Find a Home</span> <BsArrowUpRight className='text-xl'></BsArrowUpRight></button>
                    </div>
                </div>


                <div data-aos="flip-left" data-aos-duration="1000" className="max-w-xs rounded-md hover:shadow-lg mx-auto border border-orange-100">
                    <div className='w-full h-72 flex items-center'>
                        <img src={home2} alt="" className="object-contain object-center mx-auto w-[50%] rounded-t-md h-[80%]" />
                    </div>
                    <div className="flex flex-col justify-between p-6 pt-0 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Sale a Home</h2>
                            <p className="">Please read and understand before selling, especially the sellers history.</p>
                        </div>
                        <button type="button" className="flex justify-center gap-2 items-center border-2 border-orange-600 p-3 font-semibold tracking-wide rounded-lg hover:bg-orange-600 hover:text-white "><span>Place an Ad</span> <BsArrowUpRight className='text-xl'></BsArrowUpRight></button>
                    </div>
                </div>


                <div data-aos="flip-left" data-aos-duration="1000" className="max-w-xs rounded-md hover:shadow-lg mx-auto border border-orange-100">
                    <div className='w-full h-72 flex items-center'>
                        <img src={home3} alt="" className="object-contain object-center mx-auto w-[50%] rounded-t-md h-[80%]" />
                    </div>
                    <div className="flex flex-col justify-between p-6 pt-0 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Rent a Home</h2>
                            <p className="">Please read and understand before Renting, especially the Rental history.</p>
                        </div>
                        <button type="button" className="flex justify-center gap-2 items-center border-2 border-orange-600 p-3 font-semibold tracking-wide rounded-lg hover:bg-orange-600 hover:text-white "><span>Find a Rental</span> <BsArrowUpRight className='text-xl'></BsArrowUpRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWant;