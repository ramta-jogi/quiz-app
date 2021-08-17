import React from 'react'
import { useState, useEffect } from 'react'
import ErrorMessage from '../ErrorMessage';
import './Questions.css'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const Questions = ({
    currentQues,
    setCurrentQues,
    questions,
    options,
    correct,
    setScore,
    score,
    time,
    setTime
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const history = useHistory()

    const handleSelect = (element) => {
        if (selected === element && selected === correct)
            return "select"
        else if (selected === element && selected !== correct)
            return "wrong"
        else if (element === correct)
            return "select"
    }

    useEffect(() => {
        (time===0)&&time&&handleNext()
      });

    const handleCheck = (element) => {
        setSelected(element);
        if(element === correct) setScore(score + 1);
        // setError(false)
    }

    const handleNext = () => {
        if(currentQues > questions.length-2) {
            history.push("/result")
            setTime(30)
        }
        else if(selected){
            setCurrentQues(currentQues+1)
            setSelected()
            setTime(30)
        }
        else {
            setCurrentQues(currentQues+1)
            setSelected()
            setTime(30)
            // setError(true)
        }
    }

    const handleQuit = () => {
        <></>
    }



    return (
        <div className="question">
            <h1>Question: {currentQues + 1}</h1>
            <div className="singleQuestion">
                <h2>{questions[currentQues].question}</h2>
                <div className='options'>
                    {error && <ErrorMessage>Error. Please Select an Option.</ErrorMessage>}
                    {
                        options &&
                        options.map(element =>
                            <button
                                onClick={() => handleCheck(element)}
                                className={`singleOption ${selected && handleSelect(element)}`}
                                key={element}
                                disabled={selected}>
                                {element}
                            </button>
                        )}
                </div>
                <div className="controls">
                    <Button 
                    variant='contained'
                    color='secondary'
                    href='/'
                    onClick={handleQuit}
                    >
                        Quit
                    </Button>
                    <Button
                    variant='contained'
                    style={{ backgroundColor: 'blueviolet', color: 'white' }}
                    onClick={handleNext}
                    >
                        Next Question
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Questions
