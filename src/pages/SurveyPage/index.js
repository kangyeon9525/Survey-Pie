import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionsBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionsBox />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
