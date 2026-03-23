export type Common = {
  name: string;
  label: string;
  autoComplete?: boolean;
  helpText?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};
