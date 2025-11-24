import ProgressIndicator from './components/ProgressIndicator';
import QuestionsBox from './components/QuestionBox';

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

  const step = 0;

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionsBox question={questions[step]} />
    </div>
  );
}

export default App;
