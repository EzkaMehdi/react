import React from "react";


class Favorites extends React.Component {
getStorage(){
  return(
    movieID
  )
}
  constructor() {
    super();

    this.state = {  
      movies: [],
      favIDs:this.getStorage
    };
  }
  getMovie(id){
    const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"
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