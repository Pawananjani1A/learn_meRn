import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{



renderSubmit = (value)=>{
    // console.log(value);
  return value.language==='english'?'Submit':'Confirm Karein';
}

renderButton(color){
return (<button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
            {(languageValue)=>this.renderSubmit(languageValue)}
        </LanguageContext.Consumer>
        </button>
        );
}

    render() {
        //Remember, the only child that a cunsumer tag can have is a function that has the context's data as its first 
        //argument
        return (
        <ColorContext.Consumer>
        {(colorValue)=> this.renderButton(colorValue)}
        </ColorContext.Consumer>     
    );
}
    
};




export default Button;



