import React from 'react';
import cn from 'classnames';

import Layout from '@components/Layout';
import Link from "@components/UI/Link";

import { Paths } from '@utils/constants/routes';
import classes from './NotFound.module.scss';

const NotFound = () => (
  <Layout disableBreadcrumbs disableFooter variant="Center">
    <div className={classes.NotFound}>
      <h2 className={cn(classes.Title, 'title')}>Page was not Found!</h2>

      <Link className={classes.Link} url={Paths.esplora}>Back to the Esplora</Link>
    </div>
  </Layout>
);

export default NotFound;