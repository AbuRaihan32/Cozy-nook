import Banner from "../../Components/ComponentsForHome/Banner";
import { useLoaderData } from "react-router-dom";
import EstateContainer from "../../Components/ComponentsForHome/EstateContainer";
const Home = () => {

    const info = useLoaderData();
    return (
        <div>
            <div className="w-[92%] mx-auto h-[50%] rounded-3xl">
                <Banner></Banner>
                <div className="mt-20">
                    <EstateContainer info={info}></EstateContainer>
                </div>
            </div>
        </div>
    );
};

export default Home;