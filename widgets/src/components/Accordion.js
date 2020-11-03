import React from 'react';


const Accordion = (props)=>{

    const {items} = props;

    return (
        <div>{items.length}</div>
    );
}


export default Accordion;