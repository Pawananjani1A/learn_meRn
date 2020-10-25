import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="Nice blog"
                imageSrc={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Today at 4:40PM"
                comment="Working on ReactJs"
                imageSrc={faker.image.avatar()}
            />
            <CommentDetail
                author="Smith"
                timeAgo="Yesterday at 11:45PM"
                comment="What's up next ?"
                imageSrc={faker.image.avatar()}
            />
            <ApprovalCard/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);