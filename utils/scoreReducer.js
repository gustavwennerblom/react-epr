const completeReducer = (selectionArray) => {
  const completionArray = selectionArray.map((subArray) => subArray.reduce((total, value) => total || value));
  const isComplete = completionArray.reduce((total, value) => total && value);
  return (isComplete);
};

const scoreCalculator = (selectionArray) => {
  const scoreArray2D = selectionArray.map((answerArray) => answerArray.map((option, index) => {
    return (option ? index + 1 : 0);
  }));
  const scoreByQuestion = scoreArray2D.map((arr) => Math.max(...arr));
  return scoreByQuestion;
};

const getTwoLowestIndices = (arr) => {
  let smallestValue = Math.min.apply(0, arr);
  const smallestValueIndex = arr.indexOf(smallestValue);
  arr[smallestValueIndex] = 99;     // Eliminate the smallets value, since it's index is already stored
  const secondSmallestValue = Math.min.apply(0, arr);
  return ([smallestValueIndex, arr.indexOf(secondSmallestValue)]);
};

export { completeReducer, scoreCalculator, getTwoLowestIndices };
