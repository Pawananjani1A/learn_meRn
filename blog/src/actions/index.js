import JsonPlaceholder from '../apis/JsonPlaceholder';

// A function returning another function
export const fetchPosts =  ()=>  async (dispatch,getState)=>{
         

        const response = await JsonPlaceholder.get('/posts');

        dispatch ({
            type: 'FETCH_POSTS',
            payload: response.data
        });

    };

export const fetchUser = (id)=>async(dispatch,getState)=>{

    const response = await JsonPlaceholder.get(`users/${id}`);

    dispatch ({
        type:'FETCH_USER',
        payload: response.data
    });
}