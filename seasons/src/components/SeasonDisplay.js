import React from 'react';


const getSeason = (latitude,month)=>{

    if(month>2 && month<9)
    {
        return latitude>0?'Summer':'Winter';
    }
    else return latitude >0 ? 'Winter':'Summer';
};

const SeasonDisplay = (props)=>{
//    console.log(props);

const season = getSeason(props.latitude,new Date().getMonth());
    return(
        <div>The current season is {season}</div>
    );
};


export default SeasonDisplay;