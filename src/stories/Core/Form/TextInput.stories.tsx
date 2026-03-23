import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import {
  TextInput as TextInputComponent,
  Form,
  FormSection,
  TextInputProps,
} from '~/components-core/form';
import { noop } from '~/utils';

const TextInputStory: FC<TextInputProps> = ({
  name,
  label,
  type,
  icon,
  reverseIcon,
  autoComplete,
  helpText,
  disabled,
}) => (
  <div style={{ width: '500px' }}>
    <Form onSubmit={noop}>
      <FormSection heading="Series of TextInput components" helpText="FormSection help text">
        <TextInputComponent
          name={name}
          label={label}
          type={type}
          icon={icon}
          reverseIcon={reverseIcon}
          autoComplete={autoComplete}
          helpText={helpText}
          disabled={disabled}
        />

        <TextInputComponent
          name={name}
          label={label}
          type={type}
          icon={icon}
          reverseIcon={reverseIcon}
          autoComplete={autoComplete}
          helpText={helpText}
          disabled={disabled}
        />
      </FormSection>
    </Form>
  </div>
);

const meta = {
  title: 'TextInput',
  component: TextInputComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'select' },
    icon: { control: 'select' },
    reverseIcon: { control: 'boolean' },
    autoComplete: { control: 'boolean' },
    helpText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof TextInputComponent>;

export default meta;

export const TextInput: StoryObj<typeof meta> = {
  args: {
    name: 'lorem-name',
    label: 'Lorem label',
    type: 'text',
    icon: faThumbsUp,
    reverseIcon: false,
    autoComplete: undefined,
    helpText: 'Lorem help text',
    disabled: false,
  },
  render: (args) => <TextInputStory {...args} />,
};
