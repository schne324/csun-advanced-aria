import React from 'react';
import Highlight from 'react-highlight';
import logo from '../../img/deque-logo-white.png';
import nvda from '../../img/NVDA.jpg';
import jaws from '../../img/jaws.jpg';
import voiceOver from '../../img/voice-over.png';

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
        <p className="offscreen">Use arrow keys to navigate through slides</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2>Without ARIA</h2>
      <ul>
        <li>
          <span>HTML was released in 1993...</span>
          <ul>
            <li>was designed to help us distribute documents whose content was primarily static</li>
            <li>was NOT designed to form the basis of interactive applications</li>
          </ul>
        </li>
        <li>Not necessary for simple / static web content with semantic HTML.</li>
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
    <div className='rsp'>
      <h2>Roles / States / Properties</h2>
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
  ),
  (
    <div>
      <h2>Reality</h2>
      <p>In the real world many websites are not designed with acessibility in mind.</p>
      <Highlight className='xml'>
      {`<div class="sumit-button">Submit</div>\n<span class="link" onclick="location.href='/foo'">Foo</span>`}
      </Highlight>
      <p className="foot-note">Example of poorly coded button and link elements</p>
    </div>
  ),
  (
    <div>
      <h2>ARIA to the Rescue</h2>
      <p>For elements as simple as links and buttons, the best solution is to use real button and link elements.
      However, to fix legacy content and to avoid modifying HTML tag structure / CSS rules, ARIA and JavaScript can save the day.
      </p>
      <Highlight className='xml'>{'<button type="submit">Submit</button>\n<a href="/foo">Foo</a>'}</Highlight>
      <h3>The Fix</h3>
      <ul>
        <li>Add the roles ("button" and "link")</li>
        <li>Make them focusable with a keyboard (using "tabindex")</li>
        <li>Make them keyboard operable (pressing SPACE or ENTER for buttons, pressing ENTER for links)</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Result</h3>
      <Highlight className='xml'>
      {
        `<div role="button" tabindex="0" class="sumit-button">Submit</div>\n` +
        `<span role="link" tabindex="0" class="link" onclick="location.href='/foo'">Foo</span>`
      }
      </Highlight>
      <Highlight className='javascript'>
      {`button.addEventListener('keydown', function (e) {
  // if ENTER or SPACE was pressed
  if (e.which === 13 || e.which === 32) {
    e.target.click();
  }
});

link.addEventListener('keydown', function (e) {
  // if ENTER was pressed
  if (e.which === 13) {
    e.target.click();
  }
});`}
      </Highlight>
    </div>
  ),
  (
    <div>
      <h2>Is it well supported?</h2>
      <p>Modern screen readers have excellent WAI-ARIA support.</p>
      <ul className='flexr at-images'>
        <li><img src={nvda} alt='NVDA' /></li>
        <li><img src={jaws} alt='Freedom Scientific. JAWS for Windows' /></li>
        <li><img src={voiceOver} alt='VoiceOver'/></li>
      </ul>
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
  )
];

export default slides;
export const length = slides.length;
