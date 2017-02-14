import React from 'react';
import Highlight from 'react-highlight';
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
      <h2>Without ARIA</h2>
      <ul>
        <li>Not necessary for simple / static web content with semantic HTML.</li>
        <li>
          <span>HTML was released in 1993...</span>
          <ul>
            <li>was designed to help us distribute documents whose content was primarily static</li>
            <li>was NOT designed to form the basis of interactive applications</li>
          </ul>
        </li>
      </ul>
      <Highlight className='xml'>
        {`<input type="submit" value="Submit" />`}
      </Highlight>
    </div>
  ),
  (
    <div>
      <h2>With ARIA</h2>
      <p>We can provide attributes/values that are consumable by Assistive Technology to convey information about:</p>
      <ul>
        <li>Widgets</li>
        <li>Structures</li>
        <li>Behaviors</li>
      </ul>
      <p>ARIA is essential for interactive / dynamic web applications.</p>
      <Highlight className='xml'>
        {`<input aria-labelledby="label-1 label-2" />`}
      </Highlight>
    </div>
  ),
  (
    <div>
      <h2>Challenging Situations</h2>
      <ul>
        <li>Dynamic content that updates in remote parts of the page</li>
        <li>Interactive widgets that alter states of their components</li>
        <li>Datepickers</li>
        <li>Carousels</li>
        <li>Custom controls (radio and checkbox)</li>
        <li>The list goes on...</li>
      </ul>
      <p>Thanks to JavaScript and ARIA, all of these challenges can be conquered.</p>
    </div>
  ),
  (
    <div className='rsp'>
      <h2>Roles / State / Properties</h2>
      <h3>Role: </h3>
      <p>what the element is</p>
      <Highlight>{`role="checkbox"`}</Highlight>
      <h3>State: </h3>
      <p>the current state of the element</p>
      <Highlight>{'aria-checked="true"'}</Highlight>
      <h3>Property: </h3>
      <p>essential attributes of the nature of the element (less likely to change than states)</p>
      <Highlight>{'aria-describedby="checkbox-help"'}</Highlight>
    </div>
  )
];

export default slides;
export const length = slides.length;
