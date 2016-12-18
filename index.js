// module.exports = {
//     first: function first(arr) {
//         return arr[0];
//     },
//     globalise: function globalise() {
//         const lispish = require(__filename);
//         delete lispish.globalise;
//         Object.assign(global, lispish);
//     },
// };

function first(arr) {
    return arr[0];
}

function rest(arr) {
    return arr.slice(1);
}

function last(arr) {
    return(arr[arr.length-1]);
}

function butlast(arr) {
    return arr.slice(0, arr.length-1);
}

function list(...arguments) {
    const arr = [];

    arguments.forEach(arg => {
        arr.push(arg);
    });

    return arr;
}

function append(...arguments) {
    let arr = [];

    arguments.forEach(arg => {
        arr = arr.concat(arg);
    });

    return arr;
}

function globalise() {
    const functions = require(__filename);
    delete functions.globalise;
    Object.assign(global, functions);
}

module.exports = {
    first, rest, last, butlast, list, append, globalise
};
