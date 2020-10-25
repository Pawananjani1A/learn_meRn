// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';




// Create a react component

function getButtonText()
{    
    const text = { myText: 'Click on Me!'}
    return text;
}

const App = ()=>{
  
    const style = {
         backgroundColor: 'blue',
          color: 'white' 
        };

    return (
        <div>
           <label className="label" htmlFor="name">Enter name:</label>
           <input type="text" id="name"/>
           <button style={style}>
           {getButtonText().myText}
           </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector("#root")

);