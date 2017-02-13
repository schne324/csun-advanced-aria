import React, { Component } from 'react';
import logo from '../img/deque-logo-white.png';

class Slide extends Component {
  render() {
    const isActive = this.props.slideIndex === this.props.activeIndex;
    const dirClass = this.props.slideIndex < this.props.activeIndex ? 'bob-prev' : 'bob-next';
    const c = `bob ${isActive ? 'bob-active' : ''}`;
    return (
      <section style={this.props.style} className={c} data-slide-index={this.props.slideIndex}>
        <div className={`bob-content ${isActive ? '' : dirClass}`}>{this.props.children}</div>
        <div className='bob-foot'>
          <img src={logo} alt='Deque' width={'52'} />
          <p className='notice'>&copy; {new Date().getFullYear()} - All Rights Reserved</p>
          <div className='slide-number'>
            <span className='offscreen'>Slide number: </span>
            <span>{this.props.slideIndex + 1}</span>
          </div>
        </div>
      </section>
    )
  }
}

export default Slide;
