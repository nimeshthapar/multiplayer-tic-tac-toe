import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

type BackDropProp = {
	onClose?: () => void;
};

const BackDrop = ({ onClose }: BackDropProp) => {
	return <div className={classes.backdrop} onClick={onClose} />;
};

type ModalOverlayProp = {
	children?: ReactNode;
};

const ModalOverlay = ({ children }: ModalOverlayProp) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

type ModalProp = {
	children?: ReactNode;
	onClose: () => void;
};

const portalEL = document.getElementById('overlay') as HTMLElement;

const Modal = ({ children, onClose }: ModalProp) => {
	return (
		<>
			{ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalEL)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalEL
			)}
		</>
	);
};

export default Modal;
