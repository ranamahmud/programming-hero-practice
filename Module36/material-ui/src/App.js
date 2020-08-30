import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import './App.css';
import News from './Components/News/News';
function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))

  }, [])

  return (
    <div className="App">
      <h2>React Material</h2>
      <h2>Total News {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
