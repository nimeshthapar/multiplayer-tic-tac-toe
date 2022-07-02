import { useState } from 'react';
import classes from './Cell.module.css';

type CellProp = {
	content: string;
	onClick: (row: number, idx: number) => void;
	right: boolean;
	bottom: boolean;
	row: number;
	turn: string;
	index: number;
};

const Cell = ({
	content,
	onClick,
	right,
	bottom,
	row,
	index,
	turn,
}: CellProp) => {
	const [displayContent, setDisplayContent] = useState(content);

	const cellClasses =
		`${classes.cell} ` +
		`${right ? classes.right : ''} ` +
		`${bottom ? classes.bottom : ''}`;

	const clickCellHandler = () => {
		setDisplayContent(turn);
		onClick(row, index);
	};

	return (
		<div className={cellClasses} onClick={clickCellHandler}>
			{displayContent}
		</div>
	);
};

export default Cell;
