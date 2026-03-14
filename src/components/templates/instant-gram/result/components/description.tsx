import { FC, JSX, useState } from 'react';
import { Button } from '~/components-basics/button';
import { Typography } from '~/components-basics/typography';

type DescriptionProps = {
  text: string | string[];
};

export const Description: FC<DescriptionProps> = ({ text }) => {
  const [readMore, setReadMore] = useState(false);

  // eslint-disable-next-line @typescript-eslint/init-declarations
  let content: JSX.Element;

  if (Array.isArray(text)) {
    content = (
      <>
        {text.map((paragraph) => (
          <Typography key={paragraph} variant="footnote" textAlign="justify" markdown>
            {paragraph}
          </Typography>
        ))}
      </>
    );
  } else {
    content =
      text.length > 500 ? (
        <>
          <Typography variant="footnote" textAlign="justify" markdown>
            {readMore ? text : `${text.substring(0, 500)} ...`}
          </Typography>

          <Button
            variant="clear"
            onClick={(): void => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? 'Condense' : 'Read more'}
          </Button>
        </>
      ) : (
        <Typography variant="footnote" textAlign="justify" markdown>
          {text}
        </Typography>
      );
  }

  return content;
};
