// Method_3.jsx
import { useState } from 'react';
 // Importing an icon from react-icons

const Method_3 = () => {
  const [escapedString1, setEscapedString1] = useState('');
  const [escapedString2, setEscapedString2] = useState('');
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  const showExample1Handler = () => {
    setShowExample1(true);
    setEscapedString1(`const saltRounds = 10;
    const plaintextPassword = 'user_password';

    // Hash the password
    bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
      if (err) throw err;
      console.log('Hashed Password:', hash);
    });

    // Compare password during login
    bcrypt.compare('user_input_password', hashFromDatabase, (err, result) => {
      if (err) throw err;
      console.log('Password Match:', result);
    });

   --------or--------

   -----Real Life Example-----

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Get data from the form
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    
    // Insert data into the database
    $sql = "INSERT INTO userList (username, password) VALUES ('$username', '$hashedPassword')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<p>Data inserted successfully</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    // Close connection
    $conn->close();
    ?>`);
  };

  const hideExample1Handler = () => {
    setShowExample1(false);
    setEscapedString1('');
  };

  const showExample2Handler = () => {
    setShowExample2(true);
    setEscapedString2(`const encryptionKey = 'supersecretkey';
    const sensitiveData = 'confidential information';

    // Encryption
    const encryptedData = encrypt(sensitiveData, encryptionKey);
    console.log('Encrypted Data:', encryptedData);

    // Decryption
    const decryptedData = decrypt(encryptedData, encryptionKey);
    console.log('Decrypted Data:', decryptedData);

    // Fictional encryption and decryption functions
    function encrypt(data, key) {
      // Implement secure encryption logic
      return 'encryptedData';
    }

    function decrypt(data, key) {
      // Implement secure decryption logic
      return 'decryptedData';
    }

          ----------or----------

          ------Real Life Example-----

          //index.html

          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Encryption Example</title>
          </head>
          <body>
              <form action="process.php" method="post">
                  <label for="username">Username:</label>
                  <input type="text" name="username" required>
                  <br>
                  <label for="mobile">Mobile Number:</label>
                  <input type="text" name="mobile" required>
                  <br>
                  <button type="submit">Submit</button>
              </form>
          </body>
          </html>
          
      //process.php

      <?php

// Include key generation and encryption functions
include 'encryption_functions.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
// Get form data
$username = $_POST['username'];
$mobile = $_POST['mobile'];

// Generate a secure key
$key = generateEncryptionKey();

// Encrypt data
$encryptedUsername = encryptData($username, $key);
$encryptedMobile = encryptData($mobile, $key);

// Save encrypted data to the database (assuming you have a database connection)
$conn = new mysqli("localhost", "username", "password", "example_db");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (encrypted_username, encrypted_mobile) VALUES ('$encryptedUsername', '$encryptedMobile')";

if ($conn->query($sql) === TRUE) {
  echo "Data saved successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}

?>


//retrieve.php

<?php

// Include key generation and encryption functions
include 'encryption_functions.php';

// Retrieve encrypted data from the database (assuming you have a database connection)
$conn = new mysqli("localhost", "username", "password", "example_db");

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT encrypted_username, encrypted_mobile FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
  // Decrypt data
  $decryptedUsername = decryptData($row['encrypted_username']);
  $decryptedMobile = decryptData($row['encrypted_mobile']);

  // Display decrypted data
  echo "Username: " . $decryptedUsername . "<br>";
  echo "Mobile: " . $decryptedMobile . "<br>";
  echo "<hr>";
}
} else {
echo "No data found!";
}

$conn->close();

?>

//encryption_function.php

<?php

function generateEncryptionKey() {
return bin2hex(random_bytes(32)); // 32 bytes for a 256-bit key
}

function encryptData($data, $key) {
$cipher = 'aes-256-cbc';
$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($cipher));
$encrypted = openssl_encrypt($data, $cipher, $key, 0, $iv);
return base64_encode($iv . $encrypted);
}

function decryptData($data, $key) {
$cipher = 'aes-256-cbc';
$data = base64_decode($data);
$ivSize = openssl_cipher_iv_length($cipher);
$iv = substr($data, 0, $ivSize);
$encrypted = substr($data, $ivSize);
return openssl_decrypt($encrypted, $cipher, $key, 0, $iv);
}

?>`);
  };

  const hideExample2Handler = () => {
    setShowExample2(false);
    setEscapedString2('');
  };

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard!');
  };

  return (
    <div className="mt-5 flex flex-col items-center">
     
      <div className="w-11/12 md:w-3/4 lg:w-1/2 p-4 bg-gray-900 text-white rounded-md shadow-lg mb-6">
      <h2 className="mb-6 mt-2 text-white text-center text-3xl">
        Cryptography in SQL Injection Prevention
      </h2>
        <h3 className="text-cyan-500 text-2xl font-bold m-5">Step 1. Hashing Passwords with bcrypt</h3>
        <p className="mb-2 text-xl">
          When storing passwords, use bcrypt for secure hashing. Bcrypt automatically handles salting, making it resistant to rainbow table attacks.
        
        <p className='mt-5 text-lg text-amber-500'>  Example in PHP with password_hash and password_verify:</p>
        </p>
        {showExample1 ? (
          <>
            <pre className="bg-gray-800 p-4 rounded overflow-auto">{escapedString1}</pre>
            <button className="btn btn-success mt-4  m-5 text-lg font-serif" onClick={() => copyToClipboard(escapedString1)}>Copy</button>
            <button className="btn btn-primary mt-2 m-5 text-lg font-serif" onClick={hideExample1Handler}>Hide Example</button>
          </>
        ) : (
          <button className="btn btn-primary mt-2 text-xl" onClick={showExample1Handler}>Show Example</button>
        )}
      </div>
      <div className="w-11/12 md:w-3/4 lg:w-1/2 p-4 bg-gray-900 text-white rounded-md shadow-lg">
        <h3 className="text-cyan-500 text-2xl font-bold m-5">Step 2. Encryption and Decryption Example</h3>
        <p className="mb-2 text-xl">
          Encrypt sensitive data before storing it in the database, and decrypt it when needed. Use a secure encryption library.
        
          <p className='mt-5 text-lg text-amber-500'>Example in PHP with OpenSSL:</p>
        </p>
        {showExample2 ? (
          <>
            <pre className="bg-gray-800 p-4 rounded overflow-auto">{escapedString2}</pre>
            <button className="btn btn-success mt-2 m-5 text-lg font-serif" onClick={() => copyToClipboard(escapedString2)}>Copy</button>
            <button className="btn btn-primary mt-2 m-5 text-lg font-serif" onClick={hideExample2Handler}>Hide Example</button>
          </>
        ) : (
          <button className="btn btn-primary mt-2 text-xl" onClick={showExample2Handler}>Show Example</button>
        )}
      </div>
     
    </div>
  );
};

export default Method_3;
