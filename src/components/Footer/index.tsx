import React from 'react';
import FooterList from '@components/Footer/partials/FooterList';
import Link from '@components/UI/Link'

import { SUPPORT_LIST, SOCIAL_NETWORK_LIST } from '@components/Footer/constants';

import classes from './Footer.module.scss';

const Footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.FooterWrapepr}>
      <div className={classes.FooterList}>
        <FooterList list={SUPPORT_LIST} title='Support' />
        <FooterList list={SOCIAL_NETWORK_LIST} title='Seguici' />
      </div>

      <div className={classes.FooterPrivacy}>
        <span>Tutti i diritti riservati</span>
        <span><Link url="/privacy" disableUnderline>Privacy</Link></span>
      </div>
    </div>
  </footer>
);

export default Footer;