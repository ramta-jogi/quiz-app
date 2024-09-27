import { createTheme, ThemeProvider } from '@mui/material';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import { useState } from 'react';
import axios from "axios"

const theme = createTheme();

function App() {

  const [name, setName] = useState("")
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)
  const [Timer, setTimer] = useState(true)

  const fetchQuestions = async (noOfQues = 5, category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${noOfQues}${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    // console.log(data)
    setQuestions(data.results);
  }

  const fetchTimeBoolean = async (isTimed) => {
    // console.log(isTimed+'from App.js')
    setTimer(isTimed)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} fetchTimeBoolean={fetchTimeBoolean} />} />
            <Route path='/quiz' exact element={<Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              isTimed={Timer}
            />} />
            <Route path='/result' exact element={<Result
              name={name}
              score={score}
            />} />

          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
