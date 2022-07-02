import React from 'react';
import classes from './Button.module.css';

type ButtonProp = {
	title: string;
	onClick?: () => void;
	black?: boolean;
	type?: 'submit' | 'button';
};

const Button = ({ title, onClick, black, type }: ButtonProp) => {
	return (
		<button
			className={
				!black ? classes.btn : `${classes.btn} ${classes['black-btn']}`
			}
			onClick={onClick}
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
