import React, { useEffect , useState} from 'react';
import News from '../News/News'
const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    useEffect(() =>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles) )

    },[])
    return (
        <div>
            <h1>Top Headlines {articles.length}</h1>
            {
                articles.map(article => <News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;