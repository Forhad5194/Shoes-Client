import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

const ShowCaseCardDetails = () => {
    // const {id} = useParams()
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showcase')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                const foundItem = data.find((item) => item._id === id);
                setItem(foundItem || {}); // Set an empty object if no item found
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);


    const handleBag = (item) => {
        console.log(item);

    }





    const [selectedValue, setSelectedValue] = useState('');

    // Handle button click
    const handleButtonClick = () => {
        console.log('Shoes Size ', selectedValue);
        // You can perform any other actions with the selected value here
    };

    // Handle select change
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>

            <div className="card w-2/3 mt-8 lg:card-side bg-pink-50 shadow-xl">
                <figure><img className="h-[400px]" src={item?.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item?.name}</h2>
                    <p>{item?.title}</p>
                    <div className="flex justify-center items-center gap-4">
                        <select onChange={handleSelectChange} className="select select-primary w-1/2 max-w-xs">
                            <option disabled selected>What is the size ?</option>
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                        </select>
                        <div>
                            <button  onClick={handleButtonClick}  className="btn btn-outline btn-primary uppercase">
                            Select your size .
                            </button>
                        </div>
                    </div>
                    <div className="flex text-2xl font-bold items-center gap-2">
                        <TbCurrencyTaka /> {item?.price}
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleBag(item)}
                            className="btn btn-outline btn-primary uppercase">Add to bag</button>
                        <button className="btn btn-outline btn-primary uppercase">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCaseCardDetails;