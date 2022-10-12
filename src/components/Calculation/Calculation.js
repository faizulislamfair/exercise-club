import React from 'react';
import './Calculation.css';

const Calculation = (props) => {
    const { breakTime10, breakTime20, breakTime30, breakTime40, breakTime50 } = props;

    return (
        <div className='calculation'>
            <h2>Faizul Islam</h2>
            <h3>Rajshahi, Bangladesh</h3>
            <div className='info'>
                <div className='details'>
                    <h4>68kg <br></br>Weight</h4>
                </div>
                <div className='details'>
                    <h4>5.7 <br></br>Height</h4>
                </div>
                <div className='details'>
                    <h4>23 <br></br>Age</h4>
                </div>
            </div>

            <h3>Add A Break</h3>
            <div className='break'>
                <button onClick={breakTime10}>10s</button>
                <button onClick={breakTime20}>20s</button>
                <button onClick={breakTime30}>30s</button>
                <button onClick={breakTime40}>40s</button>
                <button onClick={breakTime50}>50s</button>
            </div>

        </div>
    );
};

export default Calculation;