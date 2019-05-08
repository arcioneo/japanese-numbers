import React, { useState, useEffect } from 'react'
import { getNumberAsText } from './numberToText'
import { getN } from './n'
import './japaneseNumbers.css'

export default function JapaneseNumbers() {
    const n = getN()
    const [number, setNumber] = useState(n)
    const [textNumber, setTextNumber] = useState(getNumberAsText(n))
    const [visibleAnswer, setVisibleAnswer] = useState(false)
    const changeVisibleAnswer = () => { setVisibleAnswer(!visibleAnswer) }

    function tryAnother() {
        setVisibleAnswer(false)
        const n = getN()
        setNumber(n)
        setTextNumber(getNumberAsText(n))
    }

    return (
        <div className="numberGuesser">
            <div className="imageContainer">
                <img src="./img/qm.jpg" height="200px" width="150px" />
            </div>
            <div className="question">
                <font>Kore wa nan-ban desuka</font>
            </div>
            <div className="formatedNumber">
                {number}
            </div>
            <div className="answer" onClick={changeVisibleAnswer} style={{ display: visibleAnswer ? 'block' : 'none' }}>
                {textNumber}
            </div>
            <div className="answer" onClick={changeVisibleAnswer} style={{ display: visibleAnswer ? 'none' : 'block' }}>
                <font>SEE ANSWER</font>
            </div>
            <button className="tryAnother" onClick={tryAnother}>Try Another</button>
        </div >
    )
}

