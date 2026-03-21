import { FC } from 'react';
import { HelpText } from '../help-text/index.js';

export type FieldHelpProps = {
  helpText?: string;
  errorText?: string;
  disabled?: boolean;
};

export const FieldHelp: FC<FieldHelpProps> = ({ helpText, errorText, disabled = false }) => {
  if (!(helpText || errorText)) {
    return null;
  }

  return (
    <>
      {Boolean(helpText) && !errorText && <HelpText disabled={disabled}>{helpText}</HelpText>}

      {Boolean(errorText) && (
        <HelpText disabled={disabled} error>
          {errorText}
        </HelpText>
      )}
    </>
  );
};
