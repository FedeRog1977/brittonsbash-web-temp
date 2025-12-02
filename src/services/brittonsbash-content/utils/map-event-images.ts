import { Events, Img } from '~/libs/types';

export const mapEventImages = (events: Events): Img[] => {
  const images: Img[] = [];

  events[2024].forEach((event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2023].forEach((event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2022].forEach((event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2021].forEach((event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2020].forEach((event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  return images;
};
