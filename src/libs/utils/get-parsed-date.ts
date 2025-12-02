export const getParsedDate = (
  date: string,
  config:
    | 'TIME_OF_DAY'
    | 'TIME_OF_DAY_HUMAN'
    | 'UK_CALENDAR'
    | 'ISO'
    | 'IS_PAST'
    | 'IS_PRESENT'
    | 'IS_FUTURE',
): string | boolean => {
  const dateNow = new Date();
  const dateParsed = new Date(date);

  let hh = dateParsed.getHours();
  const hhPrefix = hh < 10 ? '0' : '';
  const hhSuffix = hh >= 12 ? 'pm' : 'am';
  hh = hh % 12;
  // eslint-disable-next-line no-unneeded-ternary
  hh = hh ? hh : 12;

  const mi = dateParsed.getMinutes();
  const miSuffix = mi < 10 ? `0${mi}` : mi;
  const miHumanPrefix = mi < 10 ? '0' : '';
  const miHumanSuffix = mi === 0 ? '' : `:${miHumanPrefix}${mi}`;

  const dd = dateParsed.getDate();
  const mm = dateParsed.getMonth() + 1;
  const yyyy = dateParsed.getFullYear();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isoDate = dateParsed.toISOString().split('T')[0]!;

  switch (config) {
    case 'TIME_OF_DAY':
      return `${hhPrefix}${dateParsed.getHours()}:${miSuffix}`;

    case 'TIME_OF_DAY_HUMAN':
      return `${hh}${miHumanSuffix}${hhSuffix}`;

    case 'UK_CALENDAR':
      return `${dd}/${mm}/${yyyy}`;

    case 'ISO':
      return isoDate;

    case 'IS_PAST':
      return dateParsed.getTime() < dateNow.getTime();

    case 'IS_PRESENT':
      return dateParsed.getTime() === dateNow.getTime();

    case 'IS_FUTURE':
      return dateParsed.getTime() > dateNow.getTime();
  }
};
