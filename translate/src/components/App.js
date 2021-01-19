import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component{
 
    state = {language:'english'};

    //We've to make sure this is an arrow function as we're passing it to something else as a callback function
    onLanguageChange = (language)=>{
        this.setState({language});
    };

    
    render() {
       const buttonColor =  this.state.language==='english'?"primary":"red";
        return (
            <div className="ui container">
           <div>
               Select a Language : 
               <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
               <i className="flag in" onClick={()=>this.onLanguageChange('hindi')}/>
           </div>
           <ColorContext.Provider value={buttonColor}>
           <LanguageContext.Provider value={this.state.language}>
               <UserCreate/>
           </LanguageContext.Provider>
           </ColorContext.Provider>
           
            </div>
        );
    }
}



export default App;