import EstateCard from "./EstateCard";
import PropTypes from 'prop-types';

const EstateContainer = ({ info }) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-7">Choose Your Favorite Estate</h1>
            <p className="px-5 md:mx-32">Almost all people in the world have a dream to have a home with a beautiful environment and a tidy home is an indicator of a persons taste, so you can choose our homes to fulfill your dream.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    info.map(data => <EstateCard
                        key={data.id}
                        info={data}
                    ></EstateCard>)
                }
            </div>
        </div>
    );
};

EstateContainer.propTypes ={
    info: PropTypes.array.isRequired
}
export default EstateContainer;