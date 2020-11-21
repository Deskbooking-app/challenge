import { range, random } from "lodash";

type Results = {
  addresses: Address[];
};

type Address = {
  address: string;
  country: string;
};

const generateAdresses = (country: string) => (street: string) => (
  from: number,
  to: number
): Address[] =>
  range(from, to).map((index) => ({
    address: `${street} ${index}`,
    country,
  }));

const ALL_ADDRESSES: Address[] = [
  ...generateAdresses("UK")("Downing")(100, 120),
  ...generateAdresses("IT")("Milanese")(21, 50),
  ...generateAdresses("DE")("BankStrasse")(51, 80),
];

const CHANCE_OF_FAILURE = 0.1;
const MIN_TIME_MILLIS = 100;
const MAX_TIME_MILLIS = 1000;

const searchSpaces = (searchText: string): Promise<Results> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (random() > CHANCE_OF_FAILURE) {
        const addresses = ALL_ADDRESSES.filter(({ address }) =>
          address.indexOf(searchText) !== -1
        );
        res(addresses);
      } else {
        rej(new Error("Network error"));
      }
    }, random(MIN_TIME_MILLIS, MAX_TIME_MILLIS, false));
  });
};

export { searchSpaces };
