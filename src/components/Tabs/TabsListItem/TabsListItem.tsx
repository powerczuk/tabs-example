import React from 'react';
import cx from 'classnames';
import { Tab } from 'react-aria-components';

import styles from './TabsListItem.module.css';

interface TabsListItemProps {
  id: string;
  label: string;
  isActive: boolean;
}

export const TabsListItem = ({ id, label, isActive }: TabsListItemProps) => {
  const className = cx(styles.base, {
    [`${styles.base} ${styles.active}`]: isActive
  });

  return (
    <Tab id={id} className={className}>
      {label}
    </Tab>
  );
};
