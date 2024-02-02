import React from 'react';
const ServiceCard = ({ data }) => {
    return (
        <div className="flex justify-center">
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden w-64 max-w-xs mx-auto mb-6">
        <div className="bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{data.heading}</h2>
            <p className="text-sm text-gray-600 mb-4">{data.desc}</p>
            <button className="block w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
                {data.btn}
            </button>
        </div>
    </div>
</div>

    );
};

export default ServiceCard;


