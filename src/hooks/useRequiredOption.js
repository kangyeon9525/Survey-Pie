import useCurrentQuestion from './useCurrentQuestoin';

function useRequiredOptions() {
  const question = useCurrentQuestion();

  return question?.required || false;
}

export default useRequiredOptions;
