import _ from 'lodash';
import JsonPlaceholder from '../apis/JsonPlaceholder';


export const fetchPostsAndUsers = () => async(dispatch)=>{

    console.log("About to fetch posts!");
   await dispatch(fetchPosts());
   console.log("Fetched posts!");
};

// A function returning another function
export const fetchPosts =  ()=>  async (dispatch,getState)=>{
         

        const response = await JsonPlaceholder.get('/posts');

        dispatch ({
            type: 'FETCH_POSTS',
            payload: response.data
        });

    };



//Unmemoized Version
export const fetchUser = (id) => async(dispatch, getState) => {

    const response = await JsonPlaceholder.get(`users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });

};





    /*Memoized Version of fetchUser to make only one request for one user

// export const fetchUser = (id) =>(dispatch,getState)=>{
  
// _fetchUser(id,dispatch);

// };

// const _fetchUser = _.memoize(async (id,dispatch)=>{
//     const response = await JsonPlaceholder.get(`users/${id}`);

//     dispatch ({
//         type:'FETCH_USER',
//         payload: response.data
//     });
// });

*/
