type Type = 'decimal' | 'percentage';

export const getRate = (type: Type, numerator: number, denominator: number) => {
  switch (type) {
    case 'decimal':
      return `${(numerator / denominator).toFixed(4)}`;

    case 'percentage':
      return `${((numerator / denominator) * 100).toFixed(2)}%`;
  }
};
