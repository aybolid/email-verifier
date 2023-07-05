import React from 'react';
import { OneEmailRes } from '@src/interfaces/OneEmailRes';
import { TotalWrapper } from './SingleResult.styled';
import { MdCheck, MdError } from 'react-icons/md';

export default function Total({ result }: { result: OneEmailRes }) {
  const totalScore = React.useMemo(() => {
    const {
      dns: { mx, dmarc, spf },
    } = result;
    let totalScore = 0;
    if (result.format) totalScore++;
    if (mx.status) totalScore++;
    if (spf.status) totalScore++;
    if (dmarc.status) totalScore++;
    return totalScore;
  }, [result]);

  return (
    <TotalWrapper data={result} totalScore={totalScore}>
      <h3>
        Total Score{' '}
        <span>
          {totalScore === 4 ? (
            <MdCheck size={30} color="#2196f3" />
          ) : totalScore === 0 ? (
            <MdError size={30} color="#f44336" />
          ) : (
            <MdError size={30} color="#ffc107" />
          )}
        </span>
      </h3>
      <div>
        <p className="score">{totalScore} / 4</p>
        <p className="info">
          The total score is an indicator of the overall validity and
          reliability of an email address. A higher total score generally
          suggests that the email address has passed more verification checks
          and is more likely to be valid and trustworthy.
        </p>
      </div>
    </TotalWrapper>
  );
}
