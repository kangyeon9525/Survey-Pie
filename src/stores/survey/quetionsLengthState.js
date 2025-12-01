import { atom } from 'jotai';

import surveyState from './surveyState';

const questionsLengthState = atom(async (get) => {
  // selector
  const survey = await get(surveyState);
  const questions = survey?.questions || [];

  return questions.length;
});

export default questionsLengthState;
