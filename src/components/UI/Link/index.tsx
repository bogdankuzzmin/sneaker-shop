import React, { FC, ReactNode } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import cn from 'classnames';

import classes from './Link.module.scss';

interface ILinkProps {
  children: ReactNode;
  className?: string;
  disableUnderline?: boolean;
  isLinkExternal?: boolean;
  url: string;
}

const Link: FC<ILinkProps> = ({
  children,
  className,
  disableUnderline,
  isLinkExternal,
  url,
}) => (
  <LinkRouter
    className={cn(
      classes.Link, className,
      { [classes.DisableUnderline]: disableUnderline },
    )}
    to={url}
    {...(isLinkExternal && { target: '_blank' })}
  >
    {children}
  </LinkRouter>
);

export default Link;