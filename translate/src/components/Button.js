import React from 'react';

import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component{

//Set up the "contextType" from the contexts defined earlier
static contextType = LanguageContext;


renderSubmit = (value)=>{
  return value==='english'?'Submit':'Confirm Karein';
}

    render() {
        
        return (
        <button className="ui button primary">
        <LanguageContext.Consumer>
            {(value)=>this.renderSubmit(value)}
        </LanguageContext.Consumer>
        </button>
    );
}
    
};




export default Button;



