import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

// the hydrate function of ReactDOM preserves the server-rendered markup
// and attached back the events handlers
// summary for the procedure of server-side rendering:
// In express.js, css styles are generated using material-ui's ServerStyleSheets,
// and then use renderToString to generate markup which renders components
// specific to the route requested. The markup and css will then passed to
// template.js to generate a new template, which will then be passed back to
// App.js. In App.js, the server-side injected CSS will be removed. Finally,
// in the Main.js, the view rendered by client-side will be hydrated and
// replaced with the server-side markup and the event handlers will be
// attached.

hydrate (<App />, document.getElementById('root'));