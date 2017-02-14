import React, { Component } from 'react';
import Slide from './Slide';
import slides from './slides/';

const initialSize = {
  width: 600,
  height: 400
};

class Show extends Component {
  render() {
    const xScale = this.props.dimensions.width / initialSize.width;
    const yScale = this.props.dimensions.height / initialSize.height;
    const slideStyle = {transform: `scale(${(Math.min(xScale, yScale) - .02)})`};
    const allSlides = slides.map((stuff, i) => {
      return (
        <Slide style={slideStyle} key={i} activeIndex={this.props.slide} slideIndex={i} dir={this.props.direction}>
          {stuff}
        </Slide>
      )
    });

    return (
      <div className='slideshow-bob-container' data-swing-animation={this.props.swing}>
        {allSlides}
      </div>
    )
  }

  cleanUp() {
    Array.prototype.slice.call(
      document.querySelectorAll('.bob-content.fade-in')
    ).forEach((el) => el.classList.remove('fade-in'));
  }

  animate() {
    const active = document.querySelector('.bob-active');
    const content = active.querySelector('.bob-content');

    window.setTimeout(() => {
      content.classList.add('fade-in');
    }, 10);

  }

  componentDidUpdate() {
    this.cleanUp();
    this.animate();
  }

  componentDidMount() {
    this.animate();
  }
}

export default Show;
