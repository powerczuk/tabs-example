import React from 'react';
import { Tabs as AriaTabs, TabList } from 'react-aria-components';
import type { Key } from 'react-aria-components';

import { TabsListItem } from '../TabsListItem/TabsListItem';
import { TabsPanelItem } from '../TabsPanelItem/TabsPanelItem';

import styles from './TabsList.module.css';

type TabsItem = {
  id: string;
  label: string;
  content: JSX.Element;
};

interface TabsProps {
  tabs: TabsItem[];
  defaultActiveItemId?: string;
}

export const TabsList = ({ tabs, defaultActiveItemId }: TabsProps) => {
  const selectedKeyInitialState = defaultActiveItemId || tabs[0]?.id;
  const [selectedKey, setSelectedKey] = React.useState<Key>(selectedKeyInitialState);

  return (
    <AriaTabs selectedKey={selectedKey} onSelectionChange={setSelectedKey}>
      <TabList aria-label="My Tabs" className={styles.wrapper}>
        {tabs.map((tab) => (
          <TabsListItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={selectedKey === tab.id}
          />
        ))}
      </TabList>
      {tabs.map((tab) => (
        <TabsPanelItem key={tab.id} id={tab.id}>
          {tab.content}
        </TabsPanelItem>
      ))}
    </AriaTabs>
  );
};
