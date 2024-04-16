import { useEffect, useState } from "react";
import HumanCard from "./HumanCard";
import { Link } from "react-router-dom";

const Human = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/subcard')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])




    return (
        <div>
            <section className="text-center mt-8">
                <p className="text-xl font-medium">EMBRACE YOUR</p>
                <h2 className="text-4xl font-bold">HUMAN NATURE</h2>
                <p className="text-xl font-normal">Reconnect your feet with the ground, and move in the ways that nature intended</p>
            </section>
            <div className="flex justify-end items-end">
                <Link to={'/product'}>
                    <button className="btn btn-primary font-bold text-xl text-white" >Explore collections </button>
                </Link>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 ">
                {
                    item.map(item => <HumanCard key={item._id} item={item} ></HumanCard>)
                }
            </div>

        </div>
    );
};

export default Human;