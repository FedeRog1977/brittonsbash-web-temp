import { EventTag } from '../types/event-tag.js';

export const mapEventTagReadable = (tag: EventTag): string => {
  switch (tag) {
    case 'general':
      return 'General';

    case 'projects':
      return 'Projects';

    case 'roadies':
      return 'Roadies';

    case 'tennis':
      return 'Tennis';

    case 'miles':
      return 'Miles';

    case 'sleazyJetting':
      return 'Sleazy Jetting';
  }
};
