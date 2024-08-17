
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'; // Import any icons you need
import bigimg from '../../src/assets/cybersecurity-woman-and-writing-global-location-in-GJ778KR.jpg';
import smallImg from '../../src/assets/cyber-security-left-img.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col pr-10 lg:flex-row min-h-screen bg-gradient-to-r from-[#452424] to-[#202020]">
      
      <div className="left_section lg:w-1/2 flex items-center justify-center p-8">
        <div className="text-center lg:text-left">
          <hr className="border-orange-400 my-4 w-16 lg:w-24 border-y-4 mx-auto lg:mx-0" />
          <br />
          <div className="text-3xl lg:text-5xl font-serif font-bold text-orange-600 mb-6 mt-4">About WebGuard</div>
          
          <div className="flex flex-col lg:flex-row items-center">
            <FaCheckCircle className="text-orange-500 text-2xl lg:text-3xl mr-3" />
            <p className="text-lg lg:text-xl text-white">Cyber Defense Innovation</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-4">
            <FaCheckCircle className="text-orange-500 text-2xl lg:text-3xl mr-3" />
            <p className="text-lg lg:text-xl text-white">Secure IT Solutions</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-4">
            <FaCheckCircle className="text-orange-500 text-2xl lg:text-3xl mr-3" />
            <p className="text-lg lg:text-xl text-white">Protecting Your Digital World</p>
          </div>
          <p className="text-3xl lg:text-5xl font-serif font-bold text-orange-600 mt-8">CyberSecurity</p>
   
        </div>
        
      </div>
      
      <div className="right_section lg:w-1/2 flex items-center justify-center p-8">
        <div className="text-white text-center lg:text-left">
          <div className="text-2xl lg:text-6xl font-serif font-bold mb-8">Leading the charge in cyber <br className="hidden lg:block" /> defense innovation.</div>
          <p className="text-lg lg:text-2xl">WebGuard is an integrated developer platform that protects web applications from a variety of threats.</p>
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="lg:w-2/3 lg:mr-8">
              <img className="h-auto lg:h-[530px] w-full object-cover  " src={bigimg} alt="" />
            </div>
            <div className="flex flex-col lg:w-1/3 mt-4 lg:mt-0">
              <img className="h-auto w-full lg:w-[320px] mb-4" src={smallImg} alt="" />
             <div>
             <Link to='/services'><button className="mt-8 px-6 py-3 flex items-center text-white font-semibold text-lg rounded-lg shadow-lg transition-transform duration-300" style={{ background: 'linear-gradient(to right, #F94B28, #FE711B)' }}>
          Learn More <FaArrowRight className="ml-2" />
        </button></Link>
             </div>
           
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
