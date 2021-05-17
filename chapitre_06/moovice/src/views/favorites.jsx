import React from "react";


class Favorites extends React.Component {

  constructor() {
    super();

    this.state = {  
      movies: [],
      favIDs:localStorage.getItem("movies")
    };
  }
  getMovie(id){
    const API_KEY = 'e441f8a3a151d588a4932d2c5d310769'
    const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"
  }

  componentDidMount(){

    
  }
  render() {
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}
export default Favorites;