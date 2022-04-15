import React from "react";

const Word = ({ selectedWord, rightLetters, isPopup }) => {
    return (
        <div className='wrong-letter-container'>
            {isPopup && <p>The right word is {selectedWord}</p>}
            {!isPopup && rightLetters.length > 0 && <p>Right Letters</p>}
            {!isPopup && rightLetters.map((rightLetter, i) => <span className='letter' key={i}>{rightLetter}</span>)}
        </div>
    );
}

export default Word;