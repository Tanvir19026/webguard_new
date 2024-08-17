import  { useState } from 'react';
import { FaCopy, FaEyeSlash } from 'react-icons/fa';


const Methods = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const preventionTechniques = [
    {
      order: '1',
      color: '#3498db',
      title: 'Input Validation',
      description: 'Validate and sanitize user input on both client and server sides.',
      codeExample: `

const userInput = req.body.userInput;
if (/^[a-zA-Z0-9_]+$/.test(userInput)) {
  // Valid input
  // Proceed with the input
} else {
  // Invalid input, handle accordingly
  console.error('Invalid input format');
}
      `,
    },
    {
      order: '2',
      color: '#2ecc71',
      title: 'Output Encoding',
      description: 'Properly encode user input when rendering it in the UI to prevent script execution.',
      codeExample: `
const userInput = "<script>alert('XSS')</script>";
const encodedInput = escape(userInput);
return <div>{encodedInput}</div>;
      `,
    },
    {
      order: '3',
      color: '#e74c3c',
      title: 'DOMPurify for Sanitization',
      description: 'Use DOMPurify library to sanitize user input and prevent malicious script execution.',
      codeExample: `

import DOMPurify from 'dompurify';
const userInput = "<script>alert('XSS')</script>";
const sanitizedInput = DOMPurify.sanitize(userInput);
return <div dangerouslySetInnerHTML={{ __html: sanitizedInput }}></div>;
      `,
    },
    {
      order: '4',
      color: '#f39c12',
      title: 'Content Security Policy (CSP) (OPTIONAL)',
      description: 'Implement a strong CSP to restrict the sources from which scripts and styles can be loaded.',
      codeExample: `

const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-scripts.com'],
    styleSrc: ["'self'"],
  },
}));
      `,
    },
    {
      order: '5',
      color: '#9b59b6',
      title: 'HTTP Only and Secure Cookies (OPTIONAL)',
      description: 'Set cookies with the HttpOnly and Secure flags for added security.',
      codeExample: `

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('sessionId', '123', { httpOnly: true, secure: true });
  res.send('Cookie set successfully');
});
      `,
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  };

  const cardStyle = {
    border: '2px solid',
    borderRadius: '8px',
    margin: '10px',
    padding: '15px',
    width: '100%',
    maxWidth: '700px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    textAlign: 'start',
    backgroundColor: '#333',
    color: 'white',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const orderStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleToggle = (index) => {
    setSelectedTechnique(selectedTechnique === index ? null : index);
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: '8px 15px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    marginRight: '10px',
    width: '120px', // Increased button width
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
     
      {preventionTechniques.map((technique, index) => (
        <div
          key={technique.order}
          style={{ ...cardStyle, borderColor: technique.color }}
          className="xss-prevention-card"
        >
          <h4>{` Prevention Method `}</h4>
          <div style={contentStyle}>
            <p style={{ ...orderStyle, backgroundColor: technique.color }}>{technique.order}</p>
            <div>
              <h3 style={{ color: 'cyan', fontSize: '1.2rem' }}>{technique.title}</h3>
              <p style={{ fontSize: '1.2rem' }}>{technique.description}</p>
              {selectedTechnique === index && (
                <pre style={{ fontSize: '1.2rem', fontWeight: '500', overflow: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                  <code>{technique.codeExample}</code>
                </pre>
              )}
            </div>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => handleCopy(technique.codeExample)}
              style={{ ...buttonStyle, backgroundColor: 'green' }}
            >
              <FaCopy style={{ marginRight: '5px' }} /> Copy
            </button>
            <button
              onClick={() => handleToggle(index)}
              style={{ ...buttonStyle, backgroundColor: 'red' }}
            >
              <FaEyeSlash style={{ marginRight: '5px' }} /> {selectedTechnique === index ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default Methods;
