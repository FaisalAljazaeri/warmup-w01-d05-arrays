const sumCount = function (numbers) {
    let sum = 0;
    let count = 0;

    if (numbers === null || numbers.length === 0) {
        return [];
    }
    else {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 0) {
                count += 1;
            }
            else {
                sum += numbers[i];
            }
        }

        return [count, sum];
    }
}