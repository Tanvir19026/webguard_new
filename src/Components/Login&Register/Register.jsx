import  { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import registrationImage from '../../assets/undraw_enter_uhqk.svg';
import GoogleLogin from "./GoogleLogin";
import GithubLogin from "./GithubLogin";
import Toast from "../../Pages/Toast"; // Import the Toast component

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser } = useAuth();
  const [toast, setToast] = useState(null); // State to manage toast
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
      setToast({ message: "Passwords do not match!", type: "error" });
      return;
    }

    try {
      await createUser(email, password);
      setToast({ message: "Registration successful!", type: "success" });
      navigate(from, { replace: true });
    } catch (error) {
      setToast({ message: "Registration failed!", type: "error" });
    }
  };

  // Remove toast after a few seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row">
      {toast && <Toast message={toast.message} type={toast.type} />} {/* Render Toast */}
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 text-orange-600">Join Us Now!</h1>
          <p className="mb-6 text-2xl">
            Create an account to enjoy all our features and stay connected.
          </p>
          <img src={registrationImage} alt="Register" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif text-orange-600">Register</h2>
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
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-xl">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered text-xl"
              name="confirm_password"
              required
            />
          </div>
          {!passMatch && (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          )}
          <div className="form-control mt-6">
            <input
              className="btn bg-red-500 text-white text-xl"
              type="submit"
              value="Register"
            />
          </div>
          <div className="mt-6 text-2xl">
            <GoogleLogin />
          </div>
          <div className="mt-6 text-2xl">
            <GithubLogin />
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl">
              Already have an account?{" "}
              <Link to="/login" className="text-red-500 text-xl">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
