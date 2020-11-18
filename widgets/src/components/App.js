import React,{useState} from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';


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
     
    const [selected,setSelected] = useState(options[0]);
    
    return(
        <div className="ui container">
        <Header/>
       <Route path="/">
           <Accordion items={items} />
       </Route>

       <Route path="/list">
           <Search/>
       </Route>

       <Route path="/dropdown">
           <Dropdown 
               label="Select a Color"
               options={options}
               selected={selected}
               onSelectedChange={setSelected}
           />
       </Route>

       <Route path="/translate">
           <Translate/>
       </Route>
        </div>
    );
};


 export default App;
 