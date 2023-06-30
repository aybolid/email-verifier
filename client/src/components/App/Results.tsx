import { useAppSelector } from '../../app/hooks';
import { selectVerifierResult } from '../../features/verifierResult/verifierResultSlice';
import { ResultsContainer } from './styles/Results.styles';
import { css } from '@emotion/react';
import ReactLoading from 'react-loading';

export default function Results() {
  const { isError, isLoading, result } = useAppSelector(selectVerifierResult);

  return (
    <>
      {!isError && !isLoading && result.domains_checked?.length === 0 && (
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <p
            css={css`
              max-width: 600px;
              text-align: center;
            `}
          >
            Please enter the necessary details and click the "Check" button to
            examine an email or email domain. This verification process will
            include checking MX records, SPF (Sender Policy Framework), and
            DMARC (Domain-based Message Authentication, Reporting, and
            Conformance).
          </p>
        </div>
      )}
      {isError && (
        <p
          css={css`
            color: #ff0000;
            width: 100%;
            text-align: center;
          `}
        >
          Something went wrong...
        </p>
      )}
      {isLoading && (
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <ReactLoading
            type={'bars'}
            color={'#0070f3'}
            width={120}
            height={120}
          />
        </div>
      )}
      {result.message &&  <p
          css={css`
            color: #ff0000;
            width: 100%;
            text-align: center;
          `}
        >
          {result.message}
        </p>}
      {result.domains_checked && result.domains_checked.length > 0 && (
        <ResultsContainer>
          <div className="domains">
            <h3>Domains checked ({result.domains_checked.length}):</h3>
            <ul>
              {result.domains_checked?.map((domain: string) => (
                <li key={domain}>
                  <p>{domain}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="results">
            <table>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Status</th>
                  <th>MX</th>
                  <th>SPF</th>
                  <th>DMARC</th>
                </tr>
              </thead>
              <tbody>
                {result.results?.map((result) => (
                  <tr>
                    <td
                      css={css`
                        background-color: ${result.is_ok
                          ? '#00ff0050'
                          : '#ff000050'};
                      `}
                    >
                      {result.domain}
                    </td>
                    <td
                      css={css`
                        background-color: ${result.is_ok
                          ? '#00ff0050'
                          : '#ff000050'};
                      `}
                    >
                      {result.is_ok ? 'OK' : 'BAD'}
                    </td>
                    <td
                      css={css`
                        background-color: ${result.has.mx
                          ? '#00ff0050'
                          : '#ff000050'};
                      `}
                    >
                      {result.has.mx ? 'YES' : 'NO'}
                    </td>
                    <td
                      css={css`
                        background-color: ${result.has.spf
                          ? '#00ff0050'
                          : '#ff000050'};
                      `}
                    >
                      {result.has.spf ? 'YES' : 'NO'}
                    </td>
                    <td
                      css={css`
                        background-color: ${result.has.dmarc
                          ? '#00ff0050'
                          : '#ff000050'};
                      `}
                    >
                      {result.has.dmarc ? 'YES' : 'NO'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ResultsContainer>
      )}
    </>
  );
}
