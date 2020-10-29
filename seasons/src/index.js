import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

// Class-based Component
class App extends  React.Component{

    // A simpler state initialisation i.e without construtor
        state = { latitude: null, errorMessage: '' };

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
              <SeasonDisplay
                  latitude={this.state.latitude}
              />
           );
       }

       return (
           <Spinner/>
       );
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
    );