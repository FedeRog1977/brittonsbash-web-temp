import { FC } from 'react';
import { Typography } from '~/components-core/typography';

export type BodyProps = {
  content: string | string[];
};

export const Body: FC<BodyProps> = ({ content }) =>
  Array.isArray(content) ? (
    <>
      {content.map((contentSection, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Typography key={index} variant="body" textAlign="justify" paragraphMargins>
          {contentSection}
        </Typography>
      ))}
    </>
  ) : (
    <Typography variant="body" textAlign="justify">
      {content}
    </Typography>
  );
