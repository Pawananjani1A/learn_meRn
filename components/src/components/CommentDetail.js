import React from 'react';
import faker from 'faker';

const CommentDetail = (props)=>{
  console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
            </div>
            <div className="metadata">
                <span className="date">Today at 5:00PM</span>
            </div>
            <div className="metadata">
                Nice blog post!
                </div>
        </div>
    );
}

export default  CommentDetail;