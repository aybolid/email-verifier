import { OneEmailRes } from '@src/interfaces/OneEmailRes';
import { MxResultWrapper } from './SingleResult.styled';
import { MdCheck, MdError } from 'react-icons/md';

export default function MxCheckResult({ result }: { result: OneEmailRes }) {
  const {
    dns: { mx },
  } = result;

  return (
    <MxResultWrapper mx={mx}>
      <h3>
        MX Check{' '}
        <span>
          {mx.status ? (
            <MdCheck size={30} color="#2196f3" />
          ) : (
            <MdError size={30} color="#f44336" />
          )}
        </span>
      </h3>
      <div>
        <p className="status">
          {mx.status ? 'Record(s) was found' : 'No record was found'}
        </p>
        {mx.status && (
          <table>
            <thead>
              <tr>
                <th>Host</th>
                <th>Prefs</th>
              </tr>
            </thead>
            <tbody>
              {mx.records.map((record) => (
                <tr key={record.Host}>
                  <td>{record.Host}</td>
                  <td>{record.Pref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="info">
          MX (Mail Exchanger) records are DNS records that specify the mail
          server responsible for accepting incoming email messages on behalf of
          a domain. They play a crucial role in directing email traffic to the
          correct mail servers.
        </p>
      </div>
    </MxResultWrapper>
  );
}
