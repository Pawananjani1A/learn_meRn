import React from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
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

const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

const App =  ()=>{

    return(
        <div className="ui container">
       
            <Dropdown
                options={options}
            />

        </div>
    );
};


 export default App;
 