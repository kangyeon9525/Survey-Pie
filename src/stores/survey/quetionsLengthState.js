import { atom } from 'jotai';

import surveyState from './surveyState';

const questionsLengthState = atom((get) => {
  // selector
  const survey = get(surveyState);
  const questions = survey?.questions || [];
  return questions.length;
});

export default questionsLengthState;
