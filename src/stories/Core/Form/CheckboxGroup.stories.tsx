import { FC } from 'react';
import {
  Form,
  FormSection,
  CheckboxGroup as CheckboxGroupComponent,
  CheckboxGroupProps,
} from '~/components-core/form';
import { noop } from '~/utils';
import type { Meta, StoryObj } from '@storybook/nextjs';

const CheckboxGroupStory: FC<CheckboxGroupProps> = ({ options }) => (
  <div style={{ width: '500px' }}>
    <Form onSubmit={noop}>
      <FormSection heading="Series of CheckboxGroup components" helpText="FormSection help text">
        <CheckboxGroupComponent name="lorem-name" options={options} />

        <CheckboxGroupComponent name="lorem-name" options={options} />
      </FormSection>
    </Form>
  </div>
);

const meta = {
  title: 'CheckboxGroup',
  component: CheckboxGroupStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
  },
} satisfies Meta<typeof CheckboxGroupStory>;

export default meta;

export const CheckboxGroup: StoryObj<typeof meta> = {
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
  render: (args) => <CheckboxGroupStory {...args} />,
};
