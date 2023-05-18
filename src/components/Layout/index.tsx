import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import classes from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
  variant?: 'Center';
}

const Layout: FC<ILayoutProps> = ({
  children,
  variant,
}) => (
  <div className={cn(classes.Layout, { [classes[`Layout${variant}`]]: variant })}>
    <main>
      {children}
    </main>
  </div>
);

export default Layout;