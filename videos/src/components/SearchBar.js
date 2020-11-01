import React from 'react';

class SearchBar extends React.Component{
 
    state = {term:''};

    onInputChange = (e)=>{
        this.setState({term:e.target.value});
    };

    onFormSubmit = (e)=>{
        e.preventDefault();

        // Make sure we call
        // callback from parent component
      this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
          <div className="search-bar ui segment">
           <form onSubmit={this.onFormSubmit}  className="ui form">
               <div className="field">
                 <label htmlFor="search">Video Search</label>
                 <input 
                 type="text"
                  name="search" 
                  onChange={this.onInputChange}
                 value={this.state.term}
                  />
               </div>
           </form>
          </div>  
        );
    }
}



export default SearchBar;