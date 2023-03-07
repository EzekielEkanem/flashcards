import React from "react";
import Event from './Event';

const List = ({ cards }) => {
    return (
        <div>
            <Event card={cards} />
        </div>
    )
}

export default List;
