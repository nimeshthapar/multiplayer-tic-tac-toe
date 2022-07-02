import { useRef } from 'react';
import Button from '../Button/Button';
import classes from './ModalInput.module.css';

type ModalFormProp = {
	type: string;
	placeholder: string;
	onClose: () => void;
	onEnterCode: (code: string) => void;
};

const ModalInput = ({
	type,
	placeholder,
	onClose,
	onEnterCode,
}: ModalFormProp) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const modalFormSubmitHandler = (e: any) => {
		e.preventDefault();
		let code = inputRef.current?.value ? inputRef.current?.value : '';
		onEnterCode(code);
	};
	return (
		<form onSubmit={modalFormSubmitHandler}>
			<div className={classes.input}>
				<input type={'text'} placeholder={placeholder} ref={inputRef} />
			</div>
			<div className={classes.action}>
				<Button title={type} type="submit" />
				<Button title={'CLOSE'} onClick={onClose} />
			</div>
		</form>
	);
};

export default ModalInput;
