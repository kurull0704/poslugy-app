import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import usePoslugyService from "../../services/PoslugyService";
import './registration-form.css';

const RegistrationForm = ({ active }) => {
	const { onLogInSubmit, onSignUpSubmit } = usePoslugyService();
	if (active === "login") {
		return (
			<div className="app-form">
				<h1>Login</h1>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							// console.log(JSON.stringify(values, null, 2));
							onLogInSubmit(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="add-form">
							<Field className="form__input" type="email" name="email" placeholder="Email" />
							<ErrorMessage name="email" component="div" />
							<Field className="form__input" type="password" name="password" placeholder="Password" />
							<ErrorMessage name="password" component="div" />
							<button className="btn button" type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>)
	} else if (active === "signup") {
		return (
			<div className="app-form">
				<h1 className="form__title">Registration</h1>
				<Formik
					initialValues={{ email: '', password: '', name: '', phone_number: '' }}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							// console.log(JSON.stringify(values, null, 2));
							onSignUpSubmit(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="add-form">
							<Field className="form__input" type="email" name="email" placeholder="Email" />
							<ErrorMessage name="email" component="div" />
							<Field className="form__input" type="password" name="password" placeholder="Password" />
							<ErrorMessage name="password" component="div" />
							<Field className="form__input" type="text" name="name" placeholder="Name" />
							<ErrorMessage name="name" component="div" />
							<Field className="form__input" type="tel" name="phone_number" placeholder="Phone" />
							<ErrorMessage name="phone_number" component="div" />
							<button className="btn button" type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>)
	}
}
export default RegistrationForm;