import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="flex  flex-col justify-between w-3/4 h-auto  p-4  ms-48 mt-32">
      <div className="flex justify-center font-sans font-semibold text-5xl space-x-4">
        <h1 className="text-sky-600">Choose Your </h1>
        <span className="text-blue-700">Role</span>
      </div>

      <div className="flex justify-between w-full m-12 space-x-6  ms-40">
        <Link to={'/Signup'} className="flex-1">
          <div className="w-1/2 h-full p-4 border-2 solid hover:border-blue-500 shadow-lg hover:shadow-md shadow-blue-400 cursor-pointer transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110 duration-100">
            <h2 className="text-4xl font-semibold font-sans text-gray-800">User</h2>
            <p className="text-xl text-gray-500 mt-2">As a user, you have the power to explore a variety of courses and gain access to all of them. </p>
          </div>
        </Link>

        <Link to={'/Signup'} className="flex-1">
          <div className="w-1/2 h-full p-4 border-2 solid hover:border-blue-500 shadow-lg hover:shadow-md shadow-blue-400 cursor-pointer transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110 duration-100">
            <h2 className="text-4xl font-semibold font-sans text-gray-800">Admin</h2>
            <p className="text-gray-500 mt-2 text-xl">You can create courses according to your interest and make them public so that users can access them.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
