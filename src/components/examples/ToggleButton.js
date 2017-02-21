import React, { Component } from 'react';
import Highlight from 'react-highlight';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      pressed: !this.state.pressed // toggle it
    });
  }

  render() {
    return (
      <div>
        <button type='button' className='toggle-button' aria-pressed={this.state.pressed} onClick={this.toggle}>
          Toggle Button
        </button>
        <div className='toggle-button-source src'>
        <Highlight className='xml'>
          {`<button type="button" class="toggle-button" aria-pressed="${this.state.pressed}"${this.state.pressed ? ' ' : ''}>
  Toggle Button
</button>`}
        </Highlight>
        </div>
      </div>
    )
  }
}

export default ToggleButton;
