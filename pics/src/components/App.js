import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{

    state = {images:[]};

    async onSearchSubmit(term)
    {    
        // console.log(term);
        const response = await axios.get('https://api.unsplash.com/search/photos',{
         params:{query: term} ,
        headers:{
                Authorization: 'Client-ID NjsoiNLvKO8zY-eEzu_GqdIZcwyTiJun9sTkR6kPgAw'
        }
        });

        // console.log(response.data.results);
        this.setState({images:response.data.results});
    }

render(){
    return (
        <div className="ui container"  style={{marginTop:'10px'}}>
            <SearchBar
                onSubmit={this.onSearchSubmit}
            />
        Found {this.state.images.length} images.
        </div>
    );
}
}


export default App;