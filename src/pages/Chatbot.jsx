import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Chatbot = () => {
  const location = useLocation();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  // Extract the subject from the query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSubject(params.get('subject') || 'General'); // Default to "General" if no subject is provided
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, subject }),
      });

      const data = await response.json();
      setReply(data.reply || 'No response found.');
    } catch (error) {
      console.error('Error:', error);
      setReply('An error occurred while contacting the chatbot.');
    }
  };

  return (
    <div className="chatbot">
      <h1>Chatbot for {subject}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Ask something about ${subject}...`}
        />
        <button type="submit">Submit</button>
      </form>
      {reply && <p>Bot: {reply}</p>}
    </div>
  );
};

export default Chatbot;