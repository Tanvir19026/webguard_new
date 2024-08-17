
import { Link } from "react-router-dom";

const PhishingDetection = () => {
  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] min-h-screen p-6 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center border-b-2 border-gray-500 pb-4">
          Phishing Detection(React JS)
        </h1>

        <section className="mb-8 p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg text-justify">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Detecting phishing attacks is crucial for protecting users and organizations from falling victim to fraudulent schemes. Here are several methods for detecting phishing attempts:
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            The Operation of the Phishing Detection Methodology
          </h2>
          <ul className="list-decimal ml-6 text-base sm:text-lg leading-relaxed mb-6">
            <li >
              <strong className="text-orange-400 mb-4"> Build a Model:</strong> The first step in identifying phishing emails is to build a machine-learning model. Although the model type isn’t stated in the flowchart, Naive Bayes classifiers are a popular option for this kind of work.
            </li>
            <li >
              <strong className="text-orange-400 mb-4">Establish Flask API:</strong> The creation of a Flask API is the task of this step. A well-liked Python framework for creating web apps and APIs is called Flask. The API will probably offer a mechanism for other components of your system to communicate with the machine-learning model.
            </li>
            <li >
              <strong className="text-orange-400 mb-4"> Create API Requests from React.js:</strong> This phase involves creating requests from a React.js application to the Flask API. A JavaScript package called React.js is used to create user interfaces. Emails would probably be sent to the API for phishing detection by the React.js application.
            </li>
            <li >
              <strong className="text-orange-400 mb-4">Machine Learning (Naive Bayes classifier):</strong> This section describes the kind of model that can be used to identify phishing attempts. One kind of probabilistic machine learning model that performs well on text categorization problems is the naive Bayes classifier.
            </li>
            <li >
              <strong className="text-orange-400 mb-4">Final Step:</strong> These highlight how important it is to use SSL certificates that are both secure and validated. User data is shielded from interception by SSL certificates, which encrypt communication between the web server and the client.
            </li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/services/phishing"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhishingDetection;
