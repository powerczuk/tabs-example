import React from 'react';
import { TabPanel } from 'react-aria-components';

interface TabsPanelItemProps {
  children: React.ReactNode
  id: string
}

export const TabsPanelItem = ({ children, id }: TabsPanelItemProps) => (
    <TabPanel id={id}>
      {children}
    </TabPanel>
  );
