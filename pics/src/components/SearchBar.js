import React from 'react';

class SearchBar extends React.Component{

    state = {term:''};

    onFormSubmit(event)
    {
        event.preventDefault();
    }
    

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label htmlFor="search-bar">Image Search</label>
                    <input
                     type="text" 
                     name="search-bar"
                    value={this.state.term}
                   onChange={(e)=>this.setState({term:e.target.value.toUpperCase()})}
                     />
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;