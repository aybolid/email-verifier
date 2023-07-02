import React from 'react';

import { useForm } from 'react-hook-form';
import { DataInputWrapper } from './DataInputSingle.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import verifySingle from '@src/api/verifySingle';
import { useAppDispath } from '@src/app/hooks';
import {
  setEmail,
  setIsError,
  setIsLoading,
  setResult,
} from '@src/features/verifySingleEmail/verifySingleEmailSlice';

interface FormData {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required('Provide an email address'),
  })
  .required();

export default function DataInputSingle() {
  const d = useAppDispath();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const {
    mutateAsync,
    data: result,
    isError,
    isLoading,
  } = useMutation(verifySingle);

  React.useEffect(() => {
    d(setResult(result));
    d(setIsError(isError));
    d(setIsLoading(isLoading));
  }, [d, result, isError, isLoading]);

  const handleVerification = (data: FormData) => {
    let { email } = data;
    email = email.trim();

    mutateAsync(email)
      .then(() => d(setEmail(email)))
      .catch((err) => console.error(err))
      .finally(() => reset());
  };

  return (
    <DataInputWrapper>
      <h2>
        Provide an <span>email address</span> to verify
      </h2>
      <form onSubmit={handleSubmit(handleVerification)}>
        <div>
          <input
            {...register('email')}
            autoComplete="off"
            autoFocus
            placeholder="example@email.com"
            type="text"
          />
          <button>Check</button>
        </div>
        <p>{errors.email?.message}</p>
      </form>
      <NavLink to={'several'}>
        Want to check several emails at once? Click me
      </NavLink>
    </DataInputWrapper>
  );
}
