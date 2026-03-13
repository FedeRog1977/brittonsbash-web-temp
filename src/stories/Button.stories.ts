import { fn } from 'storybook/test';
import { Button as ButtonComponent } from '~/components-basics/form';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { options: [''] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    variant: 'default',
    type: 'button',
    children: 'Lorem ipsum',
    onClick: fn(),
  },
};
