import React from 'react';
import {connect} from 'react-redux';

import {signIn,signOut} from '../actions';


const CLIENT_ID = 'Google oAuth Client Id' ;
// const CLIENT_SERET ='TeFAH7pSNudhL0vmQZmBt4wR';
class GoogleAuth extends React.Component{
  
  

//Rendering the auth state
 componentDidMount()
 {  
    //Load the gapi library and on the callback, initialize yourself as client with your clientId
     window.gapi.load('client:auth2',()=>{
       window.gapi.client.init({
           clientId: CLIENT_ID,
           scope:'email'
       }).then(()=>{
           this.auth = window.gapi.auth2.getAuthInstance();
           //Passing the authentication status from browser window to our redux store
           this.onAuthChange(this.auth.isSignedIn.get());
           this.auth.isSignedIn.listen(this.onAuthChange);
       });

     });
 }

 //Updating the auth state in the redux store 
    onAuthChange = (isSignedIn)=>{
    // console.log(this.props);
    if(isSignedIn) 
    {  
        this.props.signIn(this.auth.currentUser.get().getId());
    }
    else 
    {
        this.props.signOut();
    }
 }

 onSignInClick = ()=>{
  this.auth.signIn();
 };

 onSignOutClick = ()=>{
  this.auth.signOut();
 };

 renderAuthButton()
 {
     if(this.props.isSignedIn===null)
     {
         return null;
     }
     else if(this.props.isSignedIn)
     {
         return (
             <button className="ui red google button" onClick={this.onSignOutClick}>
             <i className="google icon"/>
                 Sign Out
             </button>
         );
     }
     else
     {
         return (
             <button className="ui red google button" onClick={this.onSignInClick}>
                 <i className="google icon"/>
                 Sign In with Google
             </button>
         );
     }
 }


    render()
    {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

//Map the state passed from our redux store to the props of this component
const mapStateToProps = (state)=>{


    return {isSignedIn:state.authReducer.isSignedIn};
};

//Connecting the mapStateToProps with the action creators and this component(GoogleAuth)
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);
