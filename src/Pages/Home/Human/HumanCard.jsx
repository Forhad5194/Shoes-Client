/* eslint-disable react/prop-types */
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const HumanCard = ({ item }) => {
    const { name, image, title, price } = item;
    return (
        <div>

            <div className="card w-76 h-[475px] bg-pink-50 shadow-xl">
                <figure><img className="" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{title}</p>
                    <div className="flex items-center gap-2">
                        <TbCurrencyTaka /> {price}
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/card/${item?._id}`} >
                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md uppercase">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanCard;


