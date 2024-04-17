import { IoLocation, IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const EstateCard = ({ info }) => {
    const { estate_title, price, location, area, facilities, image, status, beds, baths, id } = info;
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="card p-6 bg-base-100 shadow-xl border border-orange-600">
            <figure><img className="h-[200px] w-full rounded-2xl" src={image} alt="Shoes" /></figure>
            <div className=" flex flex-col">


                <div className="py-5">
                    <h2 className="text-[21px] font-bold text-start">{estate_title}</h2>
                </div>


                <div className="flex items-center justify-between">
                    <p> <span className="text-xl font-bold">For :</span> <button className="bg-orange-500 px-5 rounded-full font-semibold text-white">{status}</button></p>
                    <p> <span className="text-xl font-semibold">Price : </span><span className="text-xl font-bold text-orange-600">{price}</span></p>
                </div>


                <div className="flex justify-between mt-4">
                    <p className="flex items-center gap-2 text-[18px] font-semibold"> <IoLocation className="text-orange-600"></IoLocation> {location}</p>
                </div>


                <div className="text-start ml-2 text-[18px] font-semibold">
                    <h1>Facilities :</h1>
                    <ul className=" ml-10">
                        <li className="flex items-center gap-2"> <FaCircleChevronRight className="text-orange-600"></FaCircleChevronRight> {facilities[0]}</li>
                        <li className="flex items-center gap-2"> <FaCircleChevronRight className="text-orange-600"></FaCircleChevronRight> {facilities[1]}</li>
                        <li className="flex items-center gap-2"> <FaCircleChevronRight className="text-orange-600"></FaCircleChevronRight> {facilities[2]}</li>
                    </ul>
                </div>


                <div className="flex justify-between mt-2">
                    <p className="flex items-center gap-2"><IoBed className="text-orange-600"></IoBed> <span>{beds} Beds</span></p>
                    <p className="flex items-center gap-2"> <FaBath className="text-orange-600"></FaBath> <span>{baths}</span> Baths</p>
                    <p className="flex items-center gap-2"> <BiSolidArea className="text-orange-600"></BiSolidArea>  {area}</p>
                </div>


                <div className="card-actions mt-4">
                    <Link to={`/details/${id}`} className="relative w-[70%] mx-auto border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                        <span className="h-48 w-full rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white">Vew Property</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    info: PropTypes.object.isRequired
}

export default EstateCard;