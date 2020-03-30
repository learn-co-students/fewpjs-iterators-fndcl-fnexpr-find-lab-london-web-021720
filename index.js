const testVar = {}

function isWin(year) {
  return year.result === "W"
}

function superbowlWin(object) {
  if (object.find( isWin )) {
    return object.find( isWin ).year
  } else {
    return undefined
  }
}