import  { useState } from 'react';
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons

const Cookie_No_Sql = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`
    // Install the necessary packages
    // npm install express express-session mongoose connect-mongo bcrypt 
       jsonwebtoken helmet
    
    const express = require('express');
    const session = require('express-session');
    const mongoose = require('mongoose');
    const MongoStore = require('connect-mongo')(session);
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const helmet = require('helmet');
    
    const app = express();
    
    // Enable Helmet for additional security headers
    app.use(helmet());

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost/sessionStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    // Set up express-session
    app.use(
    session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      secure: true,
      httpOnly: true,
      maxAge: 3600000, // 1 hour session timeout
    },
    })
    );

    // Middleware to check if the request is secure (HTTPS)
    const ensureSecure = (req, res, next) =>
    {
    if (req.secure) {
      return next();
    }
    res.redirect(url);
    };

    app.use(ensureSecure);

  // Sample user model (replace with your actual user model)
  const User = mongoose.model('User', {
  username: String,
  password: String,
  });

  // Register a new user

  app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the user in MongoDB
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.send('User registered successfully');
  });

  // Login and generate a JWT token
  app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Fetch user details from MongoDB
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  // Compare the provided password with the hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    // Generate a JWT token
    const token = jwt.sign({ username: user.username }, 'your-jwt-secret',
     { expiresIn: '1h' });

    // Set the token in the session
    req.session.token = token;

    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
  });

  // Protected route using JWT for authentication
  app.get('/protected-resource', (req, res) => {
  const token = req.session.token;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Verify the JWT token
  jwt.verify(token, 'your-jwt-secret', (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    // Access the protected resource
    res.send(Welcome, $username! This is a protected resource.);
  });
  });

  // Logout and destroy the session
  app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
  });

  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
  console.log(Server running on http://localhost:yourPort);
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
      <h5 className="text-center text-xl mb-4">Key Points <span className="text-yellow-500 font-mono font-bold">(React js)</span></h5>
        <hr className="border-red-500" />
        <div className="p-4 bg-gray-800 rounded-md shadow-md mb-4">
         
         
          <ul className=" pl-5 text-lg">
            <li className="mb-2">
              <span className="text-red-500">1.</span> Install the necessary packages.<br />
            </li>
            <li className="mb-2">
              <span className="text-red-500">2.</span> Enable Helmet for additional security headers.
            </li>
            <li className="mb-2">
              <span className="text-red-500">3.</span> Connect to MongoDB.
            </li>
            <li className="mb-2">
              <span className="text-red-500">4.</span> Set up express-session.
            </li>
            <li className="mb-2">
              <span className="text-red-500">5.</span> Middleware to check if the request is secure (HTTPS).
            </li>
            <li className="mb-2">
              <span className="text-red-500">6.</span> Sample user model (replace with your actual user model).
            </li>
            <li className="mb-2">
              <span className="text-red-500">7.</span> Register a new user.
            </li>
            <li className="mb-2">
              <span className="text-red-500">8.</span> Login and generate a JWT token.
             
            </li>
            <li className="mb-2">
              <span className="text-red-500">9.</span>  Compare the provided password with the hashed password.

            </li>
            <li className="mb-2">
              <span className="text-red-500">10.</span> Protected route using JWT for authentication.
            </li>

            <li className="mb-2">
              <span className="text-red-500">11.</span> Verify the JWT token.
            </li>
           

            <li className="mb-2">
              <span className="text-red-500">12.</span>  Logout and destroy the session.
            </li>
            

            <li className="mb-2">
              <span className="text-red-500">13.</span>  Start the server.
            </li>



          </ul>
        </div>
        {showEditor ? (
          <div className="mt-4">
            <textarea
              className="w-full p-4 bg-gray-800 text-blue-500 rounded-md font-mono"
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
              <FaEye className="mr-2" /> Show React js Example
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cookie_No_Sql;
