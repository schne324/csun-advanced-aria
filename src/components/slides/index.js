import React from 'react';
import Highlight from 'react-highlight';
import ToggleButton from '../examples/ToggleButton';
// images
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
        <li>ARIA is not necessary for simple / static web content with semantic HTML.</li>
      </ul>
      <Highlight className='xml'>
        {`<button type="submit">Submit</button>`}
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
      <ul>
        <li>Best solution is to use native button and link elements</li>
        <li>Quickly / easily fix legacy content</li>
        <li>No modifying HTML tag structure</li>
        <li>No modifying of CSS rules</li>
      </ul>
      <Highlight className='xml'>{'<button type="submit">Submit</button>\n<a href="/foo">Foo</a>'}</Highlight>
      <h3>The Fix (if you absolutely have to)</h3>
      <ul>
        <li>Add the roles ("button" and "link")</li>
        <li>Make them focusable with a keyboard (using "tabindex")</li>
        <li>Make them keyboard operable (pressing SPACE or ENTER for buttons, pressing ENTER for links)</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2>Result</h2>
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
      <h2>Is ARIA well supported?</h2>
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
      <h2>ARIA Best Practices</h2>
    </div>
  ),
  (
    <div className='better-worse'>
      <h3>Heading</h3>
      <h4>Better</h4>
      <Highlight className='xml'>{'<h2>About</h2>'}</Highlight>
      <h4>Worse</h4>
      <Highlight className='xml'>{'<div role="heading" aria-level="2">About</div>'}</Highlight>
    </div>
  ),
  (
    <div className='better-worse'>
      <h3>List</h3>
      <h4>Better</h4>
      <Highlight className='xml'>{`<ul>
  <li>One</li>
  <li>Two</li>
</ul>`}</Highlight>
      <h4>Worse</h4>
      <Highlight className='xml'>{`<div role="list">
  <div role="listitem">One</div>
  <div role="listitem">Two</div>
</div>`}</Highlight>
    </div>
  ),
  (
    <div className='better-worse'>
      <h3>Checkbox</h3>
      <h4>Better</h4>
      <Highlight className='xml'>{'<input type="checkbox" />'}</Highlight>
      <h4>Worse</h4>
      <Highlight className='xml'>{'<div role="checkbox" tabindex="0"></div>'}</Highlight>
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
    <div>
      <h2>Things to remember...</h2>
      <ul>
        <li>Role / States / Properties</li>
        <li>Label</li>
        <li>
          <span>Focusable / Keyboard operability</span>
          <ul>
            <li>Desktop web applications</li>
            <li>{"Don't forget about mobile!"}</li>
          </ul>
        </li>
        <li>For mobile - touch operability</li>
        <li>Follow the spec according to the role</li>
        <li>Color contrast</li>
        <li>
          <span>For custom controls:</span>
          <a target='_blank' href="https://w3c.github.io/aria-in-html/#checklist">Custom Control Accessible Development Checklist</a>
        </li>
      </ul>
    </div>
  ),

  // LIVE REGIONS
  (
    <div><h2>Live Regions</h2></div>
  ),
  (
    <div>
      <h3>What is a Live Region?</h3>
      <p>An ARIA Live Region is a tool that can notify screen readers of content changes.</p>
      <p>This allows for a completely customizable screen reader announcement <strong>without having to move focus!</strong></p>
    </div>
  ),
  (
    <div>
      <h3>Uses of Live Regions</h3>
      <ul>
        <li>real-time updates about remote parts of the page</li>
        <li>status updates</li>
        <li>announce time sensitive information</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Examples of Live Regions</h3>
      <ul>
        <li>Chat logs</li>
        <li>Server status updates (<span className="quote">connection lost</span>)</li>
        <li>Confirmation messages (<span className="quote">changes have been saved</span>)</li>
        <li>Progress indicators (<span className="quote">50% complete</span>)</li>
        <li>Sports score updates (<span className="quote">Detroit fumbles at the 1 yard line</span>)</li>
        <li>Weather alerts (<span className="quote">Winter storm warning in effect until 3am</span>)</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Notes on Live Regions</h3>
      <p>Live regions should be used sparingly as they can easily create a verbose experience for screen reader users.</p>
    </div>
  ),
  (
    <div>
      <h3>Live Region Playground</h3>
      <a target='_blank' href='http://schne324.github.io/live-region-playground/'>
        {'http://schne324.github.io/live-region-playground/'}
      </a>
    </div>
  ),
  (
    <div>
      <h2 className='larger'>Complex / Dynamic Widgets</h2>
    </div>
  ),
  // WIDGET: Toggle Buttons
  (
    <div>
      <h2>Toggle Buttons</h2>
      <a target='_blank' href='https://www.w3.org/TR/wai-aria-practices-1.1/#button'>WAI-ARIA Authoring Practices for Buttons</a>
    </div>
  ),
  (
    <div>
      <h3>What needs to happen?</h3>
      <ul>
        <li>Be keyboard operable (focusable and activatable)</li>
        <li>Pressed state toggled by activation</li>
      </ul>
      <p>NOTE: the label of a toggle button must not change when the state changes</p>
    </div>
  ),
  (
    <div>
      <h3>Keyboard Interaction</h3>
      <p><span className='key'>Space / Enter: </span> activates the button and toggles the pressed state</p>
    </div>
  ),
  (
    <div>
      <h3>Roles / States / Properties</h3>
      <ul>
        <li>
          <Highlight>{'<button /> or role="button"'}</Highlight>
        </li>
        <li>
          <Highlight>{'aria-pressed="true"'}</Highlight>
          <Highlight>{'aria-pressed="false"'}</Highlight>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Example</h3>
      <ToggleButton />
    </div>
  ),

  // WIDGET: Modal Dialogs
  (
    <div>
      <h2>Modal Dialogs</h2>
      <a target='_blank' href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal">WAI-ARIA Authoring Practices for Modal Dialogs</a>
    </div>
  ),
  (
    <div>
      <h3>What needs to happen?</h3>
      <ul>
        <li>
          <span>Dialog trigger is clicked (and modal is opened)...</span>
          <ul>
            <li>Focus shifted to modal dialog (authoring practices suggest the first focusable element within dialog)</li>
          </ul>
        </li>
        <li>
          <span>Dialog is closed...</span>
          <ul>
            <li>Return focus to the trigger (the element that opened the modal dialog)</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Keyboard Interaction</h3>
      <ul>
        <li>
          <span className='key'>Tab</span>
          <ul>
            <li>shift focus to the <strong>next element</strong> in the tab order within the dialog</li>
            <li>if focus is on last focusable element within the dialog, shift focus to the <strong>first element</strong> in the tab order within the dialog</li>
          </ul>
        </li>
        <li>
          <span className='key'>Shift + Tab</span>
          <ul>
            <li>shift focus the <strong>previous element</strong> in the tab order within the dialog</li>
            <li>if focus is on the first focusable element within the dialog, shift focus to the <strong>last element</strong> in the tab order within the dialog</li>
          </ul>
        </li>
        <li>
          <span className='key'>Escape</span>
          <ul>
            <li>close the dialog</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Roles / States / Properties</h3>
      <ul>
        <li><Highlight>{'role="dialog"'}</Highlight></li>
        <li>
          <Highlight>{'aria-label="Label / purpose of modal"'}</Highlight>
          <span>Or</span>
          <Highlight>{'aria-label="id-of-visible-dialog-title"'}</Highlight>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>{"Don't forget about aria-hidden!"}</h3>
      <ul>
        <li>Apply <span className='inline-code'>aria-hidden="true"</span> to all elements except for the modal itself</li>
        <li>This will prevent screen readers from being able to traverse outside of the modal</li>
      </ul>

    </div>
  ),
  (
    // TODO: Fix the pattern library modal example:
    // - move the modals outside of the role="main" so EVERYTHING is aria-hidden
    <div>
      <h3>Modal Dialog Example</h3>
      <a target="_blank" href="https://pattern-library.dequelabs.com/composites/modals">Deque Pattern Library Modal</a>
    </div>
  ),
  // WIDGET: Mega Menu
  (
    <div>
      <h2>Mega Menu</h2>
      <a target='_blank' href='https://www.w3.org/TR/wai-aria-practices-1.1/#menu'>WAI-ARIA Authoring Practices for Modal Dialogs</a>
    </div>
  ),
  (
    <div>
      <h3>What needs to happen?</h3>
      <ul>
        <li>When a submenu is opened, focus should be shifted to the first menu item</li>
        <li>When a submenu is closed, focus should be shifted to the parent menu item that triggered the opening of the submenu</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Keyboard Interaction</h3>
    </div>
  ),
  (
    <div>
      <h4>Enter</h4>
      <ul>
        <li>If current item has a submenu, opens submenu and shifts focus to first item</li>
        <li>If current item does not have a submenu, activates the focused menu item</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h4>Down Arrow</h4>
      <ul>
        <li>If focus is on a menu item in a menubar, opens submenu and shifts focus to first item</li>
        <li>If focus is within a menu, shifts focus to the next menu item (optionally circular)</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h4>Up Arrow</h4>
      <ul>
        <li>If focus is within a menu, shifts focus to the previous menu item (optionally circular)</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h4>Right Arrow</h4>
      <ul>
        <li>If focus on a menu in a menubar, shifts focus to the next item (optionally circular)</li>
        <li>If focus is within a menu and on a menu item that has a submenu, opens submenu and shifts focus to first item</li>
        <li>
          <span>If focus is within a menu and on a menu item that does not have a submenu:</span>
          <ul>
            <li>closes submenu</li>
            <li>moves focus to next menuitem in the menubar</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h4>Left Arrow</h4>
      <ul>
        <li>If focus on a menu in a menubar, shifts focus to the previous item (optionally circular)</li>
        <li>If focus is on a submenu of an item in a menu, closes the submenu and shifts focus to the parent menuitem</li>
        <li>
          <span>If focus is within a submenu of a menubar:</span>
          <ul>
            <li>closes submenu</li>
            <li>moves focus to previous menuitem in the menubar</li>
          </ul>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h4>Escape</h4>
      <p>Closes the menu and returns focus to the parent menuitem</p>
    </div>
  ),
  (
    <div>
      <p>Try to avoid dual purpose menu items - those that both perform an action AND trigger a submenu</p>
    </div>
  ),
  (
    <div>
      <h3>Roles / States / Properties</h3>
      <ul className='flex-list'>
        <li className='flexr'><Highlight className='js'>{'role="menubar"'}</Highlight>(on the top-level menu)</li>
        <li className='flexr'><Highlight className='js'>{'role="menuitem"'}</Highlight>(on the child menu items)</li>
        <li className='flexr'><Highlight className='js'>{'aria-haspopup="true"'}</Highlight>(if it has a submenu)</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Mega Menu Example</h3>
      <a target='_blank' href='http://mattisner.com/a11y-examples/menu/'>
        {'http://mattisner.com/a11y-examples/menu/'}
      </a>
    </div>
  ),

  // WIDGET: Tab panel (https://pattern-library.dequelabs.com/components/fields#code-samples)
  (
    <div>
      <h2>Tab Panels</h2>
      <a target='_blank' href='https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel'>
        WAI-ARIA Authoring Practices for Tabs
      </a>
    </div>
  ),
  (
    <div>
      <h3>Keyboard Interaction</h3>
      <ul>
        <li>
          <strong>Left Arrow:</strong> shifts focus to the previous tab. If focus is on first tab, shift focus to last tab (circular)
        </li>
        <li>
          <strong>Right Arrow:</strong> shifts focus to the next tab. If focus is on the last tab, shift focus to the first tab (circular)
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Roles / States / Properties</h3>
      <ul>
        <li>
          <span className='inline-code'>{'role="tablist"'}</span>
          <span>
          on the parent container of the tab elements.
          </span>
        </li>
        <li>
          <span className='inline-code'>{'role="tab"'}</span>
          <span>on the tab element within the <span className='inline-code'>{'role="tablist"'}</span> container</span>
        </li>
        <li>
          <span className='inline-code'>{'role="tabpanel"'}</span>
          <span>On each of the panel elements</span>
        </li>
        <li>
          <span className='inline-code'>aria-controls</span>
          <span>{'on the tab element referring to it\'s panel'}</span>
        </li>
        <li>
          <span className='inline-code'>{'aria-selected="true"'}</span>
          <span>on the selected tab, </span>
          <span className='inline-code'>{'aria-selected="false"'}</span>
          <span>on all other tabs</span>
        </li>
        <li>
          <span>Each <span className='inline-code'>{'role="tabpanel"'}</span> element needs
            <span className='inline-code'>aria-labelledby</span> {'referring to it\'s tab element'}
          </span>
        </li>
      </ul>
    </div>
  ),
  (
    <div>
      <h3>Example Markup</h3>
      <div role='textbox' tabIndex='0' aria-readonly='true'>
        <Highlight>
        {`<ul role="tablist">
  <li id="tab1" aria-selected="true" aria-controls="panel1" role="tab" tabindex="0">Tab 1</li>
  <li id="tab2" aria-selected="false" aria-controls="panel2" role="tab" tabindex="-1">Tab 2</li>
</ul>
<div id="panel1" aria-labelledby="tab1" role="tabpanel" aria-hidden="false">Panel 1 content...</div>
<div id="panel2" aria-labelledby="tab2" role="tabpanel" aria-hidden="true">Panel 2 content...</div>`}
        </Highlight>
      </div>
    </div>
  ),
  (
    <div>
      <h3>Tab Example</h3>
      <a target='_blank' href="https://pattern-library.dequelabs.com/components/fields#code-samples">Deque Pattern Library Tabs</a>
      <p>Which uses the <a target='_blank' href='https://github.com/schne324/a11y-tabs'>A11y Tabs Plugin</a></p>
    </div>
  )
];

export default slides;
export const length = slides.length;
