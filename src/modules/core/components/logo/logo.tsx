import type { FC } from 'react';
import React from 'react';
import classNames from 'classnames';
import styles from './logo.css';
import { Localized } from '@fluent/react';

interface LogoProps {
  inverted?: boolean;
}

export const Logo: FC<LogoProps> = ({ inverted }) => {
  return (
    <div className={classNames(styles.root, { [styles.inverted!]: inverted! })}>
      <Localized id="welcome-back-home">
        Welcome back home!
      </Localized>
    </div>
  );
};
