import { OneEmailRes } from '@src/interfaces/OneEmailRes';

const calcTotalScore = (result: OneEmailRes) => {
  const {
    dns: { mx, dmarc, spf },
  } = result;
  let totalScore = 0;
  if (result.format) totalScore++;
  if (mx.status) totalScore++;
  if (spf.status) totalScore++;
  if (dmarc.status) totalScore++;
  return totalScore;
};

export default calcTotalScore;
