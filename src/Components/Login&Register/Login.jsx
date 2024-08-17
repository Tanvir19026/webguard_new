import  { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hook/UseAuth";
import loginImage from '../../assets/undraw_secure_login_pdn4.svg';
import GoogleLogin from "./GoogleLogin";
import GithubLogin from "./GithubLogin";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      toast.success("Login successful!");
    } catch (error) {
      setErrorMessage("Incorrect email or password!");
      toast.error("Login failed: Incorrect email or password!");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row">
     
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-6xl font-bold text-orange-600 mb-4">Welcome Back!</h1>
          <p className="text-2xl mb-6">
            Login to your account to continue where you left off.
          </p>
          <img src={loginImage} alt="Login" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif text-orange-600">Login</h2>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered text-xl"
              name="email"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-xl"
              name="password"
              required
            />
          </div>
          {errorMessage && (
            <div role="alert" className="alert alert-warning mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}
          <div className="form-control mb-6">
            <input
              className="btn bg-red-500 text-white text-xl"
              type="submit"
              value="Login"
            />
          </div>
          <div className="mb-6">
            <GoogleLogin />
          </div>
          <div className="mb-6">
            <GithubLogin />
          </div>
          <div className="text-center">
            <p className="text-xl">
              New in webguard?{" "}
              <Link to="/register" className="text-red-500 text-xl">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
