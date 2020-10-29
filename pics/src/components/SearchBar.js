import React from 'react';

class SearchBar extends React.Component{

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                <div className="field">
                    <label htmlFor="search-bar">Image Search</label>
                    <input type="text" name="search-bar"/>
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;