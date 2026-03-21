import { fn } from 'storybook/test';
import { Button as ButtonComponent } from '~/components-core/form';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { options: ['default', 'clear', 'inverse', 'solid', 'solidDark'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    variant: 'default',
    type: 'button',
    children: 'Lorem ipsum',
    onClick: fn(),
  },
};

export const Clear: StoryObj<typeof meta> = {
  args: {
    variant: 'clear',
    type: 'button',
    children: 'Lorem ipsum',
    onClick: fn(),
  },
};

export const Inverse: StoryObj<typeof meta> = {
  args: {
    variant: 'inverse',
    type: 'button',
    children: 'Lorem ipsum',
    onClick: fn(),
  },
};

export const Solid: StoryObj<typeof meta> = {
  args: {
    variant: 'solid',
    type: 'button',
    children: 'Lorem ipsum',
    onClick: fn(),
  },
};

export const SolidDark: StoryObj<typeof meta> = {
  args: {
    variant: 'solidDark',
    type: 'button',
    children: 'Lorem ipsum',
    onClick: fn(),
  },
};
