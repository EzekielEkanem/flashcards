import React, { Component, useEffect, useState } from "react";
import Event from './Event';
import Quiz from './Quiz';

const List = ({ cards, input, handleChange }) => {
    return (
        <div>
            <Event card={cards} input={input} handleChange={handleChange} />
        </div>
    )
}

export default List;
