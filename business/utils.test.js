import * as utils from './utils.js';
//using jest for testing javascript

// Candidate
test (`candidate name must be present`, () => {
    //return an array of errors
    expect(utils.isValidCandidate({foo: `x`}))
        .toEqual([`missing candidate name`]);
});

test (`candidate name must be longer than 1 character`, () => {
    //return an array of errors
    expect(utils.isValidCandidate({name: `x`}))
        .toEqual([`the candidate name must be at least 2 characters`]);
});

test (`candidate name must be longer than 1 character`, () => {
    //return an array of errors
    expect(utils.isValidCandidate({name: `george`}))
        .toBe(true);
});

// Password
/*
Short1!
NoNumber!
NoSpecialCh4r
noc4pitals!
NOL0WER!
goodP4ssw0rd!
*/

//label should be verbose enough
//to run, npm test (test is alias for starting jest)
test (`password must be at least 8 characters`, () => {
    expect(utils.isValidPassword(`Short1!`))
        .toBe(false);
});

test (`password must contain a number`, () => {
    expect(utils.isValidPassword(`NoNumber!`))
        .toBe(false);
});

test (`password must contain a special character`, () => {
    expect(utils.isValidPassword(`NoSpecialCh4r`))
        .toBe(false);
});

test (`password must contain a capital letter`, () => {
    expect(utils.isValidPassword(`noc4pitals!`))
        .toBe(false);
});

test (`password must contain a lowercase letter`, () => {
    expect(utils.isValidPassword(`NOL0WER!`))
        .toBe(false);
});

test (`password must be complex`, () => {
    expect(utils.isValidPassword(`goodP4ssw0rd!`))
        .toBe(true);
});