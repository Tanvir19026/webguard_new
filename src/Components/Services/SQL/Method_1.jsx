import { useState } from 'react';
import LibraryUses from './LibraryUses';

const Method_1 = () => {
  const [programCode, setProgramCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://webguard-server.onrender.com/save-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ programCode }),
      });
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error('Error saving code:', error);
      setResponseMessage('Error saving code');
    }

    setLoading(false);
  };

  return (
    <div className="mt-5">
      <LibraryUses />
      <div className="mt-5 p-5 rounded-lg border-4 border-white bg-gradient-to-r from-[#452424] to-[#202020] max-w-lg mx-auto">
        <h4 className="font-serif font-bold text-2xl text-white">Step 02</h4>
        <hr className='mt-5 mb-5' />
        <h4 className="font-serif font-bold text-2xl text-white">Input Sanitization / Validation by Automated Regex</h4>
        <div className="my-4">
          <textarea
            placeholder="Enter input"
            value={programCode}
            onChange={(e) => setProgramCode(e.target.value)}
            className="w-full h-48 p-3 text-white text-lg bg-black border-2 border-red-800 rounded-md resize-vertical focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-4 text-xl py-2 text-white bg-blue-500 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          {loading ? (
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"></div>
          ) : (
            'Submit for Result'
          )}
        </button>
        {responseMessage && (
          <div className="mt-4 text-red-500 text-xl">
            <p>{responseMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Method_1;
