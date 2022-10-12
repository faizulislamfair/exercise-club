import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, img, time, handleAddToCalculation } = props;

    return (
        <div className='card'>
            <img className='img-fluid' src={img} alt="" />
            <h4>{name}</h4>
            <h5>Time Required: {time}s</h5>
            <button onClick={() => handleAddToCalculation(props)}>Add to List</button>
        </div>
    );
};

export default Card;