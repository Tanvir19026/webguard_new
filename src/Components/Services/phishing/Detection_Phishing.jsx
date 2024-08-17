import  { useState } from 'react';
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons

const Detect_Phishing = () => {
  const [phpExampleCode, setPhpExampleCode] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  const showPhpExample = () => {
    setPhpExampleCode(`1.Create a Model

------  pip install scikit-learn----

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report
from sklearn.pipeline import make_pipeline

# Sample data (replace this with your actual dataset)
data = {
    'url': ['legitimate.com', 'phishing.com', 'secure-site.com', 'fake-login.com', 'trusted-site.com'],
    'label': [0, 1, 0, 1, 0]  # 0: Legitimate, 1: Phishing
}

df = pd.DataFrame(data)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df['url'], df['label'], test_size=0.2, random_state=42)

# Create a pipeline with a CountVectorizer and a Naive Bayes classifier
model = make_pipeline(CountVectorizer(), MultinomialNB())

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
predictions = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")

# Print classification report
print("Classification Report:")
print(classification_report(y_test, predictions))

# Example: Predict if a new URL is phishing
new_url = ['new-phishing-site.com']
new_prediction = model.predict(new_url)
print(f"Prediction for '{new_url[0]}': {'Phishing' if new_prediction[0] == 1 else 'Legitimate'}")

-----------------------------------------------------------

2.Create a Flask API (Python Backend):
pip install Flask

----------------------------------------------

3.Create a file named app.py

from flask import Flask, jsonify, request
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

app = Flask(__name__)

# Sample data (replace this with your actual dataset)
data = {
    'url': ['legitimate.com', 'phishing.com', 'secure-site.com', 'fake-login.com', 'trusted-site.com'],
    'label': [0, 1, 0, 1, 0]  # 0: Legitimate, 1: Phishing
}

df = pd.DataFrame(data)

# Create a pipeline with a CountVectorizer and a Naive Bayes classifier
model = make_pipeline(CountVectorizer(), MultinomialNB())
model.fit(df['url'], df['label'])

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    url = data['url']
    prediction = model.predict([url])[0]
    return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
    ---------------------------------------------

4.Make API Requests from React.js:

import React, { useState } from 'react';

const PhishingDetection = () => {
  const [url, setUrl] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Phishing Detection Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <button type="submit">Check for Phishing</button>
      </form>

      {prediction !== null && (
        <p>
          Prediction: {prediction === 1 ? 'Phishing' : 'Legitimate'}
        </p>
      )}
    </div>
  );
};

export default PhishingDetection;
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
    <div className="mt-5 flex flex-col items-center" style={{ height: '1500px' }}>
      <div className="w-full md:w-3/4 lg:w-1/2 p-4 bg-gray-900 text-white rounded-md shadow-lg">
      <h5 className="text-center text-xl mb-4 font-semibold">Key Points <span className='text-orange-300'>(React JS)</span></h5>
        <hr className="border-red-500" />
        <div className="p-4 bg-gray-800 rounded-md shadow-md mb-4">
         
         
          <ul className=" pl-5 text-lg">
            <li className="mb-2">
              <span className="text-red-500">1.</span> <span className='text-xl text-red-500'>Create a Model using Machine Learning.</span>
              <div className='m-5'>
              <li className="mb-2 ">
              <span className="text-blue-500 ml-5">I.</span> Sample Data Collection.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">II.</span>Split the data into training and testing set.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">III.</span>Create a pipeline with a CountVectorizer and a Naive Baye.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">IV.</span>Train the model.
            </li>
            
            <li className="mb-2">
              <span className="text-blue-500 ml-5">V.</span>Make predictions on the test set.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">VI.</span>Evaluate the model.
            </li>
            
            <li className="mb-2">
              <span className="text-blue-500 ml-5">VII.</span>Print classification report.
            </li>

              </div>

            </li>
            <li className="mb-2 ">
              <span className="text-red-500">2.</span> <span className="text-red-500">Create a Flask API (Python Backend)</span>.
              <div className='m-5'><li className="mb-2">
              <span className="text-blue-500 ml-5">I.</span>pip install Flask.
            </li></div>
            </li>
            <li className="mb-2">
              <span className="text-red-500">3.</span> <span className="text-red-500">Create a file named app.py.</span>
              <div className='m-5'>
              <li className="mb-2">
              <span className="text-blue-500 ml-5">I.</span>Import packages and Flask API.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">II.</span>Sample data Collection from previous phase.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">III.</span>Create a pipeline with a CountVectorizer and a Naive Bayes classifier.
            </li>
            <li className="mb-2">
              <span className="text-blue-500 ml-5">IV.</span>Implement Routing.
            </li>
              </div>
            </li>
            <li className="mb-2 text-red-500">
              4. Make API Requests from React.js.
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
              <FaEye className="mr-2" /> Show Example
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detect_Phishing;
