import React, { Component } from 'react';
import Show from './Show';
import {length} from './slides/';
import './Slideshow.css';

const nexts = [39, 40];

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      slide: 0,
      direction: 'next'
    };
  }

  render() {
    return (
      <Show
        dimensions={this.state.dimensions}
        slide={this.state.slide}
        direction={this.state.direction}
        swing={true} // this determines if we should use fade AND swing in from direction (true), or just fade (false)
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

  handleKeydown(e) {
    const which = e.which;
    if (which < 37 || which > 40) { return; }
    const slide = this.state.slide;
    const isNext = nexts.indexOf(which) > -1;
    const newSlide = isNext ? slide + 1 : slide - 1;
    if (newSlide >= 0 && newSlide < length) {
      this.setState({
        slide: newSlide,
        direction: isNext ? 'next' : 'prev'
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());
    document.body.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    document.body.removeEventListener('keydown');
  }
}

export default Slideshow;
