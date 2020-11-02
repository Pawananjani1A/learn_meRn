import React from 'react';
import VideoItem from './VideoItem';


const VideoList = (props)=>{
  
    // Destructuring props
    const {videos} = props;

    const renderedList = videos.map((video)=>{
        return (<VideoItem
            video={video}
        />);
    });

    return (
        <div className="ui relaxed divided list">
        {renderedList}
        </div>
    );
};


export default VideoList;