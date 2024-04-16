import { Helmet } from "react-helmet-async";
import AboutUs from "../../AboutUs/AboutUs";
import Human from "../../Human/Human";
import Reviwes from "../../Reviwes/Reviwes";
import ShowCase from "../../ShowCase/ShowCase";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet
            
            title="Apon Style"
            
            
            />
            <Banner />
            <ShowCase />
            <AboutUs />
            <Human />
            <Reviwes />
        </div>
    );
};

export default Home;