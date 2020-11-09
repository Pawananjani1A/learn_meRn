import React,{useState} from 'react';




const Search = ()=>{
    
    const [term,setTerm] = useState('');

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