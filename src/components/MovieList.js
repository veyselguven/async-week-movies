/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const MovieList = (props) => {
  //   function handleClick(event) {
  //     // console.log("buttonclick");
  //     console.log("event", event);
  //   }
  return (
    <div>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <div>
            <img
              width="200"
              height="300"
              src={movie.imageURL}
              alt="Sample Movie"
            />
            <div>
              <h5>{movie.name}</h5>
              <p>{movie.overview}</p>
              <div>
                <button
                  type="button"
                  onClick={() => props.deleteMovieProp(movie)}
                >
                  Delete
                </button>
                <h2>
                  <span>{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
