import React from 'react';

class SearchBar extends React.Component{
 
    state = {term:''};

    onInputChange = (e)=>{
        this.setState({term:e.target.value});
    }

    render(){
        return (
          <div className="search-bar ui segment">
           <div className="ui form">
               <div className="field">
                 <label htmlFor="search">Video Search</label>
                 <input 
                 type="text"
                  name="search" 
                  onChange={this.onInputChange}
                 value={this.state.term}
                  />
               </div>
           </div>
          </div>  
        );
    }
}



export default SearchBar;