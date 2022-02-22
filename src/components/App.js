import React from "react";
//import SearcBar from "./SearchBar";
import MovieList from "./MovieList";
class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "RIPPER UNTOL",
        rating: 8.3,
        overview:
          "A detective and medical examiner join forces to solve series of horrific murders in Victorian",
        imageURL:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dpELyqPFcAhpyaCRFnoUEpQrqZU.jpg",
      },

      {
        id: 2,
        name: "Lucifer",
        rating: 6.8,
        overview:
          "Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. ",
        imageURL:
          "https://www.themoviedb.org/t/p/w1280/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
      },

      {
        id: 3,
        name: "Texas Chainsaw Massacre(2002)",
        rating: 7.9,
        overview:
          "In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin.",
        imageURL:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
      },
    ],
  };

  deleteMovie = (movie) => {
    const leftMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState({
      movies: leftMovieList,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
        <MovieList
          movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
