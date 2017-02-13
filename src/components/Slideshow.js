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
      slide: 0
    };
  }

  render() {
    return (
      <Show dimensions={this.state.dimensions} slide={this.state.slide} />
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
    const newSlide = nexts.indexOf(which) > -1 ? slide + 1 : slide - 1;
    if (newSlide >= 0 && newSlide < length) {
      this.setState({slide: newSlide});
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
