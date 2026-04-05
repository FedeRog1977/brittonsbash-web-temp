import { FC } from 'react';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';
import styles from './table.module.scss.js';
import { Column } from './types/column.js';

export type ColumnTableProps = {
  leftColumn: Column;
  rightColumns: Column[];
};

// TODO: segment these into the text content, and the styled table
export const ColumnTable: FC<ColumnTableProps> = ({ leftColumn, rightColumns }) => (
  <div className={styles.containerColumns}>
    <div className={styles.table}>
      <Flex direction="horizontal" alignHorizontal="apart">
        <Flex direction="vertical" alignVertical="bottom" gap="xs">
          <Typography variant="h4" boldFace>
            {/* eslint-disable-next-line no-negated-condition, @typescript-eslint/no-unnecessary-condition */}
            {leftColumn.title !== null ? leftColumn.title : <>&nbsp;</>}
          </Typography>

          {leftColumn.entries.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Typography key={index} variant="footnote" boldFace>
              {entry}
            </Typography>
          ))}
        </Flex>

        <Flex direction="horizontal" gap="lg">
          {rightColumns.map(({ title, entries }, index) => (
            <Flex
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              direction="vertical"
              alignVertical="bottom"
              alignHorizontal="right"
              gap="xs"
            >
              <Typography variant="body" boldFace>
                {title}
              </Typography>

              {entries.map((entry, entriesIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <Typography key={entriesIndex} variant="footnote">
                  {entry}
                </Typography>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  </div>
);
