import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
    {
      label:'English',
      value:'en'
    },
   {
      label:"Afrikaans",
      value:'af'
   },
   {
       label:'Arabic',
       value:'ab'
   },
   {
       label:'Hindi',
       value:'hi'
   }
];

const Translate = ()=>{

  const [language,setLanguage] = useState(options[0]);
  const [text,setText] = useState('');

    return (
        <div>
        
        <div className="ui form">
            <div className="field">
                <label htmlFor="inputText" >Enter Text</label>
                    <input
                        name="inputText"
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                    />
            </div>
        </div>
           <Dropdown
               label="Select a Language"
               options={options}
               selected={language}
               onSelectedChange={setLanguage}
           />
        </div>
    );
}


export default Translate;