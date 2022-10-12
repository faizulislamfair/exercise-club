import React, { useEffect, useState } from 'react';
import './Cards.css';
import Card from '../Card/Card';
import Calculation from '../Calculation/Calculation';
import Break from './../Break/Break';
import Toast from '../Toast/Toast'


const Cards = () => {
    const [cards, setCards] = useState([]);

    const [calculations, setCalculations] = useState(0);

    const [breaks, setBreaks] = useState();

    const breakTime10 = () => {
        const newBreak = 10;
        setBreaks(newBreak);
        localStorage.setItem('breakTime', newBreak);
    }
    const breakTime20 = () => {
        const newBreak = 20;
        setBreaks(newBreak);
        localStorage.setItem('breakTime', newBreak);
    }
    const breakTime30 = () => {
        const newBreak = 30;
        setBreaks(newBreak);
        localStorage.setItem('breakTime', newBreak);
    }
    const breakTime40 = () => {
        const newBreak = 40;
        setBreaks(newBreak);
        localStorage.setItem('breakTime', newBreak);
    }
    const breakTime50 = () => {
        const newBreak = 50;
        setBreaks(newBreak);
        localStorage.setItem('breakTime', newBreak);
    }

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])



    const handleAddToCalculation = (card) => {
        //console.log(card);
        const newCalculation = calculations + card.time;
        setCalculations(newCalculation);
        console.log(newCalculation);
    }


    return (
        <div className='main-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        img={card.img}
                        name={card.name}
                        time={card.time}
                        handleAddToCalculation={handleAddToCalculation}
                    ></Card>)
                }

            </div>
            <div className='exercise-calculation-container'>
                <Calculation
                    breakTime10={breakTime10}
                    breakTime20={breakTime20}
                    breakTime30={breakTime30}
                    breakTime40={breakTime40}
                    breakTime50={breakTime50}
                ></Calculation>
                <h3>Exercise Details</h3>
                <h4 className='exercise'>Exercise Time: {calculations} Seconds</h4>
                <Break breaks={breaks}></Break>
                <Toast></Toast>
            </div>
        </div>
    );
};

export default Cards;