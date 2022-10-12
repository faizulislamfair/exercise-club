import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
    return (
        <div>

            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> EXERCISE-CLUB</h1>
            <h2>Select your exercise item!</h2>
        </div>
    );
};

export default Header;