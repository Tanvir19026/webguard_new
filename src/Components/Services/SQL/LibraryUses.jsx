import { useState } from 'react';

const LibraryUses = () => {
  const [escapedString, setEscapedString] = useState('');
  const [copied, setCopied] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const toggleExample = () => {
    setShowExample(!showExample);
    if (!showExample) {
      setEscapedString(`<span style="color: green;">$enteredUsername</span>  = <span style="color: orange;">$_POST</span>['username'];
<span style="color: green;">$enteredPassword</span> = <span style="color: orange;">$_POST</span>['password'];

<span style="color: green;">$enteredUsername</span> = <span style="color: red;">stripcslashes</span>(<span style="color: green;">$enteredUsername</span>);
<span style="color: green;">$enteredPassword</span> = <span style="color: red;">stripcslashes</span>(<span style="color: green;">$enteredPassword</span>);

<span style="color: green;">$enteredUsername</span> = <span style="color: blue;">mysqli_real_escape_string</span>($conn, <span style="color: green;">$enteredUsername</span>);
<span style="color: green;">$enteredPassword</span> = <span style="color: blue;">mysqli_real_escape_string</span>($conn, <span style="color: green;">$enteredPassword</span>);
      `);
    } else {
      setEscapedString('');
    }
  };

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = escapedString.replace(/<[^>]*>/g, ''); // Remove HTML tags for plain text copy
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-5 mb-10 mx-auto max-w-lg p-5 bg-white rounded-lg shadow-lg">
      <div className="">
      <h5 className="text-2xl font-serif font-bold mb-2">Step 01</h5>
      <hr />
        <h5 className="text-2xl font-bold mb-2">Library Uses Example</h5>
        <hr className="mb-4"/>
        <h6 className="text-xl text-red-500 mb-4">Use stripcslashes() & mysqli_real_escape_string()</h6>
        <div className="flex mb-4 text-lg">
          <button 
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 mr-2"
            onClick={toggleExample}
          >
            {showExample ? 'Hide Example' : 'Show Example'}
          </button>
          {showExample && (
            <button
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
              onClick={copyToClipboard}
              disabled={!escapedString}
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          )}
        </div>
        {showExample && (
          <div className="mt-3 font-mono text-lg text-gray-800 break-words overflow-auto" style={{ fontFamily: 'Times New Roman', maxHeight: '300px' }}>
            <pre dangerouslySetInnerHTML={{ __html: escapedString }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryUses;
