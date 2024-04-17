import { useLoaderData } from 'react-router-dom'
import AgentCard from './AgentCard';
import Marquee from "react-fast-marquee";


const Agents = () => {
    const agentData = useLoaderData();

    return (
        <Marquee pauseOnHover={true} className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mr-6'>
                {
                    agentData.map(data => <AgentCard key={data.id} agent={data}></AgentCard>)
                }
            </div>
        </Marquee>
    );
};

export default Agents;