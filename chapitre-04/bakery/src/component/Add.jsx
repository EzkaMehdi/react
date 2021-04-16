import React from 'react';
class Add extends React.Component {
  constructor() {
    super();

    this.state = { 
      productName: "",
      price: 1
    };
  }

  updateProductName(e) {
    this.setState({ productName: e.target.value });
}

updatePrice(e) {
    this.setState({ price: e.target.value });
}

  render() {
    return (
      <div >
         <input type="text" onChange={this.updateProductName} />
         <button className="btn btn-primary" type="submit" onClick={} >Add</button>
         <input type="range"  min={1} max={10} value={this.state.price}  />
      </div>
    )
  }
}

export default Add;