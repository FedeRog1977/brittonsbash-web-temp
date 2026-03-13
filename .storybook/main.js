import { babelConfig } from './babel.js';
import { webpackConfig } from './webpack.js';

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  /**
   * Globs representing where to find stories and other rendered files
   */
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  /**
   * The addons that we want to add to Storybook to provide extra functionality
   */
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-onboarding'],

  framework: '@storybook/nextjs',

  /**
   * To ensure the lightest possible Storybook installation in terms of dependencies and
   * configuration, we've opted to forego the recommended Storybook installation method of adding it
   * alongside an existing application framework (such as Create React App or Next.js).
   *
   * This recommendation is made due to the assumption that there will be components within an
   * existing application that may depend on specific configuration (for example: Babel or Webpack)
   * that exists within that application that will either need to be consumed or replicated by
   * Storybook. This is not the case for us.
   *
   * In our specific case, this means that any additional Babel or Webpack configuration that would
   * have been loaded from Storybook presets (or more specific Storybook frameworks like Next.js)
   * must be manually added if required.
   *
   * Initial testing indicates that very little of the missing configuration is needed. This may
   * change as our needs change.
   *
   * We also want to support custom configuration of these tools should we need it.
   */
  babel: babelConfig,
  webpackFinal: webpackConfig,
};
export default config;
