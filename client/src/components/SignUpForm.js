import React, { Component } from 'react';
import InputField from './InputField';


class SignUpForm extends Component {
	render() {
    var { onChange, handleSubmit, user } = this.props;
		return (
			<div>
				<h3 className="form-heading">Register</h3>
        <form onSubmit={handleSubmit}>
					<InputField className="input-fields" onChange={onChange} value={user.fullName} name="fullName" type="text" placeholder="Enter your full name" required />
					<InputField className="input-fields" onChange={onChange} value={user.email} name="email" type="email" placeholder="Enter your Email" required />
					<InputField className="input-fields" onChange={onChange} value={user.password} name="password" type="password" placeholder="Enter a password" required />
					<InputField className="input-fields" onChange={onChange} value={user.confirmPassword} name="confirmPassword" type="password" placeholder="Enter password again" />
					<input className="submit-button" type="submit" value="Signup" />
				</form>
      </div>
		);
	}
}

export default SignUpForm;
