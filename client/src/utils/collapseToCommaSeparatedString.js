function collapseToCommaSeparatedString(array) {
  return array.reduce((acc, curr, i) => {
    if (i === 0) {
      return curr;
    }

    return `${acc}, ${curr}`;
  }, "");
}

export default collapseToCommaSeparatedString;
