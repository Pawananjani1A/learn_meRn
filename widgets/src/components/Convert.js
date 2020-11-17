import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Convert = (props)=>{
  
    const {language,text} = props;
    const [translated,setTranslated] = useState('');
    const [debouncedText,setDebouncedText] = useState(text);


    //This useEffect is to setTime Limit on updatation of debounced text 
    //intended to finally limit the number of api requests

    useEffect(()=>{

        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return ()=>{
            clearTimeout(timerId);
        };
    },[text]);

    useEffect(()=>{
        // console.log("Language or text changed!");
        const doTranslation = async ()=>{
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            const { data } = response;
            setTranslated(data.data.translations[0].translatedText);
        };

       doTranslation();
    },[language,debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;