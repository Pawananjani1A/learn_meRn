import React from 'react';
import ReactDOM from 'react-dom';

// Class-based Component
class App extends  React.Component{

     constructor(props) {
        super(props);
        console.log(props);
     
        // This is the only time we do direct assignment to this.state
        this.state = {latitude:51};

         window.navigator.geolocation.getCurrentPosition(
             (position) => { 
                 console.log(position);

                //  We use the setState function to update the state!!!!!
                 this.setState({latitude:position.coords.latitude});

                //  We don't !!!!!
                // this.state.latitude = position.coords.latitude;
                 },
             (err) => { console.log(err); }
         );
    }

    // React sys we have to define render!!!!!
  render(){
      return (
          <div>Latitude:{this.state.latitude}</div>
      );
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
    );