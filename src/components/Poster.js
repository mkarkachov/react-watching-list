import React from 'react';

function Poster(props){

  const baseUrl = props.imagesConfig.base_url;
  const srcUrls = props.imagesConfig.poster_sizes.map(url => {
    return (
      url !== 'original'
      ? `${baseUrl}${url}/${props.posterPath} ${url}`
      : `${baseUrl}${url}/${props.posterPath}`
    );
  });
  console.log(srcUrls);

  return (
    <div className="poster">
      
    </div>
  )
}

export default Poster;