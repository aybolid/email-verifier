import React from 'react';

import { useAppSelector } from '@src/app/hooks';
import { selectAll } from '@src/features/verifySingleEmail/verifySingleEmailSlice';
import { css } from '@emotion/react';
import ReactLoading from 'react-loading';
import { ResultContent, ResultWrapper } from './SingleResult.styled';
import { MdCopyAll } from 'react-icons/md';
import FormatCheckResult from './FormatCheckResult';
import SpfDmarcCheckResult from './SpfDmarcCheckResult';
import MxCheckResult from './MxCheckResult';
import Total from './Total';

export default function SingleResult() {
  const { isLoading, isError, result } = useAppSelector(selectAll);

  const Loader = (): JSX.Element => (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <ReactLoading type="bars" color="#2196f3" height={120} width={120} />
    </div>
  );

  const Error = (): JSX.Element => (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f44336;
      `}
    >
      <p>Unexpected error has occurred. Try again</p>
    </div>
  );

  const [asJSON, setAsJSON] = React.useState(false);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      {result && (
        <ResultWrapper>
          <div className="head">
            <h2 className="title">
              {result.format ? (
                <a href={`mailto:${result.email}`}>{result.email}</a>
              ) : (
                result.email
              )}{' '}
              <span title="domain">| {result.domain || 'no domain found'}</span>
            </h2>
            <button
              title="Toggle display"
              onClick={() => setAsJSON(!asJSON)}
              className="display-toggler"
            >
              {!asJSON ? 'As JSON' : 'Formatted'}
            </button>
          </div>
          <ResultContent result={result}>
            {asJSON ? (
              <div className="json-wrapper">
                <pre className="json">{JSON.stringify(result, null, 2)}</pre>
                <button
                  className="copy-btn"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      JSON.stringify(result, null, 2)
                    )
                  }
                >
                  <MdCopyAll size={30} />
                </button>
              </div>
            ) : (
              <div className="formatted-wrapper">
                <FormatCheckResult result={result} />
                <SpfDmarcCheckResult result={result} />
                <MxCheckResult result={result} />
                <Total result={result} />
              </div>
            )}
          </ResultContent>
        </ResultWrapper>
      )}
    </>
  );
}
