import { FC } from 'react';
import {
  ClientForm,
  FormSection,
  RadioGroup as RadioGroupComponent,
  RadioGroupProps,
} from '~/components-core/client-form';
import { noop } from '~/utils';
import type { Meta, StoryObj } from '@storybook/nextjs';

const RadioGroupStory: FC<RadioGroupProps> = ({ options }) => (
  <div style={{ width: '500px' }}>
    <ClientForm onSubmit={noop}>
      <FormSection heading="Series of RadioGroup components" helpText="FormSection help text">
        <RadioGroupComponent name="lorem-name" options={options} />

        <RadioGroupComponent name="lorem-name" options={options} />
      </FormSection>
    </ClientForm>
  </div>
);

const meta = {
  title: 'RadioGroup',
  component: RadioGroupStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

export const RadioGroup: StoryObj<typeof meta> = {
  args: {
    name: 'lorem-name',
    options: [
      {
        label: 'Lorem label 1',
        subLabel: 'Lorem sub-label 1',
        error: undefined,
        value: 'lorem-value-1',
      },
      {
        label: 'Lorem label 2',
        subLabel: 'Lorem sub-label 2',
        error: undefined,
        value: 'lorem-value-2',
      },
      {
        label: 'Lorem label 3',
        subLabel: 'Lorem sub-label 3',
        error: undefined,
        value: 'lorem-value-3',
      },
    ],
  },
  render: (args) => <RadioGroupStory {...args} />,
};
