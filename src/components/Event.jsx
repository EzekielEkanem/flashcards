import React from "react";
import { useState } from "react";

const Event = ({ card }) => {
    const [flip, setFlip] = useState(false);
    return (
        <div 
            className={`card ${flip? "flip" : ""} ${card.id}`} 
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {card.question}
            </div>
            <div className="back">
                {card.answer}
            </div>
            {/* {flip ? card.answer : card.question} */}
        </div>
    )
}

export default Event;