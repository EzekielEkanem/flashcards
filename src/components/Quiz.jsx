import React from "react";
import { useState } from "react";
import List from './List';

const Quiz = () => {
    const [cards, setCards] = useState(START_QUIZ);
    const randomCard = () => {
        setCards(QUIZ_LIST[randomNumber])
    }
    const [randomNumber, setRandomNumber] = useState(0);
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * QUIZ_LIST.length);
        setRandomNumber(randomNumber);
        randomCard()
    }
    return (
        <div className='container'>
            <List cards={cards}/>
            <button onClick={generateRandomNumber}> → </button>
        </div>
    )
}

const START_QUIZ = {
    id: "start-card",
    question: "Start!",
    answer: "Press the next arrow to start the flashcards :)"
}

const QUIZ_LIST = [
    {
        id: "maths",
        question: "Find the derivative of f(x) = sin(2x)",
        answer: "2cos(2x)"
    },
    {
        id: "biology",
        question: `A plant which grows on another plant without apparent harm to the host plant is called`,
        answer: "An epiphyte"
    },
    {
        id: "chemistry",
        question: `In the reaction between sodium hydroxide and sulphuric acid solutions,
        what volume of 0.5 molar sodium hydroxide would exactly neutralise 10cm3 of 1.25 molar sulphuric acid?`,
        answer: "50cm^3"
    },
    {
        id: "physics",
        question: `An object 40 cm high is 30cm from the pin hole camera. If the height 
        of the image formed is 20 cm. What is the distance of the image from 
        the pin height?`,
        answer: "15cm"
    },
    {
        id: "maths",
        question: "If log 10 to base 8 = X, evaluate log 5 to base 8 in terms of X",
        answer: "X - (1/3)"
    },
    {
        id: "biology",
        question: `The cilia in paramecium are use for`,
        answer: "Locomotion",
    },
    {
        id: "chemistry",
        question: `The periodic classification of elements is an arrangement of the elements in order of their`,
        answer: "Atomic Numbers"
    },
    {
        id: "physics",
        question: `A cell whose internal resistance is 0.55Ω
        delivers a current of 4 A to an external resistor. The lost voltage of the cell is`,
        answer: "2.20 V"
    },
    {
        id: "maths",
        question: "A group of market women sell at least one of yam, plantain and maize. 12 of them sell maize, 10 sell yam and 14 sell plantain. 5 sell plantain and maize, 4 sell yam and maize, 2 sell yam and plantain only while 3 sell all the three items. How many women are in the group?",
        answer: "25"
    },
    {
        id: "biology",
        question: `When protein are broken down they provide`,
        answer: "Amino acid"
    },
    {
        id: "chemistry",
        question: `The oxidation state of chlorine in potassium chlorate is?`,
        answer: "+5"
    },
    {
        id: "physics",
        question: `An isotope has an initial activity of 120 Bq. 6 days later its activity is 15 Bq. The half-life is? `,
        answer: "2 days"
    },
    {
        id: "maths",
        question: "A trader bought 100 oranges at 5 for N1.20, 20 oranges got spoilt and the remaining were sold at 4 for N1.50. Find the percentage gain or loss.",
        answer: "25% gain"
    },
    {
        id: "biology",
        question: `The function of lenticels in plants is`,
        answer: "For gaseous exchange",
    },
    {
        id: "chemistry",
        question: `The reaction between an organic acid and an alcohol in the presence of an acid catalyst is known as
        `,
        answer: "Esterification"
    },
    {
        id: "physics",
        question: `A tuning fork having a frequency of 312 Hz emits a wave which has a wavelength of 1.10 m. Calculate the velocity of sound`,
        answer: "343.2 m/s"
    },
    {
        id: "maths",
        question: "The sum of two numbers is twice their difference. If the difference of the numbers is P, find the larger of the two numbers",
        answer: "3p/2"
    },
    {
        id: "biology",
        question: `The neck region of the tape worm, (taenia) is responsible for the`,
        answer: "Formation of new segment"
    },
    {
        id: "chemistry",
        question: `Brass and bronze are both metallic alloys. What constituent is common to both alloys?`,
        answer: "Copper"
    },
    {
        id: "physics",
        question: `A current of 0.5 A flows through a resistor when connected to a 40 V battery. How much energy is dispatched in 2 minutes?`,
        answer: "2400 J"
    }
]

export default Quiz;