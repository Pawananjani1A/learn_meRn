import React from 'react';
import {connect} from 'react-redux';


import {fetchStream,editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

componentDidMount()
{
    this.props.fetchStream(this.props.match.params.id);
}
  

  onSubmit = (formValues)=>{
      console.log(formValues);
  }

    render() {
        // console.log(this.props);
        if(!this.props.stream)
        {
            return (
                <div class="ui segment">
                    <div class="ui active inverted dimmer">
                        <div class="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm 
                    initialValues={{ title: `${this.props.stream.title}`, description: `${this.props.stream.description}`}}
                    onSubmit={this.onSubmit}
                    />
                </div>
            );
        }
    }
}


const mapStateToProps= (state,ownProps)=>{
// console.log(ownProps);
return {stream:state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream,editStream}) (StreamEdit);