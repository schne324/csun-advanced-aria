import React from 'react';
import logo from '../../img/deque-logo-white.png';

const slides = [
  // title slide
  (
    <div>
      <div className='logo'>
        <img src={logo} alt='Deque' width={'110'} />
      </div>
      <h1>Advanced ARIA</h1>
      <div className='by-who'>
        <p>By Harris Schneiderman</p>
        <p>Web Application Developer, Deque Systems</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2>ARIA</h2>
      <ul>
        <li>Not necessary for simple / static web content with semantic HTML</li>
        <li>Essential for interactive / dynamic web applications</li>
        <li>HTML attributes framework</li>
      </ul>
      <pre>
        <code>
          {`<input aria-labelledby="label-1 label-2" />`}
        </code>
      </pre>
    </div>
  ),
  (
    <div>
      <h2>Roles / State / Properties</h2>
      <h3>Role</h3>
      <p>what the element is</p>
      <pre><code>{`role="checkbox"`}</code></pre>
      <h3>State</h3>
      <p>the current state of the element</p>
      <pre><code>{'aria-checked="true"'}</code></pre>
      <h3>Property</h3>
      <p>essential attributes of the nature of the element</p>
      <pre><code>{'aria-describedby="checkbox-help"'}</code></pre>
    </div>
  )
];

export default slides;
export const length = slides.length;
