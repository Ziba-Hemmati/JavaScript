const countOfCharacters = (sentence) => {
  return sentence
    .split(" ")
    .join("")
    .split("")
    .reduce((pre, cur) => {
      pre[cur] = (pre[cur] || 0) + 1;
      return pre;
    }, {});
};
console.log(countOfCharacters("Ziba Hemmati"));
