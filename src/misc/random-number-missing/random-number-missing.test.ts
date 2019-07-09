import { maxNumber, minNumber } from "./config";
import { generateString } from "./generateString";
import { findRandomMissingNumber } from "./findRandomMissingNumber";
import { arrayHasDuplicates } from "../../utils/arrayHasDuplicates";

describe('Random Number Missing', () => {

    test('should work for all numbers between 1 and 250', () => {

        for (let i = minNumber; i <= maxNumber; i++) {

            const str = generateString(i);

            const possibleNums = findRandomMissingNumber(str);

            expect(possibleNums).toContain(i);
            expect(arrayHasDuplicates(possibleNums)).toEqual(false);
            expect(possibleNums.length).toBeLessThan(5);
        }
    });

    test('should return all possible answers', () => {

        const str = generateString(123);

        const possibleNums = findRandomMissingNumber(str);

        expect(possibleNums).toContain(123);
        expect(possibleNums).toContain(132);
        expect(possibleNums).toContain(213);
        expect(possibleNums).toContain(231);
    });

    test('should not return duplicates', () => {

        const str = generateString(111);

        const possibleNums = findRandomMissingNumber(str);

        expect(possibleNums).toEqual([111]);
    });
});
