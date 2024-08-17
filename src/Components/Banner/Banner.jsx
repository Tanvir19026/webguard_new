
import bannerImg from '../../assets/banner-img.png'; // Assuming you have imported your image correctly
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-8 py-4 h-screen"
      style={{
        background: 'linear-gradient(to right, #452424, #202020)',
      }}
    >
      <div className="text-center md:text-left md:w-1/2 p-8">
        <h1 className="text-5xl md:text-4xl font-extrabold text-orange-500 relative overflow-hidden">
          <span className="animate-visible-hidden text-6xl">A unified developer platform.</span><br />
          <hr className="border-t-2 border-gray-400 my-4 w-full mx-auto" /> {/* Horizontal line */}
          <span className="text-gray-200 font-serif text-4xl mt-4 block">that helps safeguard the web using powerful encryption.</span>
        </h1>
        <Link to='/services'><button className="mt-8 px-6 py-3 flex items-center text-white font-semibold text-lg rounded-lg shadow-lg transition-transform duration-300" style={{ background: 'linear-gradient(to right, #F94B28, #FE711B)' }}>
          Learn More <FaArrowRight className="ml-2" />
        </button></Link>
      </div>
      <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-end">
        <img
          src={bannerImg}
          alt="Security Illustration"
          className="w-full max-w-2xl object-cover animation-pulse"
          style={{ marginTop: '-20px', marginBottom: '-20px' }}
        />
      </div>
    </div>
  );
}

export default Banner;
