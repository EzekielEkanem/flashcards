import React, { Component, useEffect, useState } from "react";
import List from './List';
import quizJson from "./quiz.json";

const Quiz = () => {
    const [cards, setCards] = useState(quizJson.quiz_list[0]);
    const [number, setNumber] = useState(1);
    const [nextEnd, setNextEnd] = useState(true);
    const [prevEnd, setPrevEnd] = useState(false);
    const randomCard = () => {
        setCards(quizJson.quiz_list[number]) 
    }
    const generateNumber = () => {
        setPrevEnd(true)
        setNumber(number + 1);
    }
    const showNextCard = () => {
        setInput('');
        if (number < (quizJson.quiz_list.length - 1)) {
            generateNumber();
            randomCard();
        } 
        else {
            setNextEnd(false)
        }
    }
    const previousCard = () => {
        setNextEnd(true)
        setNumber(number - 1);
    }
    const showPreviousCard = () => {
        setInput('');
        if (number > 0) {
            previousCard();
            randomCard();
        } 
        else {
            setPrevEnd(false)
            
        }
    }
    const [input, setInput] = useState('');
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const shuffle = () => {
        let currentIndex = quizJson.quiz_list.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex) + 1;
            currentIndex--;
            [quizJson.quiz_list[currentIndex], quizJson.quiz_list[randomIndex]] = [
                quizJson.quiz_list[randomIndex], quizJson.quiz_list[currentIndex]];
        }
        return quizJson.quiz_list;
    }
    return (
        <div className='container'>
            <List cards={cards} input={input} handleChange={changeInput}/>
            <button disabled={!prevEnd} onClick={showPreviousCard}> ⭠ </button>
            <button disabled={!nextEnd} onClick={showNextCard}> → </button>
            <button onClick={shuffle}>Shuffle Cards</button>
        </div>
    )
}

export default Quiz;