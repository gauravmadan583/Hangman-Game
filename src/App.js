import React, { useEffect, useState } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

function App() {
	const words = ['infosys', 'wipro'];
	const [playable, setPlayable] = useState(false);
	const [selectedWord, setSelectedWord] = useState('');
	const [rightLetters, setRightLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [isPopup, setIsPopup] = useState(true);
	const [error, setError] = useState('');
	const [showNotification, setShowNotification] = useState(false);

	const startNewGame = () => {
		setPlayable(true);
		const idx = Math.floor(Math.random() * words.length);
		setSelectedWord(words[idx]);
		setRightLetters([]);
		setWrongLetters([]);
		setIsPopup(false);
		setError('');
		setShowNotification(false);
	}

	const gameFinished = () => {
		var gamewon = true;
		for(var i=0;i<selectedWord.length;i++){
			if(!rightLetters.includes(selectedWord[i])){
				gamewon = false;
				break;
			}
		}
		if (gamewon) {
			setPlayable(false);
			setShowNotification(true);
			setError('Game won!');
			setIsPopup(true);
		}else{
			console.log(rightLetters);
		}

		if (wrongLetters.length === 5) {
			setPlayable(false);
			setShowNotification(true);
			setError('Game lost!');
			setIsPopup(true);
		}
	}
	useEffect(() => {
		const handleKeydown = event => {
			const { key, keyCode } = event;

			if (playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				if (selectedWord.includes(letter)) {
					if (!rightLetters.includes(letter)) {
						setRightLetters(currentLetters => [...currentLetters, letter]);
					} else {
						setShowNotification(true);
						setError('Letter ' + letter + ' already chosen.');
					}
				} else {
					if (!wrongLetters.includes(letter)) {
						setWrongLetters(currentLetters => [...currentLetters, letter]);
					} else {
						setShowNotification(true);
						setError('Letter ' + letter + ' already chosen.');
					}
				}
			}
		}
		window.addEventListener('keydown', handleKeydown);

		return () => window.removeEventListener('keydown', handleKeydown);
	}, [rightLetters, wrongLetters, playable, selectedWord]);


	useEffect(() => {
		gameFinished();
	}, [rightLetters, wrongLetters, gameFinished]);
	return (
		<div className="App">
			<Header />
			<div className='game-container'>
				<Figure errors={wrongLetters.length} />
				<WrongLetters wrongLetters={wrongLetters} />
				<Word selectedWord={selectedWord} rightLetters={rightLetters} isPopup={isPopup} />
			</div>
			<Notification showNotification={showNotification} setShowNotification={setShowNotification} error={error} />
			<Popup isPopup={isPopup} startNewGame={startNewGame} />
		</div>
	);
}
export default App;