import React, { Component } from 'react';
import Show from './Show';
import {length} from './slides/';
import './Slideshow.css';

const nexts = [39, 40];
let xDown, yDown;

class Slideshow extends Component {
  constructor(props) {
    super(props);
    let hash = location.hash;
    hash = hash && hash.substring(1, hash.length);

    this.state = {
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      slide: (hash && hash > 0 && hash <= length)  ? (parseInt(hash, 10) - 1) : 0,
      direction: 'next'
    };
  }

  render() {
    return (
      <Show
        dimensions={this.state.dimensions}
        slide={this.state.slide}
        direction={this.state.direction}
        swing={true} // this determines animation of fade AND swing-in (true), or just fade (false)
      />
    );
  }

  updateDimensions() {
    this.setState({
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  hash(idx) {
    location.hash = idx + 1;
  }

  slideNavigation(dir) {
    const slide = this.state.slide;
    const newSlide = dir === 'next' ? slide + 1 : slide - 1;
    if (newSlide >= 0 && newSlide < length) {
      this.hash(newSlide);
      this.setState({
        slide: newSlide,
        direction: dir
      });
    }
  }

  handleKeydown(e) {
    const which = e.which;
    if (which < 37 || which > 40) { return; }
    this.slideNavigation(nexts.indexOf(which) > -1 ? 'next' : 'prev');
  }

  handleTouchStart(e) {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    if (!xDown || !yDown) { return; }
    const xUp = e.touches[0].clientX;
    const yUp = e.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      this.slideNavigation(xDiff > 0 ? 'next' : 'prev');
    }

    xDown = null;
    yDown = null;
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());
    document.body.addEventListener('keydown', (e) => this.handleKeydown(e));
    document.addEventListener('touchstart', this.handleTouchStart.bind(this));
    document.addEventListener('touchmove', this.handleTouchMove.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    document.body.removeEventListener('keydown');
    document.removeEventListener('touchstart');
    document.removeEventListener('touchmove');
  }
}

export default Slideshow;
