import  { useState } from 'react';
import DOMPurify from 'dompurify';
import image from '../../../assets/xssssss.png';

const detectXss = (input) => {
  const hasPotentialXSS = /<\s*script[^>]*>.*?<\/\s*script\s*>|<\s*(?:[\w-]+\s*=\s*".*?"\s*|\/?[\w-]+\/?)\s*>/i.test(input);

  let sanitizedInput;
  let isXssDetected = false;

  if (hasPotentialXSS) {
    sanitizedInput = DOMPurify.sanitize(input);
    isXssDetected = true;
  } else {
    sanitizedInput = input;
  }

  return { input, sanitizedInput, isXssDetected };
};

const XssComponents = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [isInputXssDetected, setIsInputXssDetected] = useState(false);
  const [isCommentXssDetected, setIsCommentXssDetected] = useState(false);
  const [isSearchXssDetected, setIsSearchXssDetected] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const { input, isXssDetected } = detectXss(value);
    setInputValue(input);
    setIsInputXssDetected(isXssDetected);
  };

  const handleCommentChange = (e) => {
    const { value } = e.target;
    const { input, isXssDetected } = detectXss(value);
    setCommentValue(input);
    setIsCommentXssDetected(isXssDetected);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    const { input, isXssDetected } = detectXss(value);
    setSearchValue(input);
    setIsSearchXssDetected(isXssDetected);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-4">
      {/* Left Section with Image */}
      <div className="w-full md:w-1/3">
        <div className="flex justify-center mb-4">
          <img src={image} alt="Description" className="rounded-lg border-4 border-blue-600 md:w-106 md:h-72 w-full h-auto object-cover" />
        </div>
      </div>

      {/* Right Section with Forms */}
      <div className="w-full md:w-1/3 bg-gray-200 p-4 rounded-lg shadow-lg">
        <h3 className="text-orange-600 text-center mt-4 font-serif font-bold text-xl mb-4"> Detection of Cross-Site-Scripting</h3>

        <div className="mb-4">
          <label htmlFor="input" className="block text-gray-700 font-bold mb-2">Input Form:</label>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button onClick={() => alert(`Detected: ${inputValue}\nSanitized: ${DOMPurify.sanitize(inputValue)}`)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Show Values
          </button>
          {isInputXssDetected && <p className="text-red-500 text-sm mt-1">Potential XSS detected! Input sanitized.</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comment Box:</label>
          <textarea
            id="comment"
            value={commentValue}
            onChange={handleCommentChange}
            className="w-full h-48 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button onClick={() => alert(`Detected: ${commentValue}\nSanitized: ${DOMPurify.sanitize(commentValue)}`)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Show Values
          </button>
          {isCommentXssDetected && <p className="text-red-500 text-sm mt-1">Potential XSS detected! Input sanitized.</p>}
        </div>

        <div>
          <label htmlFor="search" className="block text-gray-700 font-bold mb-2">Search Box:</label>
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button onClick={() => alert(`Detected: ${searchValue}\nSanitized: ${DOMPurify.sanitize(searchValue)}`)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Show Values
          </button>
          {isSearchXssDetected && <p className="text-red-500 text-sm mt-1">Potential XSS detected! Input sanitized.</p>}
        </div>
      </div>
    </div>
  );
};

export default XssComponents;
