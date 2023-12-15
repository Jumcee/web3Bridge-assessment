import React from 'react';
// import ReactDOM from 'react-dom'; // Only import ReactDOM if you're using it here

const quizData = [
    {
      question: "What is the capital of Nigeria?",
      options: ["Lagos", "PortHarcourt", "Abuja"],
      correctAnswer: "Abuja"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
        question: "which is consider the biggest city in Nigeria?",
        options: ["Lagos", "Kwara", "Ekiti"]
    }
  ];
  
  const App = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState([]);
  
    const handleAnswerOptionClick = (selectedAnswer) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(updatedAnswers);
    };
  
    const handleNextQuestion = () => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Evaluate answers and display score
        let totalScore = 0;
        for (let i = 0; i < quizData.length; i++) {
          if (userAnswers[i] === quizData[i].correctAnswer) {
            totalScore++;
          }
        }
        setScore(totalScore);
      }
    };
  
    return (
      <div className="quiz-container">
        {score === 0 ? (
          <div className="question-container">
            <h1>Quiz Application</h1>
            <p>{quizData[currentQuestion].question}</p>
            <div className="options-container">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        ) : (
          <div>
            <h1>Quiz Completed</h1>
            <p>Your Score: {score} out of {quizData.length}</p>
          </div>
        )}
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));  