// Method_2.jsx
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon from react-icons

const Method_2 = () => {
  const [programCodes, setProgramCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);

    // Save the entered code to the database
    try {
      const response = await fetch('https://webguard-server.onrender.com/stored-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ programCodes }),
      });
      const data = await response.json();
      setResponseMessage(data);
    } catch (error) {
      console.error('Error saving code:', error);
      setResponseMessage('Error saving code');
    }

    setLoading(false);
  };

  return (
    <div className="mt-5 flex justify-center">
      <div className="sql-injection-check-container mt-5 rounded-lg border-4 border-white p-5 shadow-lg max-w-xl w-full">
        <h4 className="text-white font-bold text-3xl m-5">Storedprocedure & Paramatarized Queries</h4>
        <div className="code-editor">
          <textarea
            className="font-mono text-lg text-white bg-black p-2 w-full h-72 border border-gray-400 rounded resize-y"
            placeholder="Enter your code"
            value={programCodes}
            onChange={(e) => setProgramCode(e.target.value)}
          />
        </div>
        <button
          className={`mt-4 px-4 py-2 text-lg bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed' : 'hover:bg-blue-700'}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5  text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Saving...
            </>
          ) : (
            'Submit for result'
          )}
        </button>

        {responseMessage && (
          <div className="result m-4 text-lg p-2">
            {responseMessage.message === 'No action needed' ? (
              <h3 className="mt-4 mb-4 text-2xl text-white font-bold flex items-center">
                <FaCheckCircle className="mr-2" /> {responseMessage.message}
              </h3>
            ) : (
              <h3 className="mt-4 mb-4 text-2xl text-red-500 font-bold">{responseMessage.message}</h3>
            )}
            {responseMessage.suggestions && (
              <ul className="list-decimal list-inside mt-2 text-xl text-white">
                {responseMessage.suggestions.map((suggestion, index) => (
                  <li className="mt-2 p-3" key={index}>{suggestion}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Method_2;
