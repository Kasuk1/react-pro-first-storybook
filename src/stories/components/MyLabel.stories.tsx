import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => {
  return <MyLabel {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false,
  color: 'primary',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#fafafa',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: 'h1',
  fontColor: '#ffffff',
  backgroundColor: '#000000',
};
