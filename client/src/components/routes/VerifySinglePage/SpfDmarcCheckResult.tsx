import { OneEmailRes } from '@src/interfaces/OneEmailRes';
import { MdCheck, MdError } from 'react-icons/md';

export default function SpfDmarcCheckResult({
  result,
}: {
  result: OneEmailRes;
}) {
  return (
    <>
      {Object.entries(result.dns).map(([key, data]) => {
        if (key === 'mx') return null;
        return (
          <div className="spf-dmarc" key={key}>
            <h3 className={data.status ? 'title-ok' : 'title-bad'}>
              {key.toUpperCase()} Check{' '}
              <span>
                {data.status ? (
                  <MdCheck size={30} color="#2196f3" />
                ) : (
                  <MdError size={30} color="#f44336" />
                )}
              </span>
            </h3>
            <div className={data.status ? 'wrapper-ok' : 'wrapper-bad'}>
              <p
                className={`status ${data.status ? 'status-ok' : 'status-bad'}`}
              >
                {data.status ? 'Record was found' : "Record wasn't found"}
              </p>
              {data.status && (
                <div className="record-wrapper">
                  <h4 className="record-title">Record:</h4>
                  <p className="record">{data.record}</p>
                </div>
              )}
              <p className="info">
                {key === 'spf'
                  ? 'An SPF record is a type of DNS record that protects email against unauthorized use'
                  : 'DMARC is often used in conjunction with SPF to enhance email security'}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
