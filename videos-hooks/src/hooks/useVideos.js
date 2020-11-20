import {useEffect,useState} from 'react';
import YouTube from '../apis/YouTube';


const useVideos = (defaultSearchTerm)=>{

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async (term) => {
        //    console.log(term);

        const response = await YouTube.get("/search", {
            params: {
                q: term
            }
        });

        //    console.log(response);
        setVideos(response.data.items);
       
}

return [videos,search];
}
export default useVideos;