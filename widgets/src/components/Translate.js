import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

//Google Translate API Key : "Your Google Traslate API Key"
//ONLY valid for requests made from localhost:3000

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
       value:'ar'
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

           <hr/>
           <h3 className="ui header">Output</h3>
           <Convert
               language={language}
               text={text}
           />
        </div>
    );
}


export default Translate;
