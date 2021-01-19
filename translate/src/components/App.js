import React from 'react';

import UserCreate from './UserCreate';

class App extends React.Component{
 
    state = {language:'english'};

    //We've to make sure this is an arrow function as we're passing it to something else as a callback function
    onLanguageChange = (language)=>{
        this.setState({language});
    };

    render() {
        return (
            <div className="ui container">
           <div>
               Select a Language : 
               <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
               <i className="flag in" onClick={()=>this.onLanguageChange('hindi')}/>
           </div>
           <UserCreate/>
            </div>
        );
    }
}



export default App;