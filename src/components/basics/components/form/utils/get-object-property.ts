export const getObjectProperty = <T extends object>(obj: T, propertyPath: string): unknown => {
  if (Object.hasOwn(obj, propertyPath)) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return obj[propertyPath as keyof T];
  }

  const [firstProperty, ...otherProperties] = propertyPath.split('.');

  if (firstProperty && Object.hasOwn(obj, firstProperty)) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const firstPropertyValue = obj[firstProperty as keyof T];

    if (typeof firstPropertyValue === 'object' && firstPropertyValue !== null) {
      return getObjectProperty(firstPropertyValue, otherProperties.join('.'));
    }
  }
};
