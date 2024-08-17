
 // Replace with your actual auth hook path
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../Hook/UseAuth';

const Profile = () => {
  const { user } = useAuth();
  console.log(user)

  const name = user?.displayName || 'Default Name';
  const image = user?.photoURL;
  const email = user?.email || 'Default Email';

  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] min-h-screen flex justify-center items-center">
      <div className="relative group bg-black rounded-lg overflow-hidden w-80 text-center transform transition-transform duration-300 hover:scale-105">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="flex justify-center items-center w-full h-64 bg-gray-700 text-white text-6xl">
            <FaUserCircle />
          </div>
         
        )}
        <div className="p-6 bg-gray-900">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <h3 className="text-xl font-semibold text-white">{email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
