import { useAtomValue } from 'jotai';

import answersState from '../stores/answers/atom';

function useAnswers() {
  return useAtomValue(answersState); // useRecoilValue
}

export default useAnswers;
