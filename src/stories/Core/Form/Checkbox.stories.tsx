import { FC } from 'react';
import {
  ClientForm,
  FormSection,
  Checkbox as CheckboxComponent,
} from '~/components-core/client-form';
import { noop } from '~/utils';
import { CheckboxProps } from '../../../components/core/reference/index.js';
import type { Meta, StoryObj } from '@storybook/nextjs';

const CheckboxStory: FC<CheckboxProps> = ({ name, label, subLabel, disabled, error }) => (
  <div style={{ width: '500px' }}>
    <ClientForm onSubmit={noop}>
      <FormSection heading="Series of Checkbox components" helpText="FormSection help text">
        <CheckboxComponent
          name={name}
          label={label}
          subLabel={subLabel}
          disabled={disabled}
          error={error}
        />

        <CheckboxComponent
          name={name}
          label={label}
          subLabel={subLabel}
          disabled={disabled}
          error={error}
        />
      </FormSection>
    </ClientForm>
  </div>
);

const meta = {
  title: 'Checkbox',
  component: CheckboxStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    subLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
} satisfies Meta<typeof CheckboxStory>;

export default meta;

export const Checkbox: StoryObj<typeof meta> = {
  args: {
    name: 'lorem-name',
    label: 'Lorem label',
    subLabel: 'Lorem sub-label',
    disabled: false,
    error: undefined,
  },
  render: (args) => <CheckboxStory {...args} />,
};
