import React from 'react';


const CLIENT_ID = '727452677641-lt7rh4s85i0u2sp2m8h6e9u1f9pp411k.apps.googleusercontent.com' ;
const CLIENT_SERET ='TeFAH7pSNudhL0vmQZmBt4wR';
class GoogleAuth extends React.Component{
  
  state = {isSignedIn:null};

 componentDidMount()
 {  

    //Load the gapi library and on the callback, initialize yourself as client with your clientId
     window.gapi.load('client:auth2',()=>{
       window.gapi.client.init({
           clientId: CLIENT_ID,
           scope:'email'
       }).then(()=>{
           this.auth = window.gapi.auth2.getAuthInstance();
           this.setState({isSignedIn:this.auth.isSignedIn.get()});

       });

     });

 }

 renderAuthButton()
 {
     if(this.state.isSignedIn===null)
     {
         return (
             <div>I don't know if I am signed In.</div>
         );
     }
     else if(this.state.isSignedIn)
     {
         return (
             <div>I am signed In</div>
         );
     }
     else
     {
         return (
             <div>I am not signed In</div>
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