import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        </article>
        <figure>
        </figure>
      </div>
    );
  }
}

export default Home;