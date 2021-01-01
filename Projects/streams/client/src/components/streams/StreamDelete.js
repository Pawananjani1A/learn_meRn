import React from 'react';
import Modal from '../Modal';


const StreamDelete = () => {
    
    const actions =  (
        <React.Fragment>
            <button className="ui button negative">DELETE</button>
            <button className="ui button">CANCEL</button>
        </React.Fragment>
    );

    return (
        <div>
        StreamDelete
        <Modal
            title="Delete Stream"
            content="Are you sure you want to delete this stream?"
            actions={actions}
        />
        </div>
    );
};



export default StreamDelete;