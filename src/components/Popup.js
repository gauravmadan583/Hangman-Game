import React from 'react';

const Popup = ({ isPopup, startNewGame }) => {
    
    return (
        <>
            {isPopup &&
                <div className='popup'>
                    <button onClick={startNewGame}>
                        Start New Game
                    </button>
                </div>
            }
        </>
    )
}

export default Popup