import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <img src={Poster !== "N/A" ? Poster : "https://dummyimage.com/300x400/fff/aaa"} alt={Title} />

      <div className="overlay">
        <span>{Type}</span>
        <p>{Year}</p>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;