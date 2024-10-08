import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hook/UseAuth";


const GoogleLogin = () => {
   const {googleLogin}=useAuth();

   const handleGoogleSignIn = () => {
    googleLogin();
  };

    return (
        <button onClick={handleGoogleSignIn} className="btn w-full text-2xl">
        <div className="flex items-center gap-2">
          <FcGoogle size={24} />
          <p>Google</p>
        </div>
      </button>
    );
};

export default GoogleLogin;