import { useState } from 'react';
import Button from '../Button/Button';
import Cell from '../Cell/Cell';
import classes from './Board.module.css';

const boardMap = [
	{ bottom: true, right: true },
	{ bottom: true, right: true },
	{ bottom: true, right: false },
	{ bottom: true, right: true },
	{ bottom: true, right: true },
	{ bottom: true, right: false },
	{ right: true, bottom: false },
	{ right: true, bottom: false },
	{ right: false, bottom: false },
];

const board: string[][] = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];

const Board = () => {
	const [turn, setTurn] = useState('O');
	const [won, setWon] = useState('');

	const changeBoardMapContentHandler = (row: number, idx: number) => {
		board[row][idx] = turn;

		if (board[0][0] === board[0][1] && board[0][1] === board[0][2])
			setWon(board[0][0]);

		if (board[1][0] === board[1][1] && board[1][1] === board[1][2])
			setWon(board[1][0]);

		if (board[2][0] === board[2][1] && board[2][1] === board[2][2])
			setWon(board[2][0]);

		if (board[0][0] === board[1][0] && board[1][0] === board[2][0])
			setWon(board[0][0]);

		if (board[0][1] === board[1][1] && board[1][0] === board[2][1])
			setWon(board[0][1]);

		if (board[0][2] === board[1][2] && board[1][2] === board[2][2])
			setWon(board[0][2]);

		if (board[0][0] === board[1][1] && board[1][1] === board[2][2])
			setWon(board[0][0]);

		if (board[0][2] === board[1][1] && board[1][1] === board[2][0])
			setWon(board[0][2]);

		setTurn((prev) => (prev === 'O' ? 'X' : 'O'));
	};

	return (
		<div>
			<div className={classes.row}>
				{boardMap.slice(0, 3).map((c, i) => (
					<Cell
						key={i}
						content={''}
						bottom={c.bottom}
						right={c.right}
						onClick={changeBoardMapContentHandler}
						index={i}
						row={0}
						turn={turn}
					/>
				))}
			</div>
			<div className={classes.row}>
				{boardMap.slice(3, 6).map((c, i) => (
					<Cell
						key={3 + i}
						content={''}
						bottom={c.bottom}
						right={c.right}
						onClick={changeBoardMapContentHandler}
						index={i}
						row={1}
						turn={turn}
					/>
				))}
			</div>
			<div className={classes.row}>
				{boardMap.slice(6, 9).map((c, i) => (
					<Cell
						key={6 + i}
						content={''}
						bottom={c.bottom}
						right={c.right}
						onClick={changeBoardMapContentHandler}
						index={i}
						row={2}
						turn={turn}
					/>
				))}
			</div>
			{!won && <h1 className={classes.display}>{turn}'s turns</h1>}
			{won && <h1 className={classes.display}>Player {won} Wins</h1>}
			<div className={classes.center}>
				{won && <Button title="RESET" />}
			</div>
		</div>
	);
};

export default Board;
