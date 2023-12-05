//code.test.js
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// test case 1
var graph1 = [
    [{ vertex: 1, weight: 2 }, { vertex: 2, weight: 4 }],
    [],
    [{ vertex: 3, weight: 1 }, { vertex: 1, weight: 3 }],
    [{ vertex: 0, weight: 5 }]
];
var expected1 = [
    [0, 2, 4, 5],
    [Infinity, 0, Infinity, Infinity],
    [6, 3, 0, 1],
    [5, 7, 9, 0]
];
assert.deepStrictEqual(allPairsShortestPaths(graph1), expected1);

// test case 2
var graph2 = [
    [{ vertex: 1, weight: 2 }, { vertex: 2, weight: 4 }],
    [],
    [{ vertex: 1, weight: 1 }],
    [{ vertex: 3, weight: 3 }]
];
var expected2 = [
    [0, 2, 4, Infinity],
    [Infinity, 0, Infinity, Infinity],
    [Infinity, 1, 0, Infinity],
    [Infinity, Infinity, Infinity, 3]
];
assert.deepStrictEqual(allPairsShortestPaths(graph2), expected2);

