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
    }
    this.getCountry = this.getCountry.bind(this)
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
  }

  getCountry(country) {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(result => {
        console.log(result)

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
  }

  renderButton() {
    return(
    <div>
      <Button onClick={this.getCountry}>France</Button>
      <Button onClick={this.getCountry} >Brazil</Button>
      <Button onClick={this.getCountry} >Croatia</Button>

    </div>
    )}

  render() {
    return (

      <div>

        <p>name : {this.state.name}</p>
        <p>capital : {this.state.capital}</p>
        <p>flag : <img className ="img" src = {this.state.flag} alt = "drapeau france" ></img>
        </p>
        <p>population : {this.state.population}</p>
        <p>region : {this.state.region}</p>
        {this.renderButton()}
      </div>

    )
  }
}

export default App;