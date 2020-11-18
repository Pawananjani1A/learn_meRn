import React, { useState } from 'react';



const SearchBar = (props)=>{
   
  const {onFormSubmit} = props;
  const [term,setTerm] = useState('');
  
  

  const onSubmit = (e) => {
    e.preventDefault();

    // Make sure we call
    // callback from parent component
    onFormSubmit(term);
  };


  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input
            type="text"
            name="search"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            value={term}
          />
        </div>
      </form>
    </div>  
  );
};





export default SearchBar;