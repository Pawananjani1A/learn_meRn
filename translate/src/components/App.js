import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
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
           <LanguageSelector onLanguageChange={this.onLanguageChange}/>
           
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