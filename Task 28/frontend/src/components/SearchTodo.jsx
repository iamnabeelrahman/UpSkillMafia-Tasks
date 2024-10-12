import React, { useState } from 'react';
import '../css/SearchTodo.css'; 

const SearchTodo = () => {
  const [title, setTitle] = useState('');
  const [response, setResponse] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = new URL('http://localhost:3000/search');
    url.searchParams.append('title', title);

    try {
      const res = await fetch(url, { method: 'GET' });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonResponse = await res.json();
      setResponse(jsonResponse);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Error fetching data' });
    }
  };

  return (
    <div className="container" >
        <div className="margin-div">
      <h1>Search Your Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {response.results && response.results.length > 0 && (
        <div>
          <h2>Results:</h2>
          {response.results.map(todo => (
            <div key={todo._id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      )}
      {response.error && <p>{response.error}</p>}
    </div>
    </div>
  );
};

export default SearchTodo;
