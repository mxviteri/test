import React from 'react'
import './index.css'

const UserDetails = (props) => {
    if (props.show) {
        return (
            <div id="userDetails">
                <p>{props.user.email}</p>
            </div>
        )
    } else {
        return null
    }
}

export default UserDetails