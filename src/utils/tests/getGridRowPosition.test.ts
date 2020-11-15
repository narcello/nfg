import {getGridRowPosition} from '../getGridRowPosition';

test('With 0 row position would be 1', () => {
  expect(getGridRowPosition(0)).toBe(1);
});

test('With 30 row position would be 2', () => {
  expect(getGridRowPosition(30)).toBe(2);
});
