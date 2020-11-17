import React, { useEffect } from 'react';



const Convert = (props)=>{
  
    const {language,text} = props;

    useEffect(()=>{
        console.log("Language or text changed!");
    },[language,text]);

    return (
        <div></div>
    );
}

export default Convert;