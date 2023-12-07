import React from "react";
import './App.css';

    const App = () =>{
      return (
        <div className="container"> 
        <div className="row">
          <div className="col-6" >
            <img src="https://www.yelu.in/img/in/h/1510386762-71-mazenet-solution.png" alt="Mazenet" className="logo"/>
            <h2>Login to Mazenet</h2><br/>
            <form>
              <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"></input>
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="text" id="password"></input>
              </div>
              <div className="cbox">
              <input type="checkbox" id="checkbox" name="click-checkbox" className="check-box"/>
              <label htmlFor="click-checkbox">Remember Username</label>
              </div>
              

              <button type="submit">submit</button>
            </form>
            <p className="copyright">© 2023 Mazenet Company. All rights reserved.</p>
          </div>
          <div className="col-6">
            <img src="https://pbs.twimg.com/media/F7lwA_gWIAAFSTk.jpg" alt="left-img" className="img"></img>
          </div>
        </div>
        </div>
      )
    }

export default App;