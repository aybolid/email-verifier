import { css } from '@emotion/react';
import { useAppSelector } from '@src/app/hooks';
import { SelectAll } from '@src/features/verifySeveralEmails/verifySeveralEmailsSlice';
import calcTotalScore from '@src/utils/calcTotalScore';
import ReactLoading from 'react-loading';
import { SeveralResultsWrapper } from './SeveralResultsWrapper.styled';

export default function ResultTable() {
  const { isError, isLoading, data } = useAppSelector(SelectAll);

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

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loader />}
      {data && (
        <SeveralResultsWrapper>
          <h3>Verification results</h3>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Domain</th>
                <th>Format</th>
                <th>MX</th>
                <th>SPF</th>
                <th>DMARC</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data?.results.map((r) => {
                const {
                  dns: { mx, spf, dmarc },
                } = r;
                const totalScore = calcTotalScore(r);
                return (
                  <tr key={r.email}>
                    <td
                      className={
                        totalScore === 4
                          ? 'ok'
                          : totalScore === 0
                          ? 'bad'
                          : 'warn'
                      }
                    >
                      {r.email}
                    </td>
                    <td className={r.domain ? 'ok' : 'bad'}>{r.domain}</td>
                    <td className={r.format ? 'ok' : 'bad'}>
                      {r.format ? 'yes' : 'no'}
                    </td>
                    <td className={mx.status ? 'ok' : 'bad'}>
                      {mx.status ? 'yes' : 'no'}
                    </td>
                    <td className={spf.status ? 'ok' : 'bad'}>
                      {spf.status ? 'yes' : 'no'}
                    </td>
                    <td className={dmarc.status ? 'ok' : 'bad'}>
                      {dmarc.status ? 'yes' : 'no'}
                    </td>
                    <td
                      className={
                        totalScore === 4
                          ? 'ok'
                          : totalScore === 0
                          ? 'bad'
                          : 'warn'
                      }
                    >
                      {totalScore}/4
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </SeveralResultsWrapper>
      )}
    </>
  );
}
