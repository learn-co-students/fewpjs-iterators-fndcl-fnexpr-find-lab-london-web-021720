const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin (array) {
  const rec =  array.find(e =>{ return e.result === "W"})
  if (rec) {
    return rec.year
  }
  else {
    return undefined
  }
 
}
