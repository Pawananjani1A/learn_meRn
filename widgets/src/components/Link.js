import React from 'react';



const Link = (props)=>{
 
    const {className,href,children} = props;

    const onClick = (event)=>{
        //This line prevents full-page reload on changing the URL
         event.preventDefault();
         //This line changes the URL without full-page reload
         window.history.pushState({},'',href);

         //These two lines communicate to the route component that the URL has changed
         const navEvent = new PopStateEvent('popstate');
         window.dispatchEvent(navEvent);
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