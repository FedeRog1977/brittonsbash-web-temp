import { FC } from 'react';
import {
  Form,
  FormSection,
  Select as SelectComponent,
  SelectOption,
  SelectProps,
} from '~/components-core/form';
import { noop } from '~/utils';
import type { Meta, StoryObj } from '@storybook/nextjs';

const SelectStory: FC<Omit<SelectProps, 'onChange'> & { optionCount: number }> = ({
  name,
  label,
  helpText,
  disabled,
  defaultValue,
  optionCount,
}) => {
  const options: SelectOption[] = [
    {
      label: 'Option 1',
      value: 'option-1',
    },
    {
      label: 'Option 2',
      value: 'option-2',
    },
    {
      label: 'Option 3',
      value: 'option-3',
    },
    {
      label: 'Option 4',
      value: 'option-4',
    },
    {
      label: 'Option 5',
      value: 'option-5',
    },
    {
      label: 'Option 6',
      value: 'option-6',
    },
  ];

  const optionsSelected = options.slice(0, optionCount);

  return (
    <div style={{ width: '500px' }}>
      <Form onSubmit={noop}>
        <FormSection heading="Series of Select components" helpText="FormSection help text">
          <SelectComponent
            name={name}
            label={label}
            options={optionsSelected}
            helpText={helpText}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={noop}
          />

          <SelectComponent
            name={name}
            label={label}
            options={optionsSelected}
            helpText={helpText}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={noop}
          />
        </FormSection>
      </Form>
    </div>
  );
};

const meta = {
  title: 'Select',
  component: SelectStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    helpText: { control: 'text' },
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
    optionCount: { control: { type: 'range', min: 1, max: 6 } },
  },
} satisfies Meta<typeof SelectStory>;

export default meta;

export const Select: StoryObj<typeof meta> = {
  args: {
    name: 'lorem-name',
    label: 'Lorem label',
    helpText: 'Lorem help text',
    disabled: false,
    defaultValue: undefined,
    optionCount: 3,
  },
  render: (args) => <SelectStory {...args} />,
};
