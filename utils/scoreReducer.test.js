import { completeReducer, scoreCalculator } from './scoreReducer';

const incompleteArray=[
  [false, false, true, false],
  [false, true, false, false],
  [false, false, false, false]
];

const completeArray=[
  [true, false, false],
  [false, true, false],
  [false, false, true]
];

test('Identifies incomplete state array', () => {
  const result = completeReducer(incompleteArray);
  expect(result).toBe(false);
});

test('Identifies complete state array', () => {
  const result = completeReducer(completeArray);
  expect(result).toBe(true);
});

test('Calculates score correctly', () => {
  const result = scoreCalculator(completeArray);
  expect(result).toEqual([1,2,3]);
});