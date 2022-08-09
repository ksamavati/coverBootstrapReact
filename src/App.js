import React from "react";
import { ReactDOM } from "react";

class App extends React.Component {
  state = {
      name: "Kayvon",
      age: "32"
  }

  render() {
      return (
          <div>
              <h1>Hey Devs</h1>
              <p>Random number between 1 and 10: {Math.ceil((Math.random() * 10))}</p>
              <p>My name is {this.state.name}</p>
          </div>

      )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));