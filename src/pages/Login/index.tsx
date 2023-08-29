import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import cn from 'classnames';

import Layout from '@components/Layout';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';
import Spinner from '@components/UI/Spinner';

import MailIcon from '@assets/icons/mail.svg';
import LockIcon from '@assets/icons/lock.svg';
import CheckIcon from '@assets/icons/check.svg';
import GoogleIcon from '@assets/icons/google.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import AppleIcon from '@assets/icons/apple.svg';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

import { login, loginSuccess, loginError } from '@store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';

import { IFormData } from './types';
import classes from './Login.modules.scss';

const initialState = {
  email: '',
  password: '',
}
//
const Login: FC = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);

  const { isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const submitHandler = useCallback(async (event: any) => {
    event.preventDefault();

    try {
      dispatch(login());

      const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password);

      dispatch(loginSuccess({
        userId: user.uid,
        email: user.email,
      }))

      setFormData(initialState);
    } catch (error) {
      dispatch(loginError(error))
    }
  }, [formData]);

  const changeInputHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }, [])

  return (
    <Layout disableBreadcrumbs disableFooter variant="Center">
      <div className={classes.Login}>
        <h1 className={cn(classes.Title, 'title')}>Accedi</h1>

        {isLoading ? <Spinner /> : (
            <form className={classes.Form} autoComplete="off" onSubmit={submitHandler}>
              <div className={classes.InputWrapper}>
                <Input
                  className={classes.Input}
                  onChange={changeInputHandler}
                  id="email"
                  value={formData.email}
                  placeholder="Inserisci la tua email di utente"
                  Icon={MailIcon}
                />

                <Input
                  onChange={changeInputHandler}
                  id="password"
                  value={formData.password}
                  type="password"
                  placeholder="Scrivi la tua Password"
                  Icon={LockIcon}
                />
              </div>

              <Button fullWidth variant="Submit">
                <CheckIcon /> Accedi
              </Button>
            </form>
          )}

        <div className={classes.AdditionalLogin}>
          <h3 className={classes.AdditionalLoginTitle}>
            <span>Oppure accedi con</span>
          </h3>

          <div className={classes.AdditionalLoginButtonWrapper}>
            <Button>
              <GoogleIcon />
            </Button>

            <Button>
              <FacebookIcon />
            </Button>

            <Button>
              <AppleIcon />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;