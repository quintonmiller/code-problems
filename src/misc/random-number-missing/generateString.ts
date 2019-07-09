import { maxNumber, minNumber } from "./config";
import { shuffleArray } from "../../utils/shuffleArray";

export function generateString(missingNumber: number, max = maxNumber): string {

    const arr: Array<number> = [];

    for (let i = minNumber; i < max + 1; i++) {
        if (i !== missingNumber) {
            arr.push(i);
        }
    }

    shuffleArray(arr);

    return arr.join('');
}
