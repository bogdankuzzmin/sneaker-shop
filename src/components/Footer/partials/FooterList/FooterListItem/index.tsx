import React, { FC } from 'react';
import Link from '@components/UI/Link';

import { IFooterListItem } from '@components/Footer/types';

import classes from './FooterListItem.module.scss';

const FooterListItem: FC<IFooterListItem> = ({ name, url, isLinkExternal = false, Icon }) => (
  <li className={classes.FooterListItem}>
    <Link url={url} disableUnderline isLinkExternal={isLinkExternal}>
      {Icon && (
        <span className={classes.Icon}>
          <Icon />
        </span>
      )}

      {name}
    </Link>
  </li>
);

export default FooterListItem;