import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import FirstBlog from './firstBlog';
import SecondBlog from './secondBlog';
import ThirdBlog from './thirdBlog';
import Navigator from './navigator';


import './default.scss';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
        <Header />
        <Navigator />
          <Route exact path='/firstBlog' component={FirstBlog} />
          <Route exact path='/secondBlog' component={SecondBlog} />
          <Route exact path='/thirdBlog' component={ThirdBlog} />
        <Footer />
      </div>
      </Router>
    );
  }

}

export default App;
