import React from 'react';
import ReactDOM from 'react-dom';



// Funtional Component
/*
const App = ()=>{

    window.navigator.geolocation.getCurrentPosition(
        (position) =>{ console.log(position);},
        (err) =>{ console.log(err);}
    );
    return (
        <div>Hi there!</div>
    );
}
*/


// Class-based Component
class App extends  React.Component{
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