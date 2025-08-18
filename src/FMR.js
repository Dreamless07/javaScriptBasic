let array = [1, 2, 3, 4, 5, 6];

function filter() {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}

let filtered = filter();
console.log(filtered);

function map(filtered) {
    let result1 = [];
    for (let i = 0; i < filtered.length; i++) {
        result1.push(filtered[i] + 2);
    }
    return result1;
}

let mapped = map(filtered);
console.log(mapped);

function reduce(mapped) {
    let reduced = 0;
    for (let i = 0; i < mapped.length; i++) {
        reduced += mapped[i];
    }
    return reduced;
}

let reduced=reduce(mapped)
console.log(reduced)

