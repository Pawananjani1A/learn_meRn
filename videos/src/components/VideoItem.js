import React from 'react';



const VideoItem = (props)=>{

 const {video} = props;

    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        {video.snippet.title}
        </div>
    );
}



export default VideoItem;