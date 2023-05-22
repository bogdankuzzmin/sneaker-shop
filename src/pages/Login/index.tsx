import React, { ChangeEvent, FC, MouseEvent, useCallback, useState } from 'react';
import cn from 'classnames';

import Layout from '@components/Layout';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';

import MailIcon from '@assets/icons/mail.svg';
import LockIcon from '@assets/icons/lock.svg';
import CheckIcon from '@assets/icons/check.svg';
import GoogleIcon from '@assets/icons/google.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import AppleIcon from '@assets/icons/apple.svg';

import classes from './Login.modules.scss';

interface IFormData {
  login: string;
  password: string;
}

const initialState = {
  login: '',
  password: '',
}

const Login: FC = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);

  const submitHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('SUBMIT!');
  }, []);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  return (
    <Layout disableBreadcrumbs disableFooter variant="Center">
      <div className={classes.Login}>
        <h1 className={cn(classes.Title, 'title')}>Accedi</h1>

        <form className={classes.Form} autoComplete="off">
          <div className={classes.InputWrapper}>
            <Input
              className={classes.Input}
              onChange={changeInputHandler}
              id="login"
              placeholder="Inserisci la tua email di utente"
              Icon={MailIcon}
            />

            <Input
              onChange={changeInputHandler}
              id="password"
              type="password"
              placeholder="Scrivi la tua Password"
              Icon={LockIcon}
            />
          </div>

          <Button fullWidth variant="Submit" onClick={submitHandler}>
            <CheckIcon /> Accedi
          </Button>
        </form>

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