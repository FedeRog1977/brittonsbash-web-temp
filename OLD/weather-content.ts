import { PageBackgroundProps } from '@libs/components-basics/page-background';
import { FootnoteTileProps } from '@libs/components-blocks/footnote-tile';

type WeatherProps = {
  background: PageBackgroundProps;
  tileOne: FootnoteTileProps;
};

export const weatherContent: WeatherProps = {
  background: { content: 'Mountain Weather' },
  tileOne: {
    content: 'All weather data is provided by OpenWeather® One Call API 3.0',
  },
};
