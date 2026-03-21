import { FC } from 'react';
import {
  Form,
  FormSection,
  Checkbox as CheckboxComponent,
  CheckboxProps,
} from '~/components-core/form';
import { noop } from '~/utils';
import type { Meta, StoryObj } from '@storybook/nextjs';

const CheckboxStory: FC<CheckboxProps> = ({ name, label, subLabel, disabled, error }) => (
  <div style={{ width: '500px' }}>
    <Form onSubmit={noop}>
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
    </Form>
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
