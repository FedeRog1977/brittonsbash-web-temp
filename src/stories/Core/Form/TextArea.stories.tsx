import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import {
  TextArea as TextAreaComponent,
  Form,
  FormSection,
  TextAreaProps,
} from '~/components-core/form';
import { noop } from '~/utils';

const TextAreaStory: FC<TextAreaProps> = ({
  name,
  label,
  type,
  autoComplete,
  helpText,
  disabled,
}) => (
  <div style={{ width: '500px' }}>
    <Form onSubmit={noop}>
      <FormSection heading="Series of TextArea components" helpText="FormSection help text">
        <TextAreaComponent
          name={name}
          label={label}
          type={type}
          autoComplete={autoComplete}
          helpText={helpText}
          disabled={disabled}
        />

        <TextAreaComponent
          name={name}
          label={label}
          type={type}
          autoComplete={autoComplete}
          helpText={helpText}
          disabled={disabled}
        />
      </FormSection>
    </Form>
  </div>
);

const meta = {
  title: 'TextArea',
  component: TextAreaComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'select' },
    autoComplete: { control: 'boolean' },
    helpText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof TextAreaComponent>;

export default meta;

export const TextArea: StoryObj<typeof meta> = {
  args: {
    name: 'lorem-name',
    label: 'Lorem label',
    type: 'textarea',
    autoComplete: undefined,
    helpText: 'Lorem help text',
    disabled: false,
  },
  render: (args) => <TextAreaStory {...args} />,
};
