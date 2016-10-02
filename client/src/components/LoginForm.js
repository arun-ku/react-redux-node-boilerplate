import React, { Component } from 'react';
import InputField from './InputField';


class LoginForm extends Component {
	render() {
		var { onChange, handleSubmit, user } = this.props;
		return (
			<div>
				<h3 className="form-heading">Login</h3>
        <form onSubmit={handleSubmit}>
					<InputField className="input-fields" value={user.email} onChange={onChange} name="email" type="email" placeholder="Enter your Email" required/>
					<InputField className="input-fields" value={user.password} onChange={onChange} name="password" type="password" placeholder="Enter a password" required/>
					<input className="submit-button" type="submit" value="Login" />
				</form>
      </div>
		);
	}
}

export default LoginForm;
