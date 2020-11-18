import React,{useState} from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';


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

const showAccordion = ()=>{
   if(window.location.pathname==='/'){
       return <Accordion items={items} /> ;
   }
};

const showList = ()=>{
    if(window.location.pathname==='/list') return <Search/> ;
};

const showDropdown = ()=>{
    if(window.location.pathname==='/dropdown') 
        return <Dropdown 
                  label="Select a Color"
                  options={options}
                  selected={options[0]}
                  
                  />
                                                
};

const showTranslate = ()=>{
    if(window.location.pathname==='/translate')
     return <Translate/>;
}

const App =  ()=>{
     
    const [selected,setSelected] = useState(options[0]);
    
    return(
        <div className="ui container">
        {showAccordion()}
        {showList()}
        </div>
    );
};


 export default App;
 