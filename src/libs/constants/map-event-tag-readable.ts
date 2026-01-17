import { EventTag } from '../types/event-tag.js';

export const mapEventTagReadable = (tag: EventTag): string => {
  switch (tag) {
    case 'general':
      return 'General';

    case 'miles':
      return 'Miles';

    case 'projects':
      return 'Projects';

    case 'roadies':
      return 'Roadies';

    case 'sleazyJetting':
      return 'Sleazy Jetting';
  }
};
