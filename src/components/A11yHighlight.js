import React, { Component } from 'react';
import Highlight from 'react-highlight';

/**
 * Turns a pre->code snippet into a focusable, labelled
 * region so sighted keyboard users can view it all
 */

class A11yHighlight extends Component {
  render() {
    return (
      <div className='a11y-highlight' role='textbox' tabIndex='0' aria-label={this.props.label || ''}>
        <Highlight>{this.props.children}</Highlight>
      </div>
    )
  }
}

export default A11yHighlight;
