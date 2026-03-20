import {
  faCircle,
  faCircleDot,
  faSquare,
  faSquareCheck,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Variant } from '../types/variant.js';

export const getIconName = (variant: Variant, checked: boolean): IconDefinition => {
  switch (variant) {
    case 'checkbox':
      return checked ? faSquareCheck : faSquare;

    case 'radio':
      return checked ? faCircleDot : faCircle;
  }
};
