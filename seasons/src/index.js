import React from 'react';
import ReactDOM from 'react-dom';

// Class-based Component
class App extends  React.Component{

     constructor(props) {
        super(props);
        console.log(props);

        this.state = {latitude:null};
    }

    // React sys we have to define render!
  render(){
      window.navigator.geolocation.getCurrentPosition(
          (position) => { console.log(position); },
          (err) => { console.log(err); }
      );
      return (
          <div>Hi there!</div>
      );
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
    );