import { useState } from "react";
import { toast } from "react-toastify";

const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imglink, setImglink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
       toast.success("course generated")
    };

    return (
        <div className="flex justify-center items-center h-full bg-gray-100 mt-16">
            <div className="bg-white rounded-lg p-8 w-full max-w-xl shadow-lg mt-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Create New Course</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">Title:</label>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            className="input-field mb-4 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500 w-full" // Adjusted width to full width
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">Description:</label>
                        <textarea
                            placeholder="Enter Description"
                            className="input-field mb-4 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500 w-full" // Adjusted width to full width
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            style={{ minHeight: "8rem" }}
                        />
                    </div>

                    <div>
                        <label htmlFor="imglink" className="block text-gray-700 font-semibold mb-1">Image Link:</label>
                        <input
                            type="url"
                            placeholder="Enter Image Link"
                            className="input-field mb-4 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500 w-full" // Adjusted width to full width
                            value={imglink}
                            onChange={(e) => setImglink(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-gray-700 font-semibold mb-1">Price:</label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input-field mb-4 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-500 w-full" // Adjusted width to full width
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md w-full transition duration-300 ease-in-out transform hover:scale-105">
                        Generate Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
