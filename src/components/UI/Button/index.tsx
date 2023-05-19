import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  variant?: 'Secondary' | 'Submit';
}

export type TNativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<TNativeButtonProps> = ({
  children,
  className,
  fullWidth,
  variant,
  ...rest
}) => {
  return <button
    className={cn(
    classes.Button,
    className,
    {
      [classes.ButtonFullWidth]: fullWidth,
      [classes[`Button${variant}`]] :variant,
    }

  )}
    {...rest}
  >
    {children}
  </button>;
};

export default Button;