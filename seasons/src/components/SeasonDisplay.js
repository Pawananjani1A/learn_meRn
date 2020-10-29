import React from 'react';
import '../css/SeasonDisplay.css';



const seasonConfig = {

    Summer:{
        text: 'Let\'s hits the beach',
        iconName:'sun'
        
    },
    Winter:{
        text:'Burr, it\'s chilly !',
        iconName:'snowflake'
    }
};

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

    const { text, iconName } = seasonConfig[season];
    //   console.log(iconName);
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};


export default SeasonDisplay;
