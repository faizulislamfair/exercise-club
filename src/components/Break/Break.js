import React from 'react';
import './Break.css';

const Break = () => {

    const getBreakTime = localStorage.getItem('breakTime');


    return (
        <div>
            <h4 className='breaks'>Break Time: <span id='break-time'>{getBreakTime}</span> Seconds</h4>

        </div>
    );
};

export default Break;