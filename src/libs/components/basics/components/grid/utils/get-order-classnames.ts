import { toUpperCase, isDefined } from '~/libs/utils';
import { Order } from '../types/order.js';

export const getOrderClassNames = (
  styles: Record<string, string>,
  order: Order | undefined,
): string[] => {
  if (order === undefined) {
    return [];
  }

  const santisedOrder: Order = typeof order === 'number' ? { xs: order } : order;

  return Object.entries(santisedOrder)
    .map(([breakpoint, orderValue]) => styles[`order${toUpperCase(breakpoint)}${orderValue}`])
    .filter(isDefined);
};
