import ActionButtons from './ActionButtons';
import Body from './Body';
import Desc from './Desc';
import Title from './Title';

function QuestionsBox({ question }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type}></Body>
      <ActionButtons />
    </div>
  );
}

export default QuestionsBox;
