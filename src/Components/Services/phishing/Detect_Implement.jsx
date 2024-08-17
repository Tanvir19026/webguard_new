import { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa'; // Importing icons from react-icons
import image1 from '../../../assets/gradient-enter-sign_23-2149263900.jpg'; // Update the paths according to your image locations
import image2 from '../../../assets/pngtree-alert-danger-warning-sign-blue-icon-on-abstract-cloud-backgro-png-image_1650681.jpg';
import image3 from '../../../assets/vault-concept-illustration_114360-222.png';

const Detect_Phishing = () => {
  const [url, setUrl] = useState('');
  const [isPhishing, setIsPhishing] = useState(null);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);

  const validateUrl = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))' + // domain name and extension
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
    );
    return !!urlPattern.test(url);
  };

  const checkForPhishing = (url) => {
    const phishingKeywords = ['login', 'password', 'phishing', 'secure'];
    const isHttpConnection = url.toLowerCase().startsWith('http://');
    const containsPhishingKeyword = phishingKeywords.some(keyword => url.toLowerCase().includes(keyword));
    const isPhishing = isHttpConnection || (url.toLowerCase().startsWith('https://') && containsPhishingKeyword);
    setIsPhishing(isPhishing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url.trim() === '') {
      setIsEmptyInput(true);
      setIsPhishing(null);
      setIsInvalidUrl(false);
      return;
    }
    setIsEmptyInput(false);

    if (!validateUrl(url)) {
      setIsInvalidUrl(true);
      setIsPhishing(null);
      return;
    }

    setIsInvalidUrl(false);
    checkForPhishing(url);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-[#452424] to-[#202020] min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-4 mt-5">Phishing Detection</h2>

      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="block text-gray-700">
            Enter URL:
            <input 
              type="text" 
              value={url} 
              onChange={(e) => setUrl(e.target.value)} 
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="https://example.com"
            />
          </label>
          <button 
            type="submit" 
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Check for Phishing
          </button>
        </form>

        {isEmptyInput && (
          <p className="text-red-500 mt-4 text-lg">Please enter a URL before submitting.</p>
        )}

        {isInvalidUrl && (
          <p className="text-red-500 mt-4 text-lg">Please enter a valid URL (e.g., https://example.com).</p>
        )}

        {isPhishing !== null && !isEmptyInput && !isInvalidUrl && (
          <div className="mt-4 text-lg">
            {isPhishing ? (
              url.toLowerCase().startsWith('http://') ? (
                <p className="text-red-500 flex items-center">
                  <FaTimesCircle className="mr-2" /> This URL may be associated with phishing. Proceed with caution.
                </p>
              ) : (
                <p className="text-yellow-500 flex items-center">
                  <FaExclamationCircle className="mr-2" /> Check the website carefully before login.
                </p>
              )
            ) : (
              <p className="text-green-500 flex items-center">
                <FaCheckCircle className="mr-2" /> This website seems safe. No action needed.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 w-full max-w-md flex justify-center items-center">
        {isPhishing !== null && (
          <div
            className={`transition-opacity duration-500 ${
              isPhishing && url.toLowerCase().startsWith('http://') ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image1}
              alt="Phishing Warning"
              className="h-96 w-96 rounded-lg shadow-lg"
              style={{ display: isPhishing && url.toLowerCase().startsWith('http://') ? 'block' : 'none' }}
            />
          </div>
        )}
        {isPhishing !== null && (
          <div
            className={`transition-opacity duration-500 ${
              isPhishing && !url.toLowerCase().startsWith('http://') ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image2}
              alt="Warning"
              className="h-96 w-96 rounded-lg shadow-lg"
              style={{ display: isPhishing && !url.toLowerCase().startsWith('http://') ? 'block' : 'none' }}
            />
          </div>
        )}
        {isPhishing !== null && (
          <div
            className={`transition-opacity duration-500 ${
              !isPhishing ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image3}
              alt="Safe"
              className="h-96 w-96 rounded-lg shadow-lg"
              style={{ display: !isPhishing ? 'block' : 'none' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detect_Phishing;
