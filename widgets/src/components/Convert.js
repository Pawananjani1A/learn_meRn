import React, { useEffect } from 'react';
import axios from 'axios';


const Convert = (props)=>{
  
    const {language,text} = props;

    useEffect(()=>{
        // console.log("Language or text changed!");
        axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params: {
                q:text,
                target:language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'    
            }
        });
    },[language,text]);

    return (
        <div></div>
    );
}

export default Convert;