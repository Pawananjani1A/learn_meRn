import JsonPlaceholder from '../apis/JsonPlaceholder';


export const fetchPosts = async ()=>{

    const response = await JsonPlaceholder.get('/posts');

    return ({
        type:'FETCH_POSTS',
        payload:response
    });
};