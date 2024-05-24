import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TabsList } from '../../components/Tabs/TabsList/TabsList';

const meta = {
  title: 'Example/TabsList',
  component: TabsList,
  tags: ['autodocs']
} satisfies Meta<typeof TabsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockedTabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>
  }
]

export const TabsListWithPredefinedDefaultActiveItem: Story = {
  args: {
    defaultActiveItemId: 'tab2',
    tabs: mockedTabs
  }
};

export const TabsListWithoutPredefinedActiveItem: Story = {
  args: {
    tabs: mockedTabs
  }
};
