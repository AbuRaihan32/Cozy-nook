import Banner from "../../Components/ComponentsForHome/Banner";
import { useLoaderData } from "react-router-dom";
import EstateContainer from "../../Components/ComponentsForHome/EstateContainer";
import { Helmet } from "react-helmet-async";
import WhatWant from "../../Components/ComponentsForHome/WhatWant";
const Home = () => {

    const info = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Cozy | Home</title>
            </Helmet>
            <div className="w-[92%] mx-auto h-[50%] rounded-3xl">
                <Banner></Banner>
                <div className="mt-20">
                    <EstateContainer info={info}></EstateContainer>
                </div>
                <div className="mt-20">
                    <WhatWant></WhatWant>
                </div>
            </div>
        </div>
    );
};

export default Home;