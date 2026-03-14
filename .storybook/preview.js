import '../src/app/_reference/styles/styles.css';

/** @type { import('@storybook/nextjs').Preview } */
const preview = {
  parameters: {
    /**
     * We use the default regex that looks for `on` followed be an uppercase letter to classify
     * actions that should be logged in the `Actions` addon tab.
     *
     * Examples: `onClick`, `onBlur`, `onHover`, `onClose`
     */
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      /**
       * We want to show description and default value information in the `Controls` addon tab for
       * each individual story - not only the generated summary documentation.
       */
      expanded: true,

      /**
       * We want to use the default regexes that offer:
       *
       * - colour pickers for `background` and `color` props
       * - date pickers for a `Date` prop
       *
       * These will need to be tweaked as we move forward.
       */
      matchers: {
        color: /(background|color)$/iu,
        date: /date$/iu,
      },
    },
  },
};

export default preview;
