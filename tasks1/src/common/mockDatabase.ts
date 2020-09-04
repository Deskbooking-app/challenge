type Map<TValue> = {
  [key: string]: TValue;
};

const mockDabase: Map<string> = {};

const set = (key: string, t: Map<string | number | null>) => {
  mockDabase[key] = JSON.stringify(t);
  return Promise.resolve();
};

const get = <T>(key: string): Promise<T | undefined> => {
  const storedValue = mockDabase[key];
  return Promise.resolve(
    storedValue ? (JSON.parse(storedValue) as T) : undefined
  );
};

export { set, get };
