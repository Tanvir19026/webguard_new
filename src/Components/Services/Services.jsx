
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import sql from '../../assets/SQL-Injection-Attack.png';
import cookie from '../../assets/session_hijacking.png';
import xss from '../../assets/xss.png';
import Phishing from '../../assets/phishing.png';
import ddos from '../../assets/ddos.png';
import malware from '../../assets/malware (2).png';

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] p-10" style={{ background: 'linear-gradient(to right, #452424, #202020)'  }}>
      <h2 className="text-4xl text-center font-serif font-bold text-orange-500 mb-4">Our Services</h2>
      <hr className="border-0 h-1 bg-orange-500 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{
            width: '350px',
            height: '400px',
            margin: 'auto',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="flex items-center justify-center h-3/4">
            <img src={sql} alt="SQL Injection Prevention & Detection" className="object-contain h-full" />
          </div>
          <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 text-white">
            <h3 className="text-xl font-bold mb-2">SQL Injection Prevention & Detection</h3>
            <div className="flex items-center justify-center">
              <Link to="/services/sql" className="text-orange-500 hover:text-orange-400 transition duration-300 flex items-center">
                <span className="text-xl font-serif font-bold">Explore</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{
            width: '350px',
            height: '400px',
            margin: 'auto',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="flex items-center justify-center h-3/4">
            <img src={cookie} alt="Cookie and Session Hijacking Prevention" className="object-contain h-full" />
          </div>
          <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 text-white">
            <h3 className="text-xl font-bold mb-2">Cookie and Session Hijacking Prevention</h3>
            <div className="flex items-center justify-center">
              <Link to="/services/cookie" className="text-orange-500 hover:text-orange-400 transition duration-300 flex items-center">
                <span className="text-xl font-serif font-bold">Explore</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{
            width: '350px',
            height: '400px',
            margin: 'auto',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="flex items-center justify-center h-3/4">
            <img src={xss} alt="Cross Site Scripting Prevention & Detection" className="object-contain h-full" />
          </div>
          <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 text-white">
            <h3 className="text-xl font-bold mb-2">Cross Site Scripting Prevention & Detection</h3>
            <div className="flex items-center justify-center">
              <Link to="/services/xss" className="text-orange-500 hover:text-orange-400 transition duration-300 flex items-center">
                <span className="text-xl font-serif font-bold">Explore</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{
            width: '350px',
            height: '400px',
            margin: 'auto',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="flex items-center justify-center h-3/4">
            <img src={Phishing} alt="Phishing Detection" className="object-contain h-full" />
          </div>
          <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 text-white">
            <h3 className="text-xl font-bold mb-2">Phishing Detection</h3>
            <div className="flex items-center justify-center">
              <Link to="/services/phishing" className="text-orange-500 hover:text-orange-400 transition duration-300 flex items-center">
                <span className="text-xl font-serif font-bold">Explore</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{
            width: '350px',
            height: '400px',
            margin: 'auto',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="flex items-center justify-center h-3/4">
            <img src={ddos} alt="DDOS Prevention" className="object-contain h-full" />
          </div>
          <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 text-white">
            <h3 className="text-xl font-bold mb-2">DDOS Prevention</h3>
            <div className="flex items-center justify-center">
              <Link to="/services/ddos" className="text-orange-500 hover:text-orange-400 transition duration-300 flex items-center">
                <span className="text-xl font-serif font-bold">Explore</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          style={{
            width: '350px',
            height: '400px',
            margin: 'auto',
            border: '2px solid #FFFFFF',
          }}
        >
          <div className="flex items-center justify-center h-3/4">
            <img src={malware} alt="Malware Detection" className="object-contain h-full" />
          </div>
          <div className="p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 text-white">
            <h3 className="text-xl font-bold mb-2">Malware Detection</h3>
            <div className="flex items-center justify-center">
              <Link to="/services/malware" className="text-orange-500 hover:text-orange-400 transition duration-300 flex items-center">
                <span className="text-xl font-serif font-bold">Explore</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
          </div>
          
        </div>
      
      </div>

      <hr className="border-0 h-1 bg-orange-500 mt-10" />

    </div>
  );
};

export default Services;
