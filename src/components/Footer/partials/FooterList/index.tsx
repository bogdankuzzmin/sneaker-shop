import React, { FC } from 'react';

import FooterListItem from '@components/Footer/partials/FooterList/FooterListItem';

import { IFooterListProps } from '@components/Footer/types';

import classes from './FooterList.module.scss';

const FooterList: FC<IFooterListProps> = ({ list, title }) => (
  <div>
    <h3 className={classes.FooterListTitle}>{title}</h3>

    <ul className={classes.FooterList}>
      {list.map(({ name, url, isLinkExternal, Icon }) =>
        <FooterListItem name={name} url={url} isLinkExternal={isLinkExternal} Icon={Icon} />
      )}
    </ul>
  </div>
);

export default FooterList;