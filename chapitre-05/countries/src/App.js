import React from 'react'
import Bootstrap from '../src/bootstrap.min.css';
import Button from './component/button.jsx'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    };

  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {
        console.log(result)

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        });
      })
      .catch(err => console.error("There is an error !", err));
  }

getCountry(country){
  fetch("https://restcountries.eu/rest/v2/name/france")
  .then(response => response.json())
  .then(result => {
    console.log(result)

    this.setState({
      name: result[0].name,
      capital: result[0].capital,
      flag: result[0].flag,
      population: result[0].population,
      region: result[0].region
    });
  })
  .catch(err => console.error("There is an error !", err));
}

  renderButton () {
    <div>
      <Button>France</Button>
      <Button>Brazil</Button>
      <Button>Croatia</Button>

    </div>
  }

  render() {
    return (

      <div>

        <p>name : {this.state.name}</p>
        <p>capital : {this.state.capital}</p>
        <p>flag : {this.state.flag}</p>
        <p>population : {this.state.population}</p>
        <p>region : {this.state.region}</p>

      </div>

    )
  }
}

export default App;