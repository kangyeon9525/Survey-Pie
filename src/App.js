import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionsBox from './components/QuestionBox';
import PageA from './pages/pageA';
import PageB from './pages/pageB';

function App() {
  const questions = [
    {
      title: '질문1',
      desc: '설명1',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2',
      desc: '설명2',
      type: 'text',
      required: true,
      options: {},
    },
  ];

  const step = 1;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      {/*
      <ProgressIndicator />
      <QuestionsBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />*/}
      <div>Hello World!</div>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/2" element={<PageB />} />
      </Routes>
    </div>
  );
}

export default App;
