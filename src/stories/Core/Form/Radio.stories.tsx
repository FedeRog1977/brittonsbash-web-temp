import { FC } from 'react';
import { Form, FormSection, Radio as RadioComponent, RadioProps } from '~/components-core/form';
import { noop } from '~/utils';
import type { Meta, StoryObj } from '@storybook/nextjs';

const RadioStory: FC<RadioProps> = ({ name, label, subLabel, disabled, error, value }) => (
  <div style={{ width: '500px' }}>
    <Form onSubmit={noop}>
      <FormSection heading="Series of Radio components" helpText="FormSection help text">
        <RadioComponent
          name={name}
          label={label}
          subLabel={subLabel}
          disabled={disabled}
          error={error}
          value={value}
        />

        <RadioComponent
          name={name}
          label={label}
          subLabel={subLabel}
          disabled={disabled}
          error={error}
          value={value}
        />
      </FormSection>
    </Form>
  </div>
);

const meta = {
  title: 'Radio',
  component: RadioStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    subLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof RadioStory>;

export default meta;

export const Radio: StoryObj<typeof meta> = {
  args: {
    name: 'lorem-name',
    label: 'Lorem label',
    subLabel: 'Lorem sub-label',
    disabled: false,
    error: undefined,
    value: 'lorem-value',
  },
  render: (args) => <RadioStory {...args} />,
};
