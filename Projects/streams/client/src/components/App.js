import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

const PageOne = ()=>{
  return (
      <div>
      PageOne
      <Link to="/pageTwo">Navigate to Page Two</Link>
      </div>
  );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">Navigate to Page One</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/new" component={StreamCreate} />
                    <Route path="/edit" component={StreamEdit} />
                    <Route path="/delete" component={StreamDelete} />
                    <Route path="/show" component={StreamShow} />
            </div>
        </BrowserRouter>
        </div>
    );
}

export  default App;