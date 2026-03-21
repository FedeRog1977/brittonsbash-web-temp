import { FC, ReactNode } from 'react';
import { FieldHelp } from '../../../../reference/index.js';
import { Flex } from '../../../flex/flex.jsx';
import { Typography } from '../../../typography/typography.js';
import styles from './form-section.module.scss.js';

export type FormSectionProps = {
  children: ReactNode;
  heading?: string;
  helpText?: string;
};

export const FormSection: FC<FormSectionProps> = ({ children, heading, helpText }) => (
  <fieldset className={styles.formSection}>
    <Flex direction="vertical" gap="xl">
      <Flex direction="vertical" gap="2xs">
        {heading ? (
          <legend>
            <Typography variant="h4">{heading}</Typography>
          </legend>
        ) : null}

        {helpText ? <FieldHelp helpText={helpText} /> : null}
      </Flex>

      <Flex direction="vertical" gap="lg">
        {children}
      </Flex>
    </Flex>
  </fieldset>
);
