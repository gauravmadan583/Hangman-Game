import React from "react";

const Word = ({ selectedWord, rightLetters, isPopup }) => {
    return (
        <div className='wrong-letter-container'>
            {isPopup && <h2>The right word is {selectedWord}</h2>}
            {!isPopup && rightLetters.length > 0 && <h2>Right Letters</h2>}
            {!isPopup && rightLetters.map((rightLetter, i) => <span className='letter' key={i}>{rightLetter}</span>)}
        </div>
    );
}

export default Word;