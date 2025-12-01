import axios from 'axios';
import { useAtomValue } from 'jotai';
import styled from 'styled-components';

import testState from '../../stores/test/atom';
import testWithComma from '../../stores/test/testWithComma';

const a = 123;

function CompletionPage() {
  const test1 = useAtomValue(testState);
  const test2 = useAtomValue(testWithComma);

  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('res', res);
  });
  return (
    <CompletionPageWrapper>
      {test1} {test2}
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: ${a === 123 ? '4em' : '1em'};
`;

export default CompletionPage;
