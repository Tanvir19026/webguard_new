/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const XSS_Doc = () => {
  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] min-h-screen p-6 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center border-b-2 border-gray-500 pb-4">
          XSS Detection and Prevention
        </h1>

        <section className="mb-8 p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg text-justify">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Cross-site scripting (XSS) is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. Here are some methods for detecting and preventing XSS attacks:
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
            1. Input Validation
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            We can limit the characters and formats that can be provided by checking user input. Attackers will find it more difficult to insert harmful scripts into your application as a result.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Consider a form where people can input their names. Validation can be used to restrict input to just letters, spaces, and hyphens. By doing this, attackers would be prevented from entering something similar in the name field, such as <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
            2. Output Encoding
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            A vital defense against XSS assaults is output encoding. It functions by first converting user input that is not to be trusted into a secure format before showing it on the website.
          </p>
          <ul className="list-disc ml-6 text-base sm:text-lg leading-relaxed mb-4">
            <li><strong>User Input:</strong> Through forms, comments, and other interactive features on your web application, users can provide data.</li>
            <li><strong>Encoding Process:</strong> This data is sent through an output encoding function by the server when it is received. This function changes some characters (such as <code>&lt;</code>, <code>&gt;</code>, and <code>&amp;</code>) in the user input that have particular semantics in HTML into unharmful entities.</li>
            <li><strong>Safe Display:</strong> The encoded data is subsequently added to the web page's HTML code. The browser sees the altered special characters as ordinary text rather than attempting to run them as code because they have a transformation.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
            3. DOMPurify for Sanitization
          </h2>
          <ul className="list-disc ml-6 text-base sm:text-lg leading-relaxed mb-4">
            <li><strong>Integration:</strong> The JavaScript code for your web application includes the DOMPurify module.</li>
            <li><strong>Sanitization Procedure:</strong> You give the HTML content as a string to the DOMPurify function when you have user-generated HTML that needs to be presented safely.</li>
            <li><strong>Safe Output:</strong> DOMPurify scans the HTML code and eliminates or changes any elements or attributes that might be dangerous. This can entail deleting all script tags, encoding unusual characters, or eliminating risky event handlers.</li>
            <li><strong>Clean HTML:</strong> The sanitized HTML code that DOMPurify finally delivers is safe to integrate into your website.</li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/services/xss"
           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default  XSS_Doc;
