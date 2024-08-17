import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hook/UseAuth";


const Documentation = () => {
  const { logout } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={`drawer ${isDrawerOpen ? "drawer-open" : ""} drawer-mobile lg:drawer-open bg-gradient-to-r from-[#452424] to-[#202020]`}>
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="drawer-content flex flex-col">
        
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden self-end m-4">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
        ></label>
        <ul className="bg-gradient-to-r from-[#452424] to-[#202020] menu p-4 w-80 bg-base-200 text-base-content flex flex-col justify-between h-full">
          <div>
            <Link to="/docsql" onClick={handleLinkClick}>
              <li className="mt-5 items-center text-center h-[65px] rounded-lg p-2 border-4 border-gray-600 justify-center text-white text-xl font-bold hover:bg-black hover:text-white mb-5">
                SQL Injection Prevention & Detection 
              </li>
            </Link>
            <Link to="/doccookie" onClick={handleLinkClick}>
              <li className="mx-auto text-center rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-white text-xl font-bold hover:bg-black hover:text-white mb-5 h-[65px]">
                Cookie & Session Hijacking Prevention
              </li>
            </Link>
            <Link to="/docxss" onClick={handleLinkClick}>
              <li className="mx-auto text-center rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-white text-xl font-bold hover:bg-black hover:text-white mb-5 h-[65px]">
              Cross Site Scripting Prevention & Detection
              </li>
            </Link>

            <Link to="/docphishing" onClick={handleLinkClick}>
              <li className="mx-auto text-center rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-white text-xl font-bold hover:bg-black hover:text-white mb-5 h-[65px]">
              Phishing Detection
              </li>
            </Link>

            <Link to="/docddos" onClick={handleLinkClick}>
              <li className="mx-auto text-center rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-white text-xl font-bold hover:bg-black hover:text-white mb-5 h-[65px]">
              DDOS Prevention 
              </li>
            </Link>

            <Link to="/docmalware" onClick={handleLinkClick}>
              <li className="mx-auto text-center rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-white text-xl font-bold hover:bg-black hover:text-white mb-5 h-[65px]">
              Malware Detection 
              </li>
            </Link>


          </div>
          <div className="flex space-x-4 p-4 text-xl">
            <Link to="/" className="w-full" onClick={handleLinkClick}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Home
              </button>
            </Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full">
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
