import React from "react";
import './App.css';
import steps from "./components/steps"
const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000



class App extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <img src="./C:\Users\acer\Desktop\Konexio\react\chapitre-01\elsy\src\baseline_directions_walk_black_24dp.png" ></img>
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;