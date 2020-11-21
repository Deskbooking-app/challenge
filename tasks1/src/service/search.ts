import { range, random } from "lodash";

type Results = {
  spaces: Space[];
};

type Space = {
  name: string;
};

/**
 * TODO:
 * 1) //Fix the API
 * 2) Extract functions for generating numbers.
 */

const generateSpaces = (text: string) => (from: number, to: number) =>
  range(from, to).map((index) => ({
    name: `${text} ${index}`,
  }));

const ALL_PARKING_SPACES: Space[] = [
  ...generateSpaces("Kraków HQ")(1, 20),
  ...generateSpaces("Milano")(21, 50),
  ...generateSpaces("Munich")(51, 80),
];

const CHANCE_OF_FAILURE = 0.1;
const MIN_TIME_MILLIS = 100;
const MAX_TIME_MILLIS = 1000;

const searchSpaces = (searchText: string): Promise<Results> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random() > CHANCE_OF_FAILURE) {
        const spaces = ALL_PARKING_SPACES.filter(
          ({ name }) => name.indexOf(searchText) !== -1
        );
        res(spaces);
      } else {
        rej(new Error("Network error"));
      }
    }, random(MIN_TIME_MILLIS, MAX_TIME_MILLIS, false));
  });
};

export { searchSpaces };
