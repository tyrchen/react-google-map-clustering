import React, { Component } from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import layoutStyles from './Layout.sass';
import GMap from '../src/GMap';
import { susolvkaCoords, markersData } from './data/fakeData';

// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  constructor() {
    super();
    this.enter = this.enter.bind(this);
  }
  enter(e) {
    console.log(e);
    alert('entered!');
  }
  render() {
    const { styles: { layout, header, main, footer, logo } } = this.props;
    return (
      <div className={layout}>
        <header className={header}>
          <div>
            Clustering example google-map-react (zoom, move to play with)
          </div>
          <div>
            <a href="https://github.com/istarkov/google-map-clustering-example">
              Star at github.com
            </a>
          </div>
        </header>
        <main className={main}>
          <GMap onChildClick={this.enter} center={{ lat: 60.814305, lng: 47.051773 }} zoom={5} markers={markersData} />
        </main>
        <footer className={footer}>
          <div>
            <a href="https://github.com/istarkov">
              Ivan Starkov
            </a>
          </div>
          <div className={logo}></div>
          <div>
            <a href="https://twitter.com/icelabaratory">
              @icelabaratory
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export const layoutHOC = compose(
  defaultProps({
    styles: layoutStyles,
  })
);

export default layoutHOC(Layout);
