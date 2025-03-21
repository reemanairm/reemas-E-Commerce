import {formatcurrency} from '../scripts/utils/money.js';

describe('Test suit: formatcurrency',() => {
it('converts cents into dollars',() => {
    expect(formatcurrency(2095)).toEqual('20.95');
});

it('works with zero',() => {
    expect(formatcurrency(0)).toEqual('0.00');
});

it('rounds up to the nearest cents',() => {
    expect(formatcurrency(2000.5)).toEqual('20.01');
});
});