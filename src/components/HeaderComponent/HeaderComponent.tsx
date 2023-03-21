import React, { FC } from 'react';
import styles from './HeaderComponent.module.scss';

interface HeaderComponentProps {}

const HeaderComponent: FC<HeaderComponentProps> = () => (
  <div className={styles.HeaderComponent}>
    HeaderComponent Component
  </div>
);

export default HeaderComponent;
