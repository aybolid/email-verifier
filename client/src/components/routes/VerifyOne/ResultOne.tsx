import { css } from '@emotion/react';
import { useAppSelector } from '../../../app/hooks';
import { selectVerifierResult } from '../../../features/verifierResult/verifierResultSlice';
import { VerifierResult } from '../../../interfaces/VerifierResponse';
import { ResultOneWrapper } from './styles/ResultOne.styles';

export default function ResultOne() {
  const { data, isError, isLoading } = useAppSelector(selectVerifierResult);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  if (!data.results) {
    return null;
  }

  const result = data.results[0] as VerifierResult;
  return (
    <ResultOneWrapper result={result}>
      <h2 className="title">{(data.domains_checked as string[])[0]}</h2>
      <div className="data">
        <div
          css={css`
            background-color: ${result.is_ok ? '#00FF00' : '#FF0000'};
          `}
          className="cell"
        >
          <h3 className="cell-title">Status</h3>
          <p className="cell-status ok">{result.is_ok ? 'GOOD' : 'BAD'}</p>
        </div>
        <div className="cell">
          <h3 className="cell-title">MX</h3>
          <p className="cell-status mx">{result.has.mx ? 'YEA' : 'NAY'}</p>
        </div>
        <div className="cell">
          <h3 className="cell-title">SPF</h3>
          <p className="cell-status spf">{result.has.spf ? 'YEA' : 'NAY'}</p>
          {result.has.spf && (
            <div className="record">
              <h4>SPF Record:</h4>
              <p>{result.records.spf}</p>
            </div>
          )}
        </div>
        <div className="cell">
          <h3 className="cell-title">DMARC</h3>
          <p className="cell-status dmarc">
            {result.has.dmarc ? 'YEA' : 'NAY'}
          </p>
          {result.has.dmarc && (
            <div className="record">
              <h4>DMARC Record:</h4>
              <p>{result.records.dmarc}</p>
            </div>
          )}
        </div>
      </div>
    </ResultOneWrapper>
  );
}
