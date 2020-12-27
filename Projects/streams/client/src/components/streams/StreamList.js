import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component{


    componentDidMount(){
        this.props.fetchStreams();
        }

    renderList()
    {
        return this.props.streams.map(stream=>{
           return (
               <div className="item" key={stream.id}>
                  <i className="large middle aligned icon camera"/>
                  <div className="content">
                       {stream.title}
                       <div className="description">
                         {stream.description}
                       </div>
                  </div>
                  {this.renderAdmin(stream)}
               </div>
           );
        });
    }

    renderAdmin(stream)
    {
        if(this.props.currentUserId===stream.userId)
        {
              return (
                  <div className="right floated content">
                      <button className="large ui inverted primary button">
                          Edit
                      </button>
                      <button className="large ui inverted red button">
                          Delete
                      </button>
                  </div>
              );
        }
        else
        {

        }
    }

    render() {
    //   console.log(this.props.streams);
        return (
            <div className="ui container">
            <h2>Streams</h2>
            <div className="ui celled list">
                 {this.renderList()}
            </div>
            </div>
        );
    };
}

const mapStateToProps = (state)=>{
   
    return {
        streams:Object.values(state.streams),
        currentUserId:state.authReducer.userId
    };
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);