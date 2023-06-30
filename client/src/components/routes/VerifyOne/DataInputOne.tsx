import React from 'react';
import { DataInputOneWrapper } from './styles/DataInputOne.styles';
import { useMutation } from '@tanstack/react-query';
import {
  setIsError,
  setIsLoading,
  setData,
  reset as resetStore,
} from '../../../features/verifierResult/verifierResultSlice';
import { useAppDispath } from '../../../app/hooks';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  toCheck: string;
}

const schema = yup
  .object({
    toCheck: yup
      .string()
      .required('You need to enter something')
      .matches(
        /^([\w.-]+)(@([\w.-]+))?\.([A-Za-z]{2,6})$/,
        'Invalid email address or domain'
      ),
  })
  .required();

export default function DataInputOne() {
  const { mutate, data, isLoading, isError } = useMutation((toCheck: string) =>
    fetch(`http://localhost:8080/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to_check: [toCheck],
      }),
    }).then((res) => res.json())
  );

  // Redux
  const d = useAppDispath();
  React.useEffect(() => {
    isError && d(setIsError(true));
    data && d(setData(data));
    isLoading && d(setIsLoading(true));

    return () => {
      d(resetStore());
    };
  }, [d, data, isError, isLoading]);

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    mutate(data.toCheck);
    reset();
  };

  return (
    <DataInputOneWrapper>
      <h2 className="title">
        Enter the email <span>address</span> or email <span>domain</span> you
        want to check
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="input-wrapper">
          <input
            {...register('toCheck')}
            placeholder="example@mail.com"
            className="input"
            type="text"
            autoComplete="off"
          />
          <button disabled={isLoading} type="submit" className="submit-btn">
            Check
          </button>
        </div>
        <p className="error">{errors.toCheck?.message}</p>
      </form>
      <NavLink className="link" to={'/several'}>
        Want to check more at once? Click here
      </NavLink>
    </DataInputOneWrapper>
  );
}
