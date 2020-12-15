import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const PageOne = ()=>{
  return (
      <div>
      PageOne
      <a href="/pageTwo">Navigate to Page Two</a>
      </div>
  );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <a href="/">Navigate to Page One</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
            </div>
        </BrowserRouter>
        </div>
    );
}

export  default App;