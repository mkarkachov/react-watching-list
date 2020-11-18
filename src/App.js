import React,{useState, useEffect } from 'react';
import Card from './components/Card'
import Loading from './components/Loading'
import './styles/App.scss';

const API_KEY = process.env.REACT_APP_API_KEY  
const CONFIG_API_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

function App(){
    const [moviesList, setMoviesList] = useState([]);
    const [configList, setConfigList] = useState([]);
    const [loadedMovies, setLoadedMovies] = useState(false);
    useEffect(() => {
        getMovies();
 }, []);
   const getMovies = () => {
      fetch(TRENDING_API_URL)
        .then(response => response.json())    
        .then(data => {
          setMoviesList([...data.results]) 

          fetch(CONFIG_API_URL)
            .then(response => response.json())    
            .then(data => {
              setConfigList(data.images) 
              setLoadedMovies(true)
          });
        });
}
return (
  <div id="container">
    { loadedMovies ?
      <React.Fragment>
        <h1>Trendind movies this week</h1>
        <div id="movies">
          {moviesList.map(movie => <Card key={movie.id} movieInfo={movie} imagesConfig={configList} />)}
        </div>
      </React.Fragment> :
      <Loading />
    }
  </div>
)
;}

export default App;