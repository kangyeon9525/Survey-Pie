import { useAtomValue } from 'jotai';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useAtomValue(surveyState); // useRecoilValue
  const questions = surveyData?.questions || [];

  return questions[step];
}

export default useCurrentQuestion;
