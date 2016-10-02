import React, { Component } from 'react';

require('../styles/style.scss');

class InputField extends Component {
	render() {
		var { type, name, className, value, onChange, placeholder } = this.props;
		return (
			<input className={className} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
		);
	}
}

export default InputField;
