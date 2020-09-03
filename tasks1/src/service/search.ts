import range from "lodash/range";

type Results = {
  spaces: Space[];
};

type Space = {
  name: string;
};

/**
 * TODO: 
 * 1) Fix the API
 * 2) Extract functions for generating numbers.
 */

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

/**
 * TODO:
 * 3) Create a function that delays a promise chain by a provided value.
 * 4) Write a test for the function you created
 * Example usage:
 * searchSpaces("")
 *  .then(delay(500))
 *  .then(a => a.spaces)
 */

export { searchSpaces };
