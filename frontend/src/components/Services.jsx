import ServiceCard from "./ServicesCard";
import CardData from './Config'
const Services = () => {
    return (
        <div className="w-full h-screen bg-gray-100 bg-custom-white">
            <div className="bg-blue-400 h-28 flex justify-between items-center px-5">
                <ul className="flex text-white space-x-64 ms-24 text-lg me-12">
                    <li>10k+ Courses</li>
                    <li>Lifetime Access</li>
                    <li>Lifetime Support</li>
                    <li>Community Support</li>
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center mt-12">
                <p className="text-3xl font-semibold text-gray-900 mb-4">Why we are the best?</p>
                <h2 className="text-7xl text-purple-800 font-semibold">See Our Services</h2>
            </div>
            {/*service card*/}
            <div className="flex mt-16 space-x-24 justify-center">
            {CardData.map((item, index) => (
                <ServiceCard key={index} data={item.data} />
            ))}
        </div>
        </div>
    );
};

export default Services;
