import { useEffect } from "react";
import { useState } from "react";
import ShowCaseCard from "./ShowCaseCard";

const ShowCase = () => {

    const [ item , setItem ] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/showcase')
        .then(res => res.json())
        .then(data => {
             setItem(data)
 
        })
    } , [])






    return (
        <div>

            <section>
                <h2 className="text-3xl font-semibold text-black mt-5 uppercase underline">Product Showcase</h2>
            </section>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
                {
                    item.map(item => <ShowCaseCard key={item._id} item={item}></ShowCaseCard>)
                }
            </div>
        </div>
    );
};

export default ShowCase;