import React from 'react';

const WrongLetters = ({ wrongLetters }) => {

    return (
        <div className='wrong-letter-container'>
            {wrongLetters.length > 0 && <p>Wrong Letters</p>}
            {wrongLetters.length < 7 && wrongLetters.map((wrongLetter, i) => <span className='letter' key={i}>{wrongLetter}</span>)}
        </div>
    );
}

export default WrongLetters;