import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchStream,editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

componentDidMount()
{
    this.props.fetchStream(this.props.match.params.id);
}
  

  onSubmit = (formValues)=>{
    //   console.log(formValues);
      console.log(this.props.match.params.id);
    this.props.editStream(this.props.match.params.id,formValues);
  }

    render() {
        // console.log(this.props);
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
        else {
            return (
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm 
                    initialValues={_.pick(this.props.stream,'title','description')}
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