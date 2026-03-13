/** @type { import('@storybook/nextjs').StorybookConfig['webpackFinal'] } */
export const webpackConfig = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,

    /**
     * To support ES Modules and TypeScript using `"module": "NodeNext"`, we specify aliases that
     * `.js` file lookups could be referring to.
     */
    extensionAlias: {
      ...config.resolve?.extensionAlias,
      '.js': ['.ts', '.js'],
      '.jsx': ['.tsx', '.jsx'],
    },
  },
});
