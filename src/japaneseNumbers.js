import React, { useState } from 'react'
import { getNumberAsText } from './numberToText'
import { getImgName } from './imageProvider'
import { getN } from './n'
import { format } from './numberFormatter'
import './japaneseNumbers.css'

export default function JapaneseNumbers() {
    const n = getN()
    const [number, setNumber] = useState(format(n))
    const [textNumber, setTextNumber] = useState(getNumberAsText(n) + ' desu')
    const [visibleAnswer, setVisibleAnswer] = useState(false)
    const [imgName, setImgName] = useState(getImgName())
    const changeVisibleAnswer = () => { setVisibleAnswer(!visibleAnswer) }

    const tryAnother = () => {
        const n = getN()

        setVisibleAnswer(false)
        setImgName(getImgName())
        setNumber(format(n))
        setTextNumber(getNumberAsText(n) + ' desu')
    }

    return (
        <div className="mainContainer">
            <div className="numberGuesser">
                <div className="imageContainer">
                    <img src={imgName} height="200px" width="150px" alt="a random pic" />
                </div>
                <div className="question">
                    <font>Kono suji (bangou) ha nandesuka</font>
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
                <div className="linksToOtherApps">
                    <a href="http://japanese-hiragana-trivia.herokuapp.com/">Click to study Hiragana...</a>
                    <p />
                    <a href="http://japanese-hours.herokuapp.com/">Click to study Japanese hours...</a>
                </div>
                <button className="tryAnother" onClick={tryAnother}>Try Another</button>
            </div>
        </div >
    )
}

