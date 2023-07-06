import React from 'react';
import { NavLink } from 'react-router-dom';
import { DataInputSeveralWrapper } from './DataInputSeveral.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import verifySeveral from '@src/api/verifySeveral';
import getEmailsArray from '@src/utils/getEmailsArray';
import { useAppDispath } from '@src/app/hooks';
import {
  setData,
  setIsError,
  setIsLoading,
} from '@src/features/verifySeveralEmails/verifySeveralEmailsSlice';

interface FormData {
  emails: string;
}

const schema = yup
  .object({
    emails: yup
      .string()
      .required('Provide at least one email')
      .matches(
        /\b\w+\b(?:,\s\b\w+\b)*/,
        'Use valid format: first, second, third...'
      ),
  })
  .required();

export default function DataInputSeveral() {
  const d = useAppDispath();

  const {
    data: result,
    mutateAsync,
    isLoading,
    isError,
  } = useMutation(verifySeveral);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const handleVerifySeveral = (data: FormData) => {
    const emails = getEmailsArray(data.emails);

    mutateAsync(emails)
      .then(() => reset())
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    d(setIsError(isError));
    d(setIsLoading(isLoading));
    d(setData(result));
  }, [d, result, isLoading, isError]);

  return (
    <DataInputSeveralWrapper>
      <h2>
        Verify several <span>email addresses</span> at once
      </h2>

      <form onSubmit={handleSubmit(handleVerifySeveral)}>
        <textarea
          {...register('emails')}
          placeholder="first@email.com, second@email.com..."
        />
        <p>{errors.emails?.message}</p>
        <button>Check</button>
      </form>

      <NavLink to="/verify">Back to one email verification</NavLink>
    </DataInputSeveralWrapper>
  );
}
