import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items:[]
    }
  }
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>carre</h1>
      </div>
    )
  }
}

export default App;

