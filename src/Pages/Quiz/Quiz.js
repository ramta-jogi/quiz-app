import React from 'react'
import { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './Quiz.css'
import Questions from '../../components/ErrorMessage/Questions/Questions'

const Quiz = ({ name, score, questions, setScore, isTimed }) => {

    const [options, setOptions] = useState()

    const [currentQues, setCurrentQues] = useState(0)

    const [time, setTime] = useState(30)

    useEffect(() => {
        // console.log(questions);

        setOptions(
            questions &&
            handleShuffle([
                questions[currentQues]?.correct_answer,
                ...questions[currentQues]?.incorrect_answers,
            ])
        )
    }
        , [questions, currentQues]);

    // console.log(options)

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5)
    };

    useEffect(() => {
        let myInterval = setInterval(() => {
          setTime(time-1);
        }, 1000)
            return ()=>{
                clearInterval(myInterval)
            }
      });

    const renderTimer= () => {
        if(!isTimed){
            return(
                <span>{time}</span>
            )
        }
        else{
            return(<></>)
        }
    }

    return (
        <div className='quiz'>
            <span className="subtitle">Welcome, {name}</span>
            {
                questions ? (
                    <>
                        <div className="quizInfo">
                            <span>{questions[currentQues].category}</span>

                            {renderTimer()}
                        </div>
                        <Questions
                            currentQues={currentQues}
                            setCurrentQues={setCurrentQues}
                            questions={questions}
                            options={options}
                            correct={questions[currentQues]?.correct_answer}
                            score={score}
                            setScore={setScore}
                            time={time}
                            setTime={setTime}
                        />
                    </>
                ) : (
                    <CircularProgress style={{ margin: 100 }}
                        color='inherit'
                        size={150}
                        thickness={1}
                    />
                )
            }
        </div>
    )
}

export default Quiz
