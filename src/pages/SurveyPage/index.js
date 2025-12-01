import { Suspense } from 'react';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionsBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionsBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
