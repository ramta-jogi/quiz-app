#QuizYouUp - quiz app
A simple quiz app created with React.js

##Introduction
QuizYouUp is a simple quiz app created using [React.js]{https://reactjs.org/}

The player can enter their name, select the number of questions, category of questions and the difficulty level of the questions.
They can also choose to keep the quiz either timed, getting 30 seconds to answer any question; or not timed and take as much time for each question as they want.

This repo contains the source code for the same. A production build is present in the production branch, which is hosted on [this link.]

##Running the code
To run the code, clone this repository in your system. Make sure you have Node.js installed. (Try running `node --version` on your terminal.)
You can get Node.js [here]{https://nodejs.org/en/download/}

Open the repository in your terminal, then run `npm install` to install all the dependencies. 
Then run `npm start`. The app will be hosted on your [localhost]{http://localhost:3000}

##Working
The app is a three-page application linked using the React Router package. The quesitons are fethched by the free [TriviaAPI]{https://opentdb.com/}. 
All the components are function components; and the app makes liberal use of the new Hooks feature of React (namely the useState and useEffect hooks).

