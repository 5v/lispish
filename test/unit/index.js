const assert = require('assert');
const lispish = require('../../index').globalise();

const arr = [1, 2, 3, 4, 5];
const origArr = [1, 2, 3, 4, 5];

describe('lispish', () => {
    after(() => {
        // Ensure that the testing array `arr` has not been altered.
        assert.deepEqual(arr, origArr);
    });

    describe('first', () => {
        it('should return the first element', () => {
            assert.equal(first(arr), 1);
        });
    });

    describe('rest', () => {
        it('should return all but the first element', () => {
            assert.deepEqual(rest(arr), [2, 3, 4, 5]);
        });
    });

    describe('last', () => {
        it('should return the last element', () => {
            assert.equal(last(arr), 5);
        });
    });

    describe('butlast', () => {
        it('should return all but the last element', () => {
            assert.deepEqual(butlast(arr), [1, 2, 3, 4]);
        });
    });

    describe('list', () => {
        it('should create an array from it\'s arguments', () => {
            [
                [1, 2, 3],
                ['a', 'b', 'c'],
                [1, 'b', true, {}, []]
            ].forEach(spec => {
                assert.deepEqual(list.apply(null, spec), spec);
            });

        });
    });

    describe('append', () => {
        it('should concatenate arrays', () => {
            assert.deepEqual(append(arr, arr), [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
        });
    });
});
