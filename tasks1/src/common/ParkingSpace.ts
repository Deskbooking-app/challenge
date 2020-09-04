/**
 * TODO:
 * ParkingSpace is a abstract type that holds the following information:
 * - name: ie. "Space 67"
 * - is the parking space "pre-reserved" for an "owner" on a given day.
 * - "day" is a concept similar to a timestamp, but means number of days since epoch day 1 - "the Unix epoch is 00:00:00 UTC on 1 January 1970".
 *          For instance September 4th is 18509, 5th is 18510 etc...
 *
 *
 * The first tasks is to write a concrete implementation of ParkingSpace that:
 * - Allows us to specify different owners for different days of the week. Ie. On Fridays, the parking space is assigned to John, on Mondays to Wendy and on other days it's free. See usage example below:
 *
 * const weekdayParkingSpace = (...)
 * const fridayOwner = const.getOwnerhipInfo(18509)
 * const thursdayOwner = const.getOwnerhipInfo(18508)
 * console.log(fridayOwner.owner) // prints "John"
 * console.log(thursdayOwner.owner) // prints "undefined"
 *
 * 
 * The second task is to consider how could we possibly store such spaces in our mock database: commons/mockDatabase.
 * 
 *  
 * IMPORTANT: Before getting started see timeUtils.ts, so you don't need to rewrite the check "what day of week is 18509".
 * The tasks shouldn't take you more than 1.5-2 hours. If it takes you more, consult us for more precise instructions.
 * Test might be helpful while developing.
 * 
 * Good luck!
 */

type ParkingSpace = {
  name: string;
  getOwnerhipInfo: (day: number) => { owner: string | undefined };
};

export type { ParkingSpace };
