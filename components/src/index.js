import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';

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
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);