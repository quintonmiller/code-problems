export function arrayHasDuplicates(arr: Array<any>): boolean {

    for (let i = 0; i < arr.length - 1; i++) {

        const elem = arr[i];

        if (arr.lastIndexOf(elem) > i) {
            return true;
        }
    }

    return false;
}
