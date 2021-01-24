import React from 'react';


//Make sure to use a capital for "Context" in variable decalration
const Context =  React.createContext('english');

export class LanguageStore extends React.Component{

 state = {language:'english'};


  onLanguageChange = (language)=>{
     this.setState({language:language});
 }

    render()
    {
        return (
            <Context.Provider value={{...this.state,onLanguageChange:this.onLanguageChange}}>
              {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
