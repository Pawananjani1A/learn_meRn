import React from 'react';


const CLIENT_ID = '129555752339-njnpm4nlv5behip3mcu99g30likj9uee.apps.googleusercontent.com' ;

class GoogleAuth extends React.Component{

 componentDidMount()
 {  

    //Load the gapi library and on the callback, initialize yourself as client with your clientId
     window.gapi.load('client:auth2',()=>{
       window.gapi.client.init({
           clientId: CLIENT_ID,
           scope:'email'
       })
     });

 }


    render()
    {
        return (
            <div>Google Auth</div>
        );
    }
}



export default GoogleAuth;