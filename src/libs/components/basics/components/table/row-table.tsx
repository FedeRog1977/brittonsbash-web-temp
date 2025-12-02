import { FC } from 'react';
import styles from './table.module.scss.js';
import { generateUniqueKey } from '~/libs/utils';
import { FlexItem } from '../flex/flex-item.js';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';
import { Row } from './types/row.js';

export type RowTableProps = {
  titleRow: Row;
  rows: Row[];
};

// TODO: segment these into the text content, and the styled table
export const RowTable: FC<RowTableProps> = ({ titleRow, rows }) => (
  <div className={styles.containerRows}>
    <div className={styles.table}>
      <Flex direction="vertical" gap="xs">
        <Flex direction="horizontal" alignHorizontal="apart">
          {titleRow.leftItem != null ? (
            <FlexItem basis={4}>
              <Typography variant="footnote" boldFace>
                {titleRow.leftItem}
              </Typography>
            </FlexItem>
          ) : (
            <FlexItem basis={4}>
              <Typography variant="footnote">
                <>&nbsp;</>
              </Typography>
            </FlexItem>
          )}

          <FlexItem basis={8}>
            <Typography variant="footnote" boldFace textAlign="right">
              {titleRow.rightItem}
            </Typography>
          </FlexItem>
        </Flex>

        <Flex direction="vertical" gap="xs">
          {rows?.map(({ leftItem, rightItem }, index) => {
            if (leftItem && rightItem) {
              return (
                <Flex key={generateUniqueKey(index)} direction="horizontal" alignHorizontal="apart">
                  <FlexItem basis={4}>
                    <Typography variant="footnote" boldFace>
                      {leftItem}
                    </Typography>
                  </FlexItem>

                  <FlexItem basis={8}>
                    <Typography variant="footnote" textAlign="right">
                      {rightItem}
                    </Typography>
                  </FlexItem>
                </Flex>
              );
            }

            return null;
          })}
        </Flex>
      </Flex>
    </div>
  </div>
);
