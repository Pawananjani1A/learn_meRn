import React,{useEffect, useRef, useState} from 'react';



const Dropdown = (props)=>{
    
    const [open,setOpen] = useState(false);
    const {label,options,selected,onSelectedChange} = props;
    
    const ref = useRef();

    //This useEffect is created to function only when the component is rendered the first time,
    //that's why we've used empty array in it's second argument.
    useEffect(()=>{
          document.body.addEventListener('click',(event)=>{
            //   console.log('BODY CLICKED');
            // console.log(event.target);
            if(ref.current && ref.current.contains(event.target)) return;
             else setOpen(false);
          },{capture:true});
    },[]);
     
    const renderedOptions = options.map((option)=>{

        if(option.value===selected.value) return null;
         return (
             <div 
             key={option.value} 
             className="item"
             onClick={()=>{
                 onSelectedChange(option)
                //  console.log('ITEM CLICKED');
                 }}
             >
               {option.label}
             </div>
         );
    });


    // console.log(ref.current);


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                onClick={()=>{
                    setOpen(!open)
                    // console.log('DROPDOWN CLICKED');
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dropdown;