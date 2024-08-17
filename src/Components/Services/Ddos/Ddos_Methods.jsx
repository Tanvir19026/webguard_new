import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';

const Ddos_Methods = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const techniques = [
    {
      title: "Content Delivery Network (CDN)",
      description:
        "Distribute static assets across multiple servers using a CDN to handle traffic efficiently.",
      borderColor: "#3498db", // Unique border color for this technique
      // Brief Implementation Details
      implementation: `
 1. Choose a CDN provider (e.g., Cloudflare, Akamai).
 2. Configure CDN to cache and distribute static assets globally.
 3. Integrate CDN URLs into your React app for static assets.
 4. Test and monitor CDN performance.
      `,
    },
    {
      title: "Load Balancing",
      description:
        "Implement load balancing to distribute incoming requests evenly across multiple servers, preventing overload on a single server.",
      borderColor: "#2ecc71",
      // Brief Implementation Details
      implementation: `
 1. Choose a load balancing solution (e.g., NGINX, HAProxy).
 2. Configure load balancer to evenly distribute requests among backend servers.
 3. Add application servers to the load balancer pool.
 4. Test load balancing by sending requests and ensuring even distribution.
      `,
    },
    {
      title: "Rate Limiting",
      description:
        "Apply rate limiting on the server to control the number of requests from a single IP address within a specific time frame.",
      borderColor: "#e74c3c",
      // Brief Implementation Details
      implementation: `
 1. Choose a rate limiting library or middleware (e.g., express-rate-limit).
 2. Configure rate limits based on requests per IP address and time frame.
 3. Integrate rate limiting logic into your server code.
 4. Test and monitor application behavior with requests exceeding and within rate limits.
      `,
    },
    {
      title: "Cloud-Based DDoS Protection",
      description:
        "Leverage cloud-based DDoS protection services to filter out malicious traffic before it reaches the server.",
      borderColor: "#f39c12",
      // Brief Implementation Details
      implementation: `
 1. Choose a cloud-based DDoS protection service (e.g., Cloudflare, AWS Shield).
 2. Configure DNS to point to the DDoS protection provider's nameservers.
 3. Set up DDoS protection settings, including traffic filtering rules.
 4. Regularly monitor DDoS attack attempts and adjust protection settings.
      `,
    },
    {
      title: "Server-Side Security",
      description:
        "Regularly update and patch server software, implement network security best practices, and use firewalls and intrusion detection systems.",
      borderColor: "#9b59b6",
      implementation: `
 1. Regularly update and patch server operating system and software.
 2. Implement network security best practices (firewalls, secure communication protocols).
 3. Set up an Intrusion Detection System (IDS) to monitor network traffic.
 4. Conduct regular security audits and penetration testing.
      `,
    },
    {
      title: "Incident Response Plan",
      description:
        "Develop and maintain an incident response plan that outlines procedures for handling DDoS attacks, including communication and recovery processes.",
      borderColor: "#34495e",
      implementation: `
 1. Form an incident response team responsible for handling security incidents.
 2. Develop detailed procedures for detecting, responding to, and recovering from DDoS attacks.
 3. Train the incident response team and conduct regular drills.
 4. Keep the incident response plan well-documented and up-to-date.
      `,
    },
  ];

  const handleToggle = (index) => {
    setSelectedTechnique(index === selectedTechnique ? null : index);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-4">
        {techniques.map((technique, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-md p-4 transition-transform duration-200 overflow-x-auto w-90"
            style={{ borderColor: technique.borderColor }}
          >
            <h3 className={`text-2xl font-semibold mb-2 text-white`}>{technique.title}</h3>
            <p className="mb-4 text-orange-200 text-xl">{technique.description}</p>
            {selectedTechnique === index && (
              <pre className="bg-gray-200 text-cyan-800 rounded-md text-xl p-2 overflow-x-auto">
                <code>{technique.implementation}</code>
              </pre>
            )}
            <button
              className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-5"
              onClick={() => handleToggle(index)}
            >
              <FaEyeSlash className="mr-2" /> {selectedTechnique === index ? 'Hide' : 'Show'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ddos_Methods;
