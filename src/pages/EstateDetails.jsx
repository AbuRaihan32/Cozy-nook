import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BiSolidArea } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { IoBed, IoLocation } from 'react-icons/io5';
import { useParams, useLoaderData, Link } from 'react-router-dom'
const EstateDetails = () => {
    const [home, setHome] = useState([])
    const HomeData = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const currentHome = HomeData.find(data => data.id === id);
        setHome(currentHome);
    }, [HomeData, id])

    const { estate_title, segment_name, description, price, status, area, location, facilities, beds, baths, image } = home;

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16">
            <Helmet>
                <title>Cozy | Details</title>
            </Helmet>
            <div className="flex flex-col overflow-hidden rounded">
                <div className='h-[calc(100vh-40vh)] '>
                    <img src={image} alt="" className="w-full h-full bg-gray-500" />
                </div>
                <div className='w-full flex justify-center -mt-16'>
                    <div className="w-[90%] md:w-[85%] pb-12 m-4 mx-auto space-y-6  lg:rounded-md  card p-6 bg-base-100 shadow-xl border border-orange-600 bg-opacity-90">
                        <div className="space-y-2">
                            <div className="py-5">
                                <h2 className="text-[21px] font-bold text-start">{estate_title}</h2>
                            </div>


                            <div className="md:flex items-center justify-between">
                                <p> <span className="text-xl font-bold">For :</span> <button className="bg-orange-500 px-5 rounded-full font-semibold text-white">{status}</button></p>
                                <p> <span className="text-xl font-semibold">Price : </span><span className="text-xl font-bold text-orange-600">{price}</span></p>
                            </div>


                            <div className="md:flex justify-between mt-4">
                                <p className="flex flex-col md:flex-row  gap-2 text-[18px] font-semibold">
                                    <span className='flex items-center gap-2'>
                                        <IoLocation className="text-orange-600"></IoLocation>
                                        <span className='text-xl font-bold'>Location:</span>
                                    </span>
                                    <span className='ml-10 md:ml-0'>
                                        {location}
                                    </span>
                                </p>

                                <p><span className='text-xl font-bold'>Segment Name :</span> <span className='text-xl'>{segment_name}</span></p>
                            </div>

                            <div>
                                {facilities && Array.isArray(facilities) && (
                                    <div className="text-start ml-2 text-[18px] font-semibold lg:flex justify-start">
                                        <h1 className='text-xl font-bold'>Facilities :</h1>
                                        <ul className=" ml-10 md:flex gap-9">
                                            {facilities.map((facility, index) => (
                                                <li key={index} className="flex items-center gap-2"> <FaCircleChevronRight className="text-orange-600"></FaCircleChevronRight> {facility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className='lg:flex items-center gap-4'>
                                <h1 className='text-xl font-bold'>You Need To Know :</h1>
                                <div className="flex justify-around gap-9 mt-2">
                                    <p className="flex items-center gap-2"><IoBed className="text-orange-600"></IoBed> <span>{beds} Beds</span></p>
                                    <p className="flex items-center gap-2"> <FaBath className="text-orange-600"></FaBath> <span>{baths}</span> Baths</p>
                                    <p className="flex items-center gap-2"> <BiSolidArea className="text-orange-600"></BiSolidArea>  {area}</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p> <span className='text-xl font-bold'>Description : </span>
                                <span className={'text-[18px]'}> {description}</span> </p>
                        </div>
                        <Link to={'/'} className="btn w-[50%] mx-auto mt-7 bg-orange-600 rounded-none text-white px-6 hover:bg-orange-700">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;