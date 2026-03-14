export const setObjectProperty = (
  obj: Record<string, unknown>,
  propertyPath: string,
  value: unknown,
): void => {
  const [firstProperty, ...otherProperties] = propertyPath.split('.');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const firstPropertyPath = firstProperty as string;

  if (otherProperties.length === 0) {
    obj[firstPropertyPath] = value;
  } else {
    obj[firstPropertyPath] =
      typeof obj[firstPropertyPath] === 'object' && obj[firstPropertyPath] !== null
        ? obj[firstPropertyPath]
        : {};

    setObjectProperty(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      obj[firstPropertyPath] as Record<string, unknown>,
      otherProperties.join('.'),
      value,
    );
  }
};
