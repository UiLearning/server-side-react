import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
        </header>
        <aside>
          <p className="selected">Home</p>
          <p>
            <Link to="/news">News</Link>
          </p>
        </aside>
        <article>
          <h1>News page</h1>
          <Button bsStyle='primary' bsSize='large'>Click</Button>

        </article>
        <figure>
        </figure>
      </div>
    );
  }
}

export default Home;