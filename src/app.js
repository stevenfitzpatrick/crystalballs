import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

import ErrorBoundary from '../src/components/error/Error';

class App extends Component {
	render() {
		return [<li key="A">First item</li>, <li key="B">Second item</li>, <li key="C">Third item</li>];
	}
}

render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
	document.getElementById('app')
);

export default App;
