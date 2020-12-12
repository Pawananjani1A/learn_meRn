

/*
Rules of Reducers
1.Must return any value besides 'undefined'.
2.Produces 'state' or data to be used inside your app
  using only previous state and the action.
3.Must not return reach 'out of itself' to decide
  what value to return => Reducers are pure.
4.Must not mutate its input 'state' argument.
*/ 

 const postsReducer =  (state=[],action)=>{
    
    //Extremely Common syntax inside reducers.
    switch (action.type)
    {
        case 'FETCH_POSTS':
             return action.payload;
        default: return state;
        
    }
};

export default postsReducer;
