import { OneEmailRes } from '@src/interfaces/OneEmailRes';

const URL = '/api/v1/verify-one';

const REQ: RequestInit = {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' }),
};

const verifySingle = async (email: string) => {
  console.log('email: ', email);
  const result: OneEmailRes = await fetch(URL, {
    ...REQ,
    body: JSON.stringify(email),
  }).then((res) => res.json());

  return result;
};

export default verifySingle;
