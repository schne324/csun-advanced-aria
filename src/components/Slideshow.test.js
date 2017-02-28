import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './Slideshow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slideshow />, div);
});
