import React from 'react';
import ReactDOM from 'react-dom';

// Class-based Component
class App extends  React.Component{

     constructor(props) {
        super(props);
        console.log(props);
     
        // This is the only time we do direct assignment to this.state
        this.state = {latitude:null, errorMessage:''};
    }
  

    // Tasks to do when the componen is rendered first time - Recommended
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })     
        );
    }
    

    // React sys we have to define render!!!!!
  render(){
       if(this.state.errorMessage && !this.state.latitude){
           return (
               <div>
                   Error:{this.state.errorMessage}
               </div>
           );
       }

       if(!this.state.errorMessage && this.state.latitude){
           return (
               <div>
                   Latitude:{this.state.latitude}
               </div>
           );
       }

       return (
           <div>Loading !</div>
       );
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
    );