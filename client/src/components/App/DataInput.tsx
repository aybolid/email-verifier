import React from 'react';
import { DataInputWrapper } from './styles/DataInput.styles';
import { useMutation } from '@tanstack/react-query';
import { useAppDispath } from '../../app/hooks';
import {
  setIsError,
  setIsLoading,
  setResult,
} from '../../features/verifierResult/verifierResultSlice';
import { css } from '@emotion/react';

export default function DataInput() {
  const [verifySeveral, setVerifySeveral] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const { mutate, data, isLoading, isError } = useMutation(
    (toCheck: string[]) =>
      fetch(`http://localhost:8080/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_check: toCheck,
        }),
      }).then((res) => res.json())
  );

  const d = useAppDispath();
  React.useEffect(() => {
    if (isError) {
      d(setIsError(true));
    }
    if (data) {
      d(setResult(data));
    }
    if (isLoading) {
      d(setIsLoading(true));
    }
    return () => {
      d(setIsLoading(false));
    };
  }, [d, data, isError, isLoading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    if (!inputRef.current || !inputRef.current.value) return;

    let toCheck: string[];
    if (verifySeveral) {
      const values = inputRef.current?.value.split(',');
      toCheck = values.map((value) => value.trim());
    } else {
      toCheck = [inputRef.current?.value.trim()];
    }

    if (toCheck) {
      mutate(toCheck);
    }
  };

  return (
    <DataInputWrapper>
      <h2 className="title">
        {!verifySeveral
          ? 'Provide an email / email domain to verify'
          : 'Provide several emails / email domains to verify'}
      </h2>
      <form
        css={css`
          flex-direction: ${verifySeveral ? 'column' : 'flex-row'};
        `}
        className="form"
        onSubmit={handleSubmit}
      >
        {!verifySeveral ? (
          <>
            <input
              placeholder="example@mail.com"
              className="input"
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
            />
            <button disabled={isLoading} type="submit" className="submit-btn-1">
              Check
            </button>
          </>
        ) : (
          <>
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              placeholder="one@mail.com, two@mail.com..."
              className="textarea"
            />
            <button disabled={isLoading} type="submit" className="submit-btn-2">
              Check
            </button>
          </>
        )}
      </form>
      <button
        onClick={() => setVerifySeveral(!verifySeveral)}
        className="toggler"
      >
        {!verifySeveral
          ? 'Need to verify several emails?'
          : 'Need to verify one email?'}
      </button>
    </DataInputWrapper>
  );
}
