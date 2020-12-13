import JsonPlaceholder from '../apis/JsonPlaceholder';

// A function returning another function
export const fetchPosts =  ()=>  async (dispatch,getState)=>{
         

        const response = await JsonPlaceholder.get('/posts');

        dispatch ({
            type: 'FETCH_POSTS',
            payload: response.data
        });

    };