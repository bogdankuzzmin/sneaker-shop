import React, { FC, ReactNode } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import cn from 'classnames';

import classes from './Link.module.scss';

interface ILinkProps {
  children: ReactNode;
  className?: string;
  url: string;
}

const Link: FC<ILinkProps> = ({
  children,
  className,
  url,
}) => (
  <LinkRouter className={cn(classes.Link, className)} to={url}>
    {children}
  </LinkRouter>
);

export default Link;