import React, { Component, useEffect, useState } from "react";
import Quiz from './Quiz';
import List from './List';

const Event = ({ card, input, handleChange }) => {
    const [flip, setFlip] = useState(false);
    const [checkAnswer, setCheckAnswer] = useState("");
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [storeStreak, setStoreStreak] = useState(0);
    const onCheckAnswer = () => {
        if (flip == false) {
            if (card.answer.includes(input.toLowerCase())) {
                setCheckAnswer("correct")
                setCorrectGuesses(correctGuesses + 1)
            }
            else {
                if (storeStreak < correctGuesses) {
                    setStoreStreak(correctGuesses)
                }
                setCorrectGuesses(0)
                setCheckAnswer("wrong")
            }
        }
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setCheckAnswer("");
        onCheckAnswer();
    }
    return (
        <div>
            <div>
                <p>Current Streak: {correctGuesses}, Longest Streak: {storeStreak}</p>
            </div>
            <div 
            className={`card ${flip? "flip" : ""} ${card.id}`} 
            onClick={() => setFlip(!flip)}
            >
                <div className="front">
                    {card.question}
                </div>
                <div className="back">
                    {card.answer[0]}
                </div>
                {/* {flip ? card.answer : card.question} */}
            </div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="guess">Guess the answer here: </label>
                <input type="text" name="guess" 
                    placeholder="Place your answer here" onChange={handleChange}
                    value={input} id={checkAnswer}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Event;