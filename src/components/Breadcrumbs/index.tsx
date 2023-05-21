import React, { FC } from 'react';
import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '@utils/string/capitalizeFirstLetter';

import classes from './Breadcrumbs.module.scss';
import { Paths } from '@utils/constants/routes';

const Breadcrumbs: FC = () => {
  const location = useLocation();

  let currentLink = '';
  const pathnames = location.pathname.split('/').filter((crumb) => crumb !== '');

  const crumbs = pathnames
    .map((crumb, index) => {
      const crumbName = capitalizeFirstLetter(crumb).split('-').join(' ');
      currentLink += `/${crumb}`;

      return (
        <li className={classes.Item} key={crumb}>
          {pathnames.length - 1 === index
            ? <span>{crumbName}</span>
            : <Link to={currentLink}>{crumbName}</Link>}
        </li>
      );
    });

  return (
    <ul className={classes.List}>
      <li className={classes.Item}>
        <Link to={Paths.root}>
          Home
        </Link>
      </li>
      {crumbs}
    </ul>
  );
};

export default Breadcrumbs;