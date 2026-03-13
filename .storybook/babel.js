import presetTypeScript from '@babel/preset-typescript';

/** @type { import('@storybook/nextjs').StorybookConfig['babel'] } */
export const babelConfig = (config) => ({
  ...config,

  /**
   * `sourceType` tells to Babel how to treat files.
   *
   * The options and their meanings are:
   * - `script`: treat files as CommonJS
   * - `module`: treat files as ES Modules
   * - `unambiguous`: inspect files for `import`/`export` statements to work out the correct mode
   */
  sourceType: config.sourceType ?? 'unambiguous',

  /**
   * Add `@babel/preset-typescript` so that Babel can transform TypeScript files into JavaScript
   * files.
   *
   * Note: `@babel/preset-env` would normally be included but due to this being an internal
   *       application, we're going to see how we get on using fully modern JavaScript.
   */
  presets: [...config.presets, presetTypeScript],
});
