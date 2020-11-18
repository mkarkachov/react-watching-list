import React from "react"
import Poster from "../components/Poster"

function Card(props){
  // console.log(props);
  return (
    <div className="card">
      <Poster posterPath={props.movieInfo.poster_path} imagesConfig={props.imagesConfig}/>
    </div>
  )
}

export default Card;