import React, {FC, ReactNode, useEffect} from 'react';
import cn from 'classnames';

import Breadcrumbs from '@components/Breadcrumbs';

import classes from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
  disableBreadcrumbs?: boolean;
  title?: string;
  variant?: 'Center';
}


const Layout: FC<ILayoutProps> = ({
  children,
  disableBreadcrumbs,
  title,
  variant,
}) => {
  useEffect(() => void (document.title = title || 'Sneakers Shop'), [title])

  return <>
    <main className={cn(classes.Layout, { [classes[`Layout${variant}`]]: variant })}>
      {!disableBreadcrumbs && <Breadcrumbs />}

      {title && <h1 className="title">{title}</h1>}

      {children}
    </main>
  </>
};

export default Layout;