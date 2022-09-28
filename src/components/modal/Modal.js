import React from "react";
import './modal.css'

const Modal = ({ active, setActive, children }) => {
	return (
		<div className={active !== null ? "modal active" : "modal"} onClick={() => setActive(null)}>
			<div className={active !== null ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default Modal;