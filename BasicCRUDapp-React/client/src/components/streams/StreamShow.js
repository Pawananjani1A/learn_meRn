import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends React.Component {


  componentDidMount(){
    //   console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }


    render()
    {  
         // console.log(this.props.stream);
        if(!this.props.stream)
        {
            return (
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Fetching the Form</div>
                    </div>
                    <p></p>
                </div>
            );
        }
        else
         {  
             const {title,description} = this.props.stream;
             return (
            <div>
            <h2>{title}</h2>
            <h5>{description}</h5>
            </div>
        );
        }
    }
}


const mapStateToProps = (state,ownProps)=>{

    return {stream:state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream}) (StreamShow);