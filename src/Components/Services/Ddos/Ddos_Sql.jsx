import  { useState } from 'react';
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons

const Ddos_Sql = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`const mysql = require('mysql');
    // Create a MySQL connection pool
    const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'your-mysql-host',
    user: 'your-mysql-user',
    password: 'your-mysql-password',
    database: 'your-mysql-database',
    });

    // Use the pool to query the database
    pool.query('SELECT * FROM your_table', (error, results) => {
    if (error) throw error;
    console.log('Query results:', results);
    });

    // Close the pool when done
    pool.end();

    -------Example--------
    <?php
    session_start();

    // Rate limiting settings
    $requestsLimit = 100; // Maximum number of requests allowed per time 
    frame
    $timeFrame = 60; // Time frame in seconds (e.g., 60 seconds)

    // Get the client's IP address
    $clientIP = $_SERVER['REMOTE_ADDR'];

    // Generate a unique key for the client's IP address
    $rateLimitKey = 'rate_limit_' . $clientIP;

    // Check if the rate limit key exists in the session
    if (!isset($_SESSION[$rateLimitKey])) {
    // If not, create the rate limit key and set the initial request count
    $_SESSION[$rateLimitKey] = 1;
    } else {
    // If the key exists, increment the request count
    $_SESSION[$rateLimitKey]++;

    // Check if the request count exceeds the limit within the specified time 
    frame
    if ($_SESSION[$rateLimitKey] > $requestsLimit) {
        // Log the exceeded request to the MySQL database
        $mysqli = new mysqli('your_mysql_host', 'your_mysql_user', 
        'your_mysql_password', 'your_mysql_database');
        $ipAddress = $mysqli->real_escape_string($clientIP);
        $requestCount = $mysqli->real_escape_string($_SESSION[$rateLimitKey]);

        $mysqli->query("INSERT INTO ddos_logs (ip_address, request_count) 
        VALUES ('$ipAddress', '$requestCount')");

        $mysqli->close();

        http_response_code(429); 
        // Return HTTP 429 (Too Many Requests) status code
         die('Rate limit exceeded. Please try again later.');
            }
    }

        // Your PHP application code goes here...

        // Example MySQL connection and query
        $mysqli = new mysqli('your_mysql_host', 'your_mysql_user', 
        'your_mysql_password', 'your_mysql_database');
        $result = $mysqli->query("SELECT * FROM your_table");

        // Process the query result or perform other application 
        logic...

        // Close the MySQL connection
        $mysqli->close();

        ?>

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, 
            initial-scale=1.0">
            <title>PHP-MySQL Project</title>
        </head>
        <body>
            <h1>Welcome to PHP-MySQL Project</h1>
            <!-- Your HTML content goes here... -->
        </body>
        </html>
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
      <h5 className="text-center text-xl mb-4">Key Points <span className='text-orange-300'>(My SQL)</span></h5>
        <hr className="border-red-500" />
        <div className="p-4 bg-gray-800 rounded-md shadow-md mb-4">
          <ul className=" pl-5 text-xl">
            <li className="mb-2">
              <span className="text-red-500">1.</span> Use strong authentication mechanisms for MySQL (e.g., secure passwords).
            </li>
            <li className="mb-2">
              <span className="text-red-500">2.</span> Implement IP whitelisting to allow only trusted connections.
            </li>
            <li className="mb-2">
              <span className="text-red-500">3.</span>  Monitor and log MySQL queries for unusual or malicious patterns.
            </li>
            <li className="mb-2">
              <span className="text-red-500">4.</span>  Consider using a database proxy or firewall to filter and control incoming traffic.
            </li>
            <li className="mb-2">
              <span className="text-red-500">5.</span>  Regularly update MySQL server software and apply security patches.
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
              <FaEye className="mr-2" /> Show MySQL Example
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ddos_Sql;
