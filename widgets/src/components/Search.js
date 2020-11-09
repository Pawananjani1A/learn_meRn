import React,{useState,useEffect} from 'react';
import axios from 'axios';



const Search = ()=>{
    
    const [term,setTerm] = useState('');

 

   useEffect(() => {
      
    const search = async()=>{
        await axios.get(`https://www.mediawiki.org/w/api.php?action=query&list=search&format=json&srsearch=${term}`)
    };

    search();
   });

    return (
        <div>
        <div className="ui form">
            <div className="field">
                <label htmlFor="search">Enter Search term</label>
                <input 
                className="input"
                 name="search"
                  value={term}
                  onChange={(e)=>{setTerm(e.target.value)}}   
                 />
            </div>
        </div>
        </div>
    );
}


export default Search;