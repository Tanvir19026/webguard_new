
import { Link } from "react-router-dom";

const DDoSPrevention = () => {
  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] min-h-screen p-6 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center border-b-2 border-gray-500 pb-4">
          DDoS Prevention Methods
        </h1>

        <section className="mb-8 p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg text-justify">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Detecting and preventing DDoS attacks is crucial for maintaining the availability and performance of web applications. Here are several methods for preventing DDoS attacks:
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            The Operation of DDoS Prevention
          </h2>
          <ul className="list-decimal ml-6 text-base sm:text-lg leading-relaxed mb-6">
            <li>
              <strong  className="text-orange-400 mb-4"> CDN:</strong> A content delivery network (CDN) is a system of geographically dispersed computers that can assist in distributing and absorbing DDoS assault traffic. The CDN can divert traffic from the origin server during a DDoS assault, assisting in maintaining the website or application’s online presence.
            </li>
            <li>
              <strong  className="text-orange-400 mb-4"> Load Balancing:</strong> One method for distributing incoming traffic among several servers is load balancing. This can lessen the likelihood that a DDoS assault will overwhelm a single server.
            </li>
            <li>
              <strong  className="text-orange-400 mb-4"> Rate Limiting:</strong> This method limits the number of requests that a specific IP address or user can make to the server in a predetermined amount of time. By doing this, attackers may be deterred from overloading the server with requests.
            </li>
            <li>
              <strong  className="text-orange-400 mb-4"> Cloud-Based DDoS Protection:</strong> Services offering cloud-based DDoS protection can offer a thorough defense against DDoS attacks. These services can mitigate assaults and filter out harmful traffic before it reaches the origin server.
            </li>
            <li>
              <strong className="text-orange-400 mb-4">Incident Response Plan:</strong> A collection of protocols that ought to be adhered to in the case of a DDoS assault is known as an incident response plan. The strategy should provide instructions on how to recognize an assault, react to it, and recover from it.
            </li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/services/ddos"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DDoSPrevention;
