// Cheers @PeteWilliams

/**
 * This config causes trouble with `next build`.
 *
 * Therefore, to build `styles.css`, I do the following:
 *
 * - Copy this config file to the root directory
 * - Run `npm run build:styles`
 * - Delete this config file from the root directory
 *
 * This is also why `build:styles` is not included in the
 * primary `build` command.
 */

'use strict';

const { readFile, writeFile } = require('fs/promises');

const getFileContentsOrEmptyString = async (path) => {
  try {
    return await readFile(path, { encoding: 'utf8' });
  } catch {
    return '';
  }
};

module.exports = {
  plugins: [
    /**
     * We're using postcss-modules to provide CSS Modules support (class name mangling)
     */
    require('postcss-modules')({
      /**
       * We hook into the getJSON which provides the file path and class name mapping as parameters
       */
      getJSON: async (inputFilePath, classes) => {
        /**
         * If the input file isn't a CSS Module then do nothing
         */
        if (!inputFilePath.endsWith('.module.css')) {
          return;
        }

        /**
         * The input files are the CSS files transpiled from SCSS. These are located in the
         * ./build/css directory. We want to map these files back to the ./src directory so that we
         * can output the TypeScript file containing the class name mappings beside the original
         * SCSS file.
         */
        const outputFilePath = inputFilePath
          .replace('.module.css', '.module.scss.ts')
          .replace('/build/css/', '/src/components/basics/');

        /**
         * We generate the new contents for the output file as a default export within an ES Module
         * which will allow for use as `import styles from 'file.module.scss'` in the consuming file
         */
        const newOutputFileContents = `export default ${JSON.stringify(classes)} as const;`;

        /**
         * We get the current contents of the output file (if it exists) so that we can compare the
         * current contents against the new contents. If they're the same, we don't perform the
         * write to the filesystem as it will trigger unnecessary filesystem change events
         */
        const currentOutputFileContents = await getFileContentsOrEmptyString(outputFilePath);

        if (currentOutputFileContents !== newOutputFileContents) {
          // eslint-disable-next-line no-console
          console.log(`Writing ${outputFilePath.slice(outputFilePath.indexOf('/src') + 1)}...`);

          await writeFile(outputFilePath, newOutputFileContents, { encoding: 'utf8' });
        }
      },
    }),
  ],
};
