import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import commentDetail from "./components/commentDetail";

const App = ()=>{
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">Today at 5:00PM</span>
                </div>
                <div className="metadata">
                    Nice blog post!
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);