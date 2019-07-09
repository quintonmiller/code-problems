import { maxNumber, minNumber } from "./config";

export function findRandomMissingNumber(str: string, max = maxNumber): Array<number> {

    const expectedDigitAmounts = determineExpectedNumDigits(max);

    const missingDigits = determineMissingDigits(expectedDigitAmounts, str);

    return determineMissingNumbers(missingDigits);
}

// TODO: Clean up
function determineMissingNumbers(missingDigits: Array<string>): Array<number> {

    let result: string[][] = [];

    const permute = (arr: Array<string>, m: Array<string> = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    };

    permute(missingDigits);

    const unique = new Set(
        result
            .map(digitsArray => digitsArray.join(''))
            .filter(str => str.indexOf('0') !== 0)
            .map(str => Number(str))
            .filter(num => num >= minNumber && num <= maxNumber)
    );

    return Array.from(unique);
}

function determineMissingDigits(expectedDigitCounts: Array<number>, str: string): Array<string> {

    for (let i = 0; i < str.length; i++) {

        const digit = Number(str[i]);

        expectedDigitCounts[digit]--;
    }

    const missingDigits: Array<string> = [];

    for (let i = 0; i < expectedDigitCounts.length; i++) {

        const numMissing = expectedDigitCounts[i];

        for (let j = 0; j < numMissing; j++) {
            missingDigits.push(i + '');
        }
    }

    return missingDigits;
}

function determineExpectedNumDigits(max: number): Array<number> {

    const expectedDigitAmounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = minNumber; i <= max; i++) {

        const numString = i + '';

        for (let j = 0; j < numString.length; j++) {

            const digit = Number(numString[j]);

            expectedDigitAmounts[digit]++;
        }
    }

    return expectedDigitAmounts;
}
