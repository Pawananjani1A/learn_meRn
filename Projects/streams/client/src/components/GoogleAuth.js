import React from 'react';


const CLIENT_ID = '727452677641-lt7rh4s85i0u2sp2m8h6e9u1f9pp411k.apps.googleusercontent.com' ;
const CLIENT_SERET ='TeFAH7pSNudhL0vmQZmBt4wR';
class GoogleAuth extends React.Component{
  
  state = {isSignedIn:null};

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
           this.setState({ isSignedIn: this.auth.isSignedIn.get() });
           this.auth.isSignedIn.listen(this.onAuthChange);
       });

     });
 }

 //Updating the auth state
 onAuthChange = ()=>{
    this.setState({isSignedIn:this.auth.isSignedIn.get()});
 }

 onSignInClick = ()=>{
  this.auth.signIn();
 };

 onSignOutClick = ()=>{
  this.auth.signOut();
 };

 renderAuthButton()
 {
     if(this.state.isSignedIn===null)
     {
         return null;
     }
     else if(this.state.isSignedIn)
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



export default GoogleAuth;