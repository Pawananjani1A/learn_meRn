import React from 'react';
import Accordion from './Accordion';
import Search from './Search';


const items = [
    {
        title:'What is React?',
        content:'React is a frontend javascript framework.'
    },
    {
        title:'Why use React?',
        content:'React is a favorite JS library among engineers.'
    },
    {
        title:'How do you use react?',
        content:'You use react by creating components.'
    }
];

const App =  ()=>{

    return(
        <div className="ui container">
       
            {/* <Accordion
                items={items} />*/}
            <Search/>

        </div>
    );
};


 export default App;
 