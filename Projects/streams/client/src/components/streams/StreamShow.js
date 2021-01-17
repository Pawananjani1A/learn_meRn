import React from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';


import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

    constructor(props) {

        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        //   console.log(this.props);
        const {id} = this.props.match.params;
        this.props.fetchStream(id);

        this.buildPlayer();
    }

buildPlayer()
{    
    
    //If the stream is not loaded yet or the player is already set up, just return
    if(this.player || !this.props.stream) 
    {
        return;
    }
    //otherwise set up the player for the current stream
     const {id} = this.props.match.params;

    this.player =   flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${id}.flv`
        });
      console.log(this.videoRef);
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

}

//Call the build player method if the current stream gets changed
componentDidUpdate()
{
    this.buildPlayer();
}

//To clean up some resources that were used by a particular instance of our app
componentWillUnmount()
{
    console.log("I was unmounted");
    //Stop attempting to stream video once the user leaves the component.
    this.player.destroy();
}

    render() {
        // console.log(this.props.stream);
        if (!this.props.stream) {
            return ( <div className = "ui segment" >
                <div className = "ui active inverted dimmer" >
                <div className = "ui text loader" > Fetching the Form </div>
                 </div>
                  <p>
                   </p>
                    </div>
            );
        } else {
            const { title, description } = this.props.stream;
            return ( <div >
                <video ref = { this.videoRef } style={{width:'100%'}} controls={true}/>
                 <h1 > { title } </h1> 
                 <h5 > { description } </h5> 
                </div>
            );
        }
    }
};


const mapStateToProps = (state, ownProps) => {

    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);