/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hook/useMenu";
import ProductCard from "./ProductCard";

const Product = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();

    const men = menu.filter(item => item.category === 'men')
    const women = menu.filter(item => item.category === 'women')
    const kids = menu.filter(item => item.category === 'kids')





    return (
        <div>
            <Helmet

                title="Apon Style || New Arrivals"

            />
            <div className="text-center  mt-12" >

                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <div className="text-xl font-bold text-black">
                            <Tab>Man</Tab>
                            <Tab>Women</Tab>
                            <Tab>Kids</Tab>
                        </div>
                    </TabList>
                    <TabPanel>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 " >
                            {
                                men.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10" >
                            {
                                women.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 " >
                            {
                                kids.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Product;