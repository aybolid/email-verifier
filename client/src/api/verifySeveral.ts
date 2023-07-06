import type SeveralEmailsRes from '@interfaces/SeveralEmailsRes';

const URL = '/api/v1/verify-several';

const REQ: RequestInit = {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' }),
};

const verifySeveral = async (emails: string[]): Promise<SeveralEmailsRes> => {
  const response: SeveralEmailsRes = await fetch(URL, {
    ...REQ,
    body: JSON.stringify(emails),
  }).then((res) => res.json());

  return response;
};

export default verifySeveral;
