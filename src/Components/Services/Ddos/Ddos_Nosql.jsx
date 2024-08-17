import  { useState } from 'react';
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons

const Ddos_Noql = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`// server.js (Node.js / Express server)
const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});

app.use(limiter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Express route to fetch user data
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(Server is running on port );
});

    `);
    setShowEditor(true); // Show the code editor after clicking the button
  };

  const hidePhpExample = () => {
    setPhpExampleCode('');
    setShowEditor(false);
  };

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = phpExampleCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard!');
  };

  return (
    <div className="mt-5 flex flex-col items-center" style={{ height: '1300px' }}>
      <div className="w-full md:w-3/4 lg:w-1/2 p-4 bg-gray-900 text-white rounded-md shadow-lg">
      <h5 className="text-center text-xl mb-4">Key Points <span className='text-orange-300'>(Node JS)</span></h5>
        <hr className="border-red-500" />
        <div className="p-4 bg-gray-800 rounded-md shadow-md mb-4">
          <ul className=" pl-5 text-xl">
            <li className="mb-2">
              <span className="text-red-500">1.</span>  Use strong authentication mechanisms for your NoSQL database.
            </li>
            <li className="mb-2">
              <span className="text-red-500">2.</span>  Implement IP whitelisting to allow only trusted connections..
            </li>
            <li className="mb-2">
              <span className="text-red-500">3.</span>  Monitor and log database queries for unusual or malicious patterns.
            </li>
            <li className="mb-2">
              <span className="text-red-500">4.</span>  Consider using a database proxy or firewall to filter and control incoming traffic.
            </li>
            <li className="mb-2">
              <span className="text-red-500">5.</span>  Regularly update your NoSQL database software and apply security patches.
            </li>
          </ul>
        </div>
        {showEditor ? (
          <div className="mt-4">
            <textarea
              className="w-full p-4 bg-gray-800 text-lg text-blue-500 rounded-md font-mono"
              rows="20"
              readOnly
              value={phpExampleCode}
            ></textarea>
            <div className="mt-3 flex justify-center">
              <button className="btn text-lg btn-success mx-2" onClick={copyToClipboard}>
                <FaCopy className="mr-2 " /> Copy
              </button>
              <button className="btn text-lg btn-danger mx-2" onClick={hidePhpExample}>
                <FaEyeSlash className="mr-2" /> Hide Example
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex justify-center">
            <button className="btn text-lg btn-primary" onClick={showPhpExample}>
              <FaEye className="mr-2" /> Show NodeJS Example
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ddos_Noql;
