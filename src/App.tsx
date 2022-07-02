import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import ModalInput from './Components/ModalInputs/ModalInput';

function App() {
	const [showModal, setShowModal] = useState('');
	const [roomCode, setRoomCode] = useState('');

	const closeModalHandler = () => {
		setShowModal('');
	};

	const onEnterCode = (code: string) => {
		setRoomCode(code);
		setShowModal('');
	};

	return (
		<div className="App">
			{showModal && (
				<Modal onClose={closeModalHandler}>
					<ModalInput
						type={showModal}
						placeholder={
							showModal === 'JOIN'
								? 'Enter Room Code'
								: 'Create Room Code'
						}
						onClose={closeModalHandler}
						onEnterCode={onEnterCode}
					/>
				</Modal>
			)}
			<h1 className="title">TIC TAC TOE</h1>
			{!roomCode && (
				<div className="join-create-actions">
					<Button
						title="JOIN"
						onClick={() => {
							setShowModal('JOIN');
						}}
					/>
					<Button
						title="CREATE"
						onClick={() => {
							setShowModal('CREATE');
						}}
					/>
				</div>
			)}
			{roomCode && <Board />}
		</div>
	);
}

export default App;
