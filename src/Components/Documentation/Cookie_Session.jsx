import { Link } from "react-router-dom";

const Cookie_Session = () => {
  return (
    <div className="bg-gradient-to-r from-[#452424] to-[#202020] min-h-screen p-6 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center border-b-2 border-gray-500 pb-4">
          Cookie and Session Hijacking Prevention (SQL)
        </h1>

        <section className="mb-8 p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg text-justify">
          <h2 className="text-xl sm:text-xl mb-4">
            Cookie and session hijacking are serious security threats that can compromise user accounts and sensitive data.
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3">
            1. Generate Secure Session IDs Using <code>bin2hex(random_bytes(32))</code>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            The creation of a secure session identification is the first stage. This is achieved using the code snippet <code>bin2hex(random_bytes(32))</code>, which generates 32 cryptographically random bytes and uses the <code>bin2hex</code> function to convert them into a hexadecimal string. Increasing security, the randomness of the bytes makes it hard to guess the session ID.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-orange-400">
            2. Regenerate Session ID
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            This step emphasizes regenerating the session ID to strengthen security. This is done using the <code>session_regenerate_id(true)</code> function. Even if an attacker manages to obtain a stolen session ID, regenerating the session ID prevents the stolen ID from being exploited.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-orange-400">
            3. User Authentication with Encrypted Data Using Libsodium
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            This last phase involves user authentication with encrypted data. The reputable cryptographic library Libsodium provides a range of cryptographic features, including encryption. User authentication data is protected during transmission by encryption, making it more difficult for hackers to intercept and steal credentials.
          </p>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/services/cookie"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cookie_Session;
