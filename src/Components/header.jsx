import React from 'react';

import User from './user.jsx';

const Header= () => {
    console.log('header');

    return (
        <div className='header'>
            <h1>Medication Tracker</h1>
            Logged in: <User />
            <hr/>
        </div>
    );
}

export default Header;