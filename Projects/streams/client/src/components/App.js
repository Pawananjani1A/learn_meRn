import React from 'react';
import { BrowserRouter, Link, Route,MemoryRouter } from 'react-router-dom';


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
        <MemoryRouter>
            <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
            </div>
        </MemoryRouter>
        </div>
    );
}

export  default App;