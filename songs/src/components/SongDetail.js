import React from 'react';
import {connect} from 'react-redux';


const SongDetail = (props)=>{
//  console.log(props);
const {SongSelectedNow} = props;

    if (!SongSelectedNow) return <div>Select a Song</div>;

    return (
        <div>
            <h3>Details for:</h3>
            <p>
            Title: {SongSelectedNow.title}
            <br/>
            Duration: {SongSelectedNow.duration}
            </p>
        </div>
    );
    
};


const mapStateToProps = (state)=>{

    return {SongSelectedNow:state.selectedSong};
};


export default connect(mapStateToProps)(SongDetail);