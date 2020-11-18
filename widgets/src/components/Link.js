import React from 'react';



const Link = (props)=>{
 
    const {className,href,children} = props;

    const onClick = (event)=>{
         event.preventDefault();
    };

    return (
        <a 
        href={href} 
        className={className}
        onClick={onClick}
        >
        {children}
        </a>
    );
};


export default Link;