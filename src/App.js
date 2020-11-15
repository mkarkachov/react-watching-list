import './styles/App.scss';
import React,{useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY  
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

function App(){
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
            getNews();
 }, []);
   const getNews = () => {
      fetch(API_URL)
          .then(response => response.json())    
          .then(data => setNewsList([...data.results]));
}
console.log(newsList);
return (
  
   <div>
    
  </div>
)
;}

export default App;