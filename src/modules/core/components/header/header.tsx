import React from 'react';
import { Localized } from '@fluent/react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo';
import styles from './header.css';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <div className={styles.navigation}>
        <Link className={styles.navigationItem} to="/">
          <Localized id="home">
            Home
          </Localized>
        </Link>
        <Link className={styles.navigationItem} to="/not-found">
          <Localized id="not-found">
            Not found!
          </Localized>
        </Link>
      </div>
    </div>
  );
};
