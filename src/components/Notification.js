import React from 'react'

const Notification = ({showNotification, setShowNotification, error}) => {
    return (
        <div className='notification-container show'>
            {showNotification && <div>{error}</div>}
        </div>
    )
}

export default Notification