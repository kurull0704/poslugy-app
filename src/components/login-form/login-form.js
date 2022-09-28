import '../registration-form/registration-form.css';

const LoginForm = () => {
	return (
		<div className="app-form">
			<h3>Login</h3>
			<form
				className="add-form">
				<input type="email"
					className="form__input"
					placeholder="Email"
					name='email' />
				<input type="text"
					className="form__input"
					placeholder="Password"
					name='password' />
				<div className="registration-btn">
					<button type="submit"
						className="btn button" >Login
					</button>
				</div>
			</form>
		</div>
	)
}

export default LoginForm;