import { FC } from 'react';
import { Tile } from '~/components-core/tile';
import { Typography } from '~/components-core/typography';

export type FootnoteTileProps = {
  content: string | string[];
};

export const FootnoteTile: FC<FootnoteTileProps> = ({ content }) => (
  <Tile type="clear">
    {Array.isArray(content) ? (
      <>
        {content.map((contentSection, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Typography key={index} variant="footnote" textAlign="justify" paragraphMargins>
            {contentSection}
          </Typography>
        ))}
      </>
    ) : (
      <Typography variant="footnote" textAlign="justify">
        {content}
      </Typography>
    )}
  </Tile>
);
