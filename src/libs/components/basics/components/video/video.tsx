import { isMobile } from '~/libs/utils';
import { FC } from 'react';

export type VideoProps = {
  video: string;
  controls?: boolean;
};

export const Video: FC<VideoProps> = ({ video, controls = false }) => (
  <iframe
    title={`yt-${video}`}
    frameBorder="none"
    width="100%"
    height={isMobile() ? '250px' : '750px'}
    src={`https://www.youtube.com/embed/${video}${controls ? '' : '?controls=0'}`}
  />
);
