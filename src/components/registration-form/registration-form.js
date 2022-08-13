import { Component } from 'react'

import './registration-form.css';

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: "",
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.name.length < 3 || !this.state.salary) return;
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: ''
		})
	}

	render() {

		const { name, salary } = this.state

		return (
			<div className="app-add-form">
				<h3>Registration</h3>
				<form
					className="add-form"
					onSubmit={this.onSubmit}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Имя"
						name='name'
						value={name}
						onChange={this.onValueChange} />
					<input type="email"
						className="form-control new-post-label"
						placeholder="Почта"
						name='email'
						value={salary}
						onChange={this.onValueChange} />
					<input type="tel"
						className="form-control new-post-label"
						placeholder="Телефон"
						name='phone'
						value={salary}
						onChange={this.onValueChange} />
					<input type="text"
						className="form-control new-post-label"
						placeholder="Пароль"
						name='password'
						value={salary}
						onChange={this.onValueChange} />
					<input type="text"
						className="form-control new-post-label"
						placeholder="Пароль"
						name='password'
						value={salary}
						onChange={this.onValueChange} />
					<div className="registration-btn">
						<button type="submit"
							className="btn btn-outline-light">Registration
						</button>
					</div>

				</form>
			</div>
		)
	}
}

export default RegistrationForm;