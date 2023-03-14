import React, { Component, useEffect, useState } from "react";
import List from './List';
import quizJson from "./quiz.json";

const Test = () => {
    const [cards, setCards] = useState(quizJson.quiz_list[0]);
    const [number, setNumber] = useState(0);
    const randomCard = () => {
        setCards(quizJson.quiz_list[number]) 
    }
    const generateNumber = () => {
        if (number > quizJson.quiz_list) {
            setNumber(number + 1);
            randomCard();
        }
    }
    const previousCard = () => {
        if (number > 0) {
            setNumber(number - 1);
            randomCard();
        }
    }
    const [input, setInput] = useState('');
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className='container'>
            <List cards={cards} input={input} handleChange={changeInput}/>
            <button onClick={previousCard}> ⭠ </button>
            <button onClick={generateNumber}> → </button>
        </div>
    )
}

export default Test;