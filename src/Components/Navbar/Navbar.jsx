/* eslint-disable no-undef */
import  { useState } from 'react';
import { Link } from 'react-router-dom';
 

import { FaBars, FaTimes, FaHome, FaFileAlt, FaBoxOpen, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa'; // Importing React Icons
import useAuth from './../../Hook/UseAuth';
import logo from '../../assets/logo.png'


const Navbar = () => {
  const { user, logout } = useAuth();
 

  //const isAdminUser = user && user.email === 'tanvirrafi1999@gmail.com';


  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();

  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav  className="p-14 bg-white  flex justify-between items-center shadow-lg h-28">
      <div className="flex items-center">
      <img src={logo} alt="WebGuard Logo" className="h-14" />
      <div className="text-3xl font-extrabold text-gray-700 ml-2">
        <Link to="/" className="hover:text-orange-500">Web<span className="text-orange-500">Guard</span></Link>
      </div>
    </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`hidden md:flex items-center space-x-6`}>
          <Link to="/" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500">
            <FaHome className="mr-2 text-orange-500 " /> Home
          </Link>
    
          <Link to="/services" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500">
            <FaBoxOpen className="mr-2 text-orange-500" /> Services
          </Link>
          <Link to="/documentation" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" >
                  <FaFileAlt className="mr-2 text-orange-500" /> Documentation
                </Link>
          {user ? (
            <>
              <Link to="/profile" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500">
                <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full mr-2" /> Profile
              </Link>
              <button onClick={handleLogout} className="flex items-center text-xl font-bold text-red-700 hover:text-orange-500">
                <FaSignOutAlt className="mr-2 text-red-500" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500">
                <FaUserPlus className="mr-2 text-orange-500" /> Signup
              </Link>
              <Link to="/login" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500">
                <FaSignInAlt className="mr-2 text-orange-500" /> Login
              </Link>
            </>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
          <div className="bg-white w-64 h-full p-6 shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none mb-4">
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col justify-between h-4/6 ">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                  <FaHome className="mr-2 text-orange-500" /> Home
                </Link>
               {/* {
                isAdminUser&&( <Link to="/admin" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                  <FaUserShield className="mr-2" /> Admin
                </Link>)
               } */}
                <Link to="/services" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                  <FaBoxOpen className="mr-2 text-orange-500" /> Services
                </Link>

                <Link to="/documentation" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                  <FaFileAlt className="mr-2  text-orange-500"  /> Documentation
                </Link>

                {user ? (
                  <>
                    <Link to="/profile" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                      <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full mr-2" /> Profile
                    </Link>
                    <button onClick={handleLogout} className="flex  items-center pt-[100px] text-xl font-bold text-red-700 hover:text-orange-500">
                      <FaSignOutAlt className="mr-2 text-red-500" /> Logout
                    </button>
                  </>
                ) : null}
              </div>
              {!user && (
                <div className="mt-4 flex flex-col space-y-4">
                  <Link to="/register" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                    <FaUserPlus className="mr-2" /> Signup
                  </Link>
                  <Link to="/login" className="flex items-center text-xl font-bold text-gray-700 hover:text-orange-500" onClick={toggleMenu}>
                    <FaSignInAlt className="mr-2" /> Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
