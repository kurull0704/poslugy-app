import { useState } from 'react'
import Header from '../header/Header';
import Modal from '../modal/Modal';
import RegistrationForm from '../registration-form/registration-form';

import './app.css';
import '../../normalize.css'


const App = () => {
	const [modalActive, setModalActive] = useState(null)
	return (
		<div className="app">
			<Header active={modalActive} setActive={setModalActive} />
			<Modal active={modalActive} setActive={setModalActive} >
				<RegistrationForm active={modalActive} />
			</Modal>

		</div>
	)
}

export default App;