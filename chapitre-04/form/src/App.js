import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <p classe="h1" style={{fontSize: 40}}>Login</p>
        <form style={{width: 500}}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" className="form-control is-invalid" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control is-invalid" id="exampleInputPassword1"></input>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
