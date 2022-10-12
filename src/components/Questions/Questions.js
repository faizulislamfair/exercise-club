import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <h3>Question - Answer</h3>

            <h4>1. How does React Work?</h4>
            <h4>Answer: ReactJS is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. React allows us to effectively re-construct out DOM in JavaScript and push only those changes to the DOM which have actually occurred. The DOM presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.</h4>
            <h4>2. What are the differences between Props and State?</h4>
            <h4>Answer: Props are immutable that is their content cannot be changed once assigned but State is mutable and its value can be changed as per requirement. Props are set by event handlers that is they are completely managed by component itself but State is set by parent components.</h4>
            <h4>3. What are the uses of useEffect except for api data load?</h4>
            <h4>Answer: The useEffect hook allows us to perform side effects in components. Except for api data load, useEffect updates the DOM, and timers. useEffect runs on every render that means when the count changes, a render happens, which then triggers another effect.</h4>

        </div>
    );
};

export default Questions;