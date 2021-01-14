import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { fetchStreams } from '../../actions';

class StreamList extends React.Component {


        componentDidMount() {
            this.props.fetchStreams();
        }

        renderList() {
            return this.props.streams.map(stream => {
                return ( <
                    div className = "item"
                    key = { stream.id } > { this.renderAdmin(stream) } <
                    i className = "large middle aligned icon camera" / >
                    <div className = "content" >
                    <Link to = { `/streams/${stream.id}` } className = "header" > { stream.title } </Link>
                     <div className = "description" > { stream.description } </div> 
                     </div> 
                     </div>
                );
            });
        }

        renderAdmin(stream) {
            if (this.props.currentUserId === stream.userId) {
                return ( <div className = "right floated content" >
                    <Link to = { `/streams/edit/${stream.id}` } className = "ui inverted primary button" >
                    Edit 
                    </Link> 
                    <Link className = "ui inverted red button"
                    to = { `/streams/delete/${stream.id}` } >
                    Delete 
                    </Link> 
                    </div>
                );
            }
        }

        renderCreate() {
            if (this.props.isSignedIn) {
                return ( 
                <div style = {{ textAlign: 'right' } } >
                    <Link to = "/streams/new" className = "large ui inverted green button" >
                    Create 
                    </Link> 
                    </div>
                    );
                }
            }

            render() {
                //   console.log(this.props.streams);
                return ( <div className = "ui container" >
                    <h2> Streams </h2> 
                    <div className = "ui celled list" > { this.renderList() } </div>
                     <div > { this.renderCreate() } </div>
                      </div>
                );
            };
        }

        const mapStateToProps = (state) => {

            return {
                streams: Object.values(state.streams),
                currentUserId: state.authReducer.userId,
                isSignedIn: state.authReducer.isSignedIn
            };
        };

        export default connect(mapStateToProps, { fetchStreams })(StreamList);