import React from 'react';
import ReactDOM from 'react-dom';

// Class-based Component
class App extends  React.Component{

     constructor(props) {
        super(props);
        console.log(props);
     
        // This is the only time we do direct assignment to this.state
        this.state = {latitude:null, errorMessage:''};

         window.navigator.geolocation.getCurrentPosition(
             (position) => { 
                 console.log(position);

                //  We use the setState function to update the state!!!!!
                 this.setState({latitude:position.coords.latitude});

                 },
             (err) => { 
                 console.log(err);
                 this.setState({errorMessage:err.message});
             }
         );
    }

    // React sys we have to define render!!!!!
  render(){
      return (
          <div>
          Latitude:{this.state.latitude}<br/>
          Error:{this.state.errorMessage}
          </div>
      );
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
    );