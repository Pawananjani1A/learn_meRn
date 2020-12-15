import React from 'react';
import { BrowserRouter, Link, Route,HashRouter } from 'react-router-dom';


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
        <HashRouter>
            <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
            </div>
        </HashRouter>
        </div>
    );
}

export  default App;