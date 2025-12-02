export const toUpperCase = <S extends string>(input: S): Capitalize<S> =>
  `${input.slice(0, 1).toUpperCase()}${input.slice(1)}` as Capitalize<S>;
