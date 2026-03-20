import { FC } from 'react';
import { Spacing } from '../../../components/spacing/spacing.jsx';
import { HelpText } from '../help-text/index.js';

export type FieldHelpProps = {
  helpText?: string;
  errorText?: string;
  disabled?: boolean;
  hideErrorIfDisabled?: boolean;
};

export const FieldHelp: FC<FieldHelpProps> = ({
  helpText,
  errorText,
  disabled = false,
  hideErrorIfDisabled = false,
}) => {
  if (!(helpText || errorText)) {
    return null;
  }

  return (
    <Spacing marginTop="2xs">
      {Boolean(helpText) && !errorText && <HelpText disabled={disabled}>{helpText}</HelpText>}

      {Boolean(errorText) && !(hideErrorIfDisabled && disabled) && (
        <HelpText disabled={disabled} error>
          {errorText}
        </HelpText>
      )}
    </Spacing>
  );
};
