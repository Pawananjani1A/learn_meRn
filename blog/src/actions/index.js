import _ from 'lodash';
import JsonPlaceholder from '../apis/JsonPlaceholder';


export const fetchPostsAndUsers = () => async(dispatch,getState)=>{

    // console.log("About to fetch posts!");
   await dispatch(fetchPosts());
//    console.log(getState().posts);
 

// const userIds = _.uniq(_.map(getState().posts, 'userId'));
//  userIds.forEach((id)=>dispatch(fetchUser(id)));

//The above two lines of code can be implemented using lodash chaining in only one line
    _.chain(getState().posts).map('userId').uniq().forEach((id) => dispatch(fetchUser(id))).value();
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
