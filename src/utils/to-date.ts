export const toDate = (dt: number) => {
  const hour = new Date(dt * 1000).toLocaleTimeString('en-us', {
    hour: 'numeric',
  });

  const time = new Date(dt * 1000).toLocaleTimeString('en-uk', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const day = new Date(dt * 1000).toLocaleDateString('en-uk', {
    day: 'numeric',
  });

  const weekday = new Date(dt * 1000).toLocaleDateString('en-uk', {
    weekday: 'long',
  });

  const weekdayPartial = new Date(dt * 1000).toLocaleDateString('en-uk', {
    weekday: 'short',
  });

  var daySuffix = '';

  // st: 1, 21, 31
  // nd: 2, 22
  // rd: 3, 23
  // th: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30

  if (day === '1' || day === '21' || day === '31') {
    daySuffix = 'st';
  } else if (day === '2' || day === '22') {
    daySuffix = 'nd';
  } else if (day === '3' || day === '23') {
    daySuffix = 'rd';
  } else if (
    day.endsWith('0') ||
    day.endsWith('4') ||
    day.endsWith('5') ||
    day.endsWith('6') ||
    day.endsWith('7') ||
    day.endsWith('8') ||
    day.endsWith('9') ||
    day === '11' ||
    day === '12' ||
    day === '13'
  ) {
    daySuffix = 'th';
  }

  const month = new Date(dt * 1000).toLocaleDateString('en-uk', {
    month: 'long',
  });

  const dayOfMonth = `${day}${daySuffix} of ${month}`;

  const dayOfMonthPartial = `${day}${daySuffix}`;

  return {
    hour,
    time,
    day,
    weekday,
    weekdayPartial,
    month,
    dayOfMonth,
    dayOfMonthPartial,
  };
};
