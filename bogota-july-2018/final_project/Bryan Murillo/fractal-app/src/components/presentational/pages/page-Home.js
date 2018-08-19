import React, { Component } from 'react';

class PageHome extends Component {
  render(){
    return (
      <React.Fragment>
        <article>
          <h2>what are <span>fractals</span>?</h2>
          <p>
            A fractal is a never-ending pattern. Fractals are infinitely complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing feedback loop.
            Driven by recursion, fractals are images of dynamic systems – the pictures of Chaos. Geometrically, they exist in between our familiar dimensions.
            Fractal patterns are extremely familiar, since nature is full of fractals. For instance: trees, rivers, coastlines, mountains, clouds, seashells, hurricanes, etc.
          </p>
        </article>
        <article>
          <h2>what is this <span>app</span>?</h2>
          <p>
            In this app you will find the graphs of well known fractals and you will be able to manipulate them at some level.
            Go to the left bar and explore some fractals!
          </p>
        </article>
      </React.Fragment>
    );
  }
}

export default PageHome;
