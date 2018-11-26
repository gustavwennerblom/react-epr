const ScoreReducer = (selectionArray) => {
  selectionArray.reduce((total, value) => total || value);
};

export default ScoreReducer;
