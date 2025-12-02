// Cheers @PeteWilliams

import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import commandLineArgs from 'command-line-args';
import { glob } from 'glob';

const optionDefinitions = [
  {
    name: 'src',
    alias: 's',
    type: String,
    multiple: true,
    defaultOption: true,
    description: 'The source file globs',
  },
  {
    name: 'output',
    alias: 'o',
    type: String,
    description: 'The file to write the output to',
  },
];

const options = commandLineArgs(optionDefinitions);
const { src, output } = options;
const files = await glob(src);
writeFileSync(output, '');

files.forEach((file) => {
  appendFileSync(output, readFileSync(file));
});
