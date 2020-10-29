import React from 'react';

class SearchBar extends React.Component{

// onInputChange(e)
// {
//     console.log(e.target.value);
// }
    

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                <div className="field">
                    <label htmlFor="search-bar">Image Search</label>
                    <input type="text" name="search-bar" onChange={(e)=>console.log(e.target.value)}/>
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;