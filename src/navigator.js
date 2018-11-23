import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Navigator extends Component {
  render() {
    return (




        <header>
        <div id="navid">

        <nav>
          <ul>
            <li className="first">
            <Link to="/FirstBlog">New York City</Link>
            </li>
            <li>
            <Link to="/SecondBlog">San Francisco</Link>
            </li>
            <li className="last">
            <Link to="/ThirdBlog">Austin</Link>
            </li>
          </ul>
        </nav>

        </div>
        </header>

    );
  }
}

export default Navigator;
