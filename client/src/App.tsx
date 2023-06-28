import React from 'react';

import Layout from './components/Layout';

export default function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [response, setResponse] = React.useState();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toCheck = inputRef.current?.value;

    const response = await fetch(`http://localhost:5173/api`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify([toCheck]),
    }).then((res) => res.json());
    setResponse(response);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button>Check</button>
      </form>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </Layout>
  );
}
