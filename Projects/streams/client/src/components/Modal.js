import React from 'react';

//ReactDOM is purposedly imported here
import ReactDOM from 'react-dom';



const Modal = (props)=>{

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Modal in a Portal
            </div>
        </div>,
        document.querySelector('#modal')
    );
};




export default Modal;


