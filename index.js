// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined

const record = [years, results];

const sadReality = [{ result: "N/A" }, { result: "N/A" }, { result: "N/A" }];

function superbowlWin(record) {
  if (record.find((obj) => obj.result === "W")) {
    return record.find((obj) => obj.result === "W").year;
  } else {
    return undefined;
  }
}
