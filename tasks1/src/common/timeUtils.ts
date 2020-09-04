const now = Date.now;

const millisPerDay = 8.64e7;
const millisPerHour = 3600000;

const localDay = (timezone: number): number => {
  return Math.floor((now() + timezone * millisPerHour) / millisPerDay);
};

const beginOfDay = (timezone: number, day: number): number =>
  day * millisPerDay - timezone * millisPerHour;

const localDayOnTime = (timezone: number, timestamp: number): number => {
  return Math.floor((timestamp + timezone * millisPerHour) / millisPerDay);
};

// Sunday is 0
const dayOfWeek = (epochDay: number): number => {
  const EPOCH_DAY_ONE_WAS_THURSDAY = 3;
  return (epochDay - EPOCH_DAY_ONE_WAS_THURSDAY) % 7;
};

export { dayOfWeek, localDayOnTime, localDay, beginOfDay };
