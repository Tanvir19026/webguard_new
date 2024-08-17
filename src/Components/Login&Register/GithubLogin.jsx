
import useAuth from "../../Hook/UseAuth";
import { FaGithub } from "react-icons/fa";


const GithubLogin = () => {
   const {githubLogin}=useAuth();

   const handleGoogleSignIn = () => {
    githubLogin();
  };

    return (
        <button onClick={handleGoogleSignIn} className="btn w-full text-2xl">
        <div className="flex items-center gap-2">
          <FaGithub size={24} />
          <p>Github</p>
        </div>
      </button>
    );
};

export default GithubLogin;