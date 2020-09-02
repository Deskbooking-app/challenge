import range from "lodash/range";

type Results = {
  spaces: Space[];
};

type Space = {
  name: string;
};



const searchSpaces = (text: string): Promise<Results> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const count = Math.round(1 + Math.random() * 3);

      const spaces = range(count).map((index) => ({
        name: `${text} number ${index}`,
      }));

      res(spaces);
    }, Math.round(Math.random() * 1000 * 3));
  });
};

export { searchSpaces };
