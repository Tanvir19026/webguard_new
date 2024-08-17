import  { useState } from 'react';
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons

const Cookie_Sql = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`
    <?php
    session_start();
    
    // Check if libsodium is available

    if (!extension_loaded('libsodium')) 
    {
        die('libsodium extension not available.');
    }
    
    // Function to generate a secure session ID

    function generate_secure_session_id()
    {
        return bin2hex(random_bytes(32)); // 32 bytes of random data
    }
    
    // Function to regenerate session ID and destroy the old session

    function regenerate_session_id() 
    {
        session_regenerate_id(true);
    }
    
    // Check if the user is logged in

    function is_user_logged_in() 
    {
        return isset($_SESSION['user_id']);
    }
    
    // Function to set user authentication with encrypted data using libsodium

    function set_user_authentication($user_id)
    {
      $nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
      $encryptedUserId = sodium_crypto_secretbox($user_id, $nonce,
      $_SESSION['session_key']);
      $_SESSION['user_id'] = base64_encode($nonce . $encryptedUserId);
    }
    
    // Check for a valid session and regenerate session ID periodically for added 
    security
    function validate_session()
      {
        if (!isset($_SESSION['user_id']) || (time() - $_SESSION['last_activity'] >
         1800))
          {
            // If the user is not logged in or session is older than 30 minutes (
            1800 seconds)
            session_unset();
            session_destroy();
            session_start();
            header("Location: login.php"); // Redirect to login page if session is 
            not valid
            exit();
          }
    
          // Update last activity time

        $_SESSION['last_activity'] = time();
      }
    
    // Initialize session or resume existing session

        if (!isset($_SESSION['last_activity'])) 
    {
        $_SESSION['last_activity'] = time();
    }
    
    // Regenerate session ID periodically with 5% probability

    if (rand(1, 100) <= 5) {
        regenerate_session_id();
    }
    
    // Check if the user is logged in

    if (!is_user_logged_in()) {
        header("Location: login.php"); // Redirect to login page 
        if not logged in
        exit();
    }
    
    // Validate the session

    validate_session();
    ?>
    
    <!-- The rest of your HTML content goes here -->
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
      <h5 className="text-center text-xl mb-4">Key Points</h5>
        <hr className="border-red-500" />
        <div className="p-4 bg-gray-800 rounded-md shadow-md mb-4">
         
         
          <ul className=" pl-5 text-lg">
            <li className="mb-2">
              <span className="text-red-500">1.</span> Generate secure session IDs using <code className='text-orange-400'>bin2hex(random_bytes(32))</code>.
            </li>
            <li className="mb-2">
              <span className="text-red-500">2.</span> Regenerate session ID periodically with <code className='text-orange-400'>session_regenerate_id(true)</code>.
            </li>
            <li className="mb-2">
              <span className="text-red-500">3.</span> Encrypt sensitive session data before storing it. Before setting the <code>user_id</code> in the session, we <p className='ml-5'>encrypt it using <code className='text-orange-500'>libsodium.</code></p>
            </li>
            <li className="mb-2">
              <span className="text-red-500">4.</span> Implement to <code className='text-orange-400'> session timeout</code> invalidate inactive sessions.
            </li>
            <li className="mb-2">
              <span className="text-red-500">5.</span> Always use <code className='text-orange-400'>HTTPS</code> to encrypt data in transit for better security.
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
              <FaEye className="mr-2" /> Show PHP Example
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cookie_Sql;
