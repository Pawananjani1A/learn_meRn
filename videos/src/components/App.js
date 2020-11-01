import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';




class App extends React.Component{

   onTermSubmit = (term)=>{
       console.log(term);

       YouTube.get("/search", {
          params:{
              q:term
          }
       });
   }


    render(){
        return (
            <div className="ui container">
              <SearchBar 
               onFormSubmit = {this.onTermSubmit}
              /> 
            </div>
        );
    }
}


export default App;