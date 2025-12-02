// Cheers @PeteWilliams

/**
 * Pull this file to the root level to build styles
 * It's currently failing `next build`
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
    require('postcss-modules')({
      getJSON: async (inputFilePath, classes) => {
        if (!inputFilePath.endsWith('.module.css')) {
          return;
        }

        const outputFilePath = inputFilePath
          .replace('.module.css', '.module.scss.ts')
          .replace('/build/css/', '/src/');

        const condensedOutputFilePath = outputFilePath.slice(outputFilePath.indexOf('/src') + 1);

        const newOutputFileContents = `export default ${JSON.stringify(classes)} as const;`;

        const currentOutputFileContents = await getFileContentsOrEmptyString(outputFilePath);
        if (currentOutputFileContents !== newOutputFileContents) {
          // eslint-disable-next-line no-console
          console.log(`Writing ${condensedOutputFilePath}...`);
          await writeFile(outputFilePath, newOutputFileContents, { encoding: 'utf8' });
        }
      },
    }),
  ],
};
