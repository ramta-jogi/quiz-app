import React from 'react'
import './Home.css'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Categories from '../../components/Data/Categories'
import { useState } from 'react'
import { useHistory } from "react-router";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Home = ({ name, setName, fetchQuestions, fetchTimeBoolean}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const [noOfQues, setNoOfQues] = useState(5)
    const [isTimed, setIsTimed] = useState(true)
    const quesArray = [3, 4, 5, 6, 7, 8, 9, 10]
    const [switchLabel, setSwitchLabel] = useState("Quiz is not timed")

    const history = useHistory();



    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true)
            return;
        }
        else {
            setError(false)
            fetchQuestions(noOfQues ,category, difficulty)
            fetchTimeBoolean(isTimed)
            history.push("/quiz")
        }
    };
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>
                    Quiz Settings
                </span>
                <div className="settings__select">
                    {error && <ErrorMessage>Error! Please fill all the fields before submitting.</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label='Enter your name'
                        variant='outlined'
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        select
                        label="Select number of questions"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setNoOfQues(e.target.value)}
                        value={noOfQues}

                    >
                        {
                            quesArray.map((element) => (
                                <MenuItem key={element} value={element}>
                                    {element}
                                </MenuItem>
                            ))
                        }

                    </TextField>

                    <TextField
                        select
                        label="Select Category"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map((element) => (
                                <MenuItem key={element.category} value={element.value}>
                                    {element.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField
                        select
                        label="Select Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}

                    >
                        <MenuItem key='Easy' value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>
                    </TextField>

                        <FormControlLabel
                            control={
                            <Switch 
                            checked={isTimed.checkedA} 
                            onChange={()=>{
                                setIsTimed(!isTimed); 
                                // console.log(isTimed+'from Home.js');
                                setSwitchLabel(isTimed?"30 seconds for each question":"Quiz is not timed")
                            }} name="checkedA" />}
                            label={switchLabel}
                        />

                    <Button
                        variant='contained'
                        style={{ backgroundColor: '#03298C', color: 'white' }}
                        size='large'
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>


                </div>
            </div>
            <img src='/quiz.png' className='banner' alt='Banner' />
        </div>
    )
}

export default Home
