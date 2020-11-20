import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = ()=>{
   
    const [videos,setVideos] = useState([]);
    const [selectedVideo,setSelectedVideo] = useState(null);

     useEffect(()=>{
         onTermSubmit('DP algorithms');
     },[]);


    const onTermSubmit = async (term) => {
        //    console.log(term);

        const response = await YouTube.get("/search", {
            params: {
                q: term
            }
        });

        //    console.log(response);
         setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
        
    };

   

    return (
        <div className="ui container">
            <SearchBar
                onFormSubmit={onTermSubmit}
            />
              Found {videos.length} videos.
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail
                            video={selectedVideo}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};






export default App;