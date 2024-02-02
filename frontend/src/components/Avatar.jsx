import { useState } from 'react';
import avatar from '../assets/avatar.jpg';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import {toast} from  'react-toastify'

const Avatar = ({ userRole }) => {
    const navigate =useNavigate();
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleLogout = () => {
        // Implement logout functionality here
        localStorage.clear('isLoggedIn', false)
          navigate('/')
          toast.success('Logout')
    };

    return (
        <div className='relative w-12'>
            <motion.img
                className='rounded-full cursor-pointer'
                src={avatar}
                onClick={toggleOptions}
                alt='Avatar'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            />
            {showOptions && (
                <motion.div
                    className='absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='p-2'>
                        <p className='text-center font-semibold'>{"Hi,"+userRole}</p>
                        <button onClick={handleLogout} className='block w-full p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none'>
                            Logout
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Avatar;
