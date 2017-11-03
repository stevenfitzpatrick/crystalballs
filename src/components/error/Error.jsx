import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
	state = {
		error: false
	};

	componentDidCatch(error, info) {
		this.setState(({ error }) => ({ error: !error }));
	}

	render() {
		if (this.state.error) {
			<div>We have an error</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
