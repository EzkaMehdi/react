import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './composant/Add.jsx'
import List from './composant/List.jsx'
import Pay from './composant/Pay.jsx'
import Button from './composant/Button.jsx'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
  }
  
  handleClickAdd(e) {
    this.setState({
        click: e.target.add
    })
  }
  handleClickList(e) {
    this.setState({
        add: e.target.list
    })
  }
  handleClickPay(e) {
    this.setState({
        add: e.target.pay
    })
  }
 
  render() {
    return (
      <div className="container d-flex justify-content-center ">
        <div className="d-flex flex-column" style={{ width: 600 }}>
​
​
          <h1 className="h1" style={{ textAlign: "center" }}>Bakery</h1>
          <div className="d-flex flex-row justify-content-start">
​
            <Button isSelected={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"} onClickFunc={this.handleClickAdd} >Add</Button>
            <Button isSelected={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-light"} onClickFunc={this.handleClickList}>List</Button>
            <Button isSelected={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-light"} onClickFunc={this.handleClickPay}>Pay</Button>
​
            <div className="row">
              <div className="col">
​
                <Add></Add>
                <List></List>
                <Pay></Pay>
              </div>
            </div>
​
          </div>
​
​
        </div>
      </div>
    );
  }
}
export default App