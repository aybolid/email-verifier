import { OneEmailRes } from '@src/interfaces/OneEmailRes';
import { MdCheck, MdError } from 'react-icons/md';

export default function FormatCheckResult({ result }: { result: OneEmailRes }) {
  return (
    <div className="format">
      <h3>
        Format Check{' '}
        <span>
          {result.format ? (
            <MdCheck size={30} color="#2196f3" />
          ) : (
            <MdError size={30} color="#f44336" />
          )}
        </span>
      </h3>
      <div>
        <p>{result.format ? 'Valid Format' : 'Invalid Format'}</p>
        <ul>
          <li>
            {result.email.includes('@') ? (
              <>
                <MdCheck size={22} color="#2196f3" /> '@' sign
              </>
            ) : (
              <>
                <MdError size={22} color="#f44336" /> no '@' sign
              </>
            )}
          </li>
          <li>
            {result.domain ? (
              <>
                <MdCheck size={22} color="#2196f3" /> valid domain
              </>
            ) : (
              <>
                <MdError size={22} color="#f44336" /> no domain name
              </>
            )}
          </li>
          <li>
            {result.format ? (
              <>
                <MdCheck size={22} color="#2196f3" /> regex check
              </>
            ) : (
              <>
                <MdError size={22} color="#f44336" /> regex check
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
