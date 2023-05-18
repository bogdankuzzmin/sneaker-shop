import React, { FC, InputHTMLAttributes, MouseEvent, useState } from 'react';
import cn from 'classnames';

import LookIcon from '@assets/icons/look.svg';

import classes from './Input.module.scss';

interface IInputProps {
  className?: string;
  iconRight?: boolean;
  Icon?: any;
}

export type TNativeInputProps = IInputProps & InputHTMLAttributes<HTMLInputElement>

const Input: FC<TNativeInputProps> = ({ className, Icon, iconRight, ...rest }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const isTypePassword = rest.type === 'password';

  const clickShowPassword = (event: MouseEvent<HTMLButtonElement>) => setIsPasswordShow((prevState) => !prevState);

  return (
    <div className={cn(className, classes.InputWrapper)}>
      <input
        className={cn(
          classes.Input,
          {
            [classes[iconRight ? 'InputRightPadding' : 'InputLeftPadding']]: Icon,
          },
        )}
        type="text"
        {...rest}
        {...(isTypePassword && {type: isPasswordShow ? 'text' : 'password'})}
      />

      {Icon && (
        <div className={cn(
          classes.Icon,
          {
            [classes[iconRight ? 'IconRight' : 'IconLeft']]: Icon,
          },
        )}>
          <Icon />
        </div>
      )}

      {isTypePassword && (
        <button
          type="button"
          className={cn(classes.PasswordButton, {[classes.PasswordButtonShowPassword]: isPasswordShow})}
          onClick={clickShowPassword}
        >
          <LookIcon />
        </button>
      )}
    </div>
  );
};

export default Input;