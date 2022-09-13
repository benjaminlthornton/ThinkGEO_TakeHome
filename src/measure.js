export function GetDistanceBetweenPoints(startPoint, endPoint) {
  let xDistance = startPoint[0] - endPoint[0];
  let yDistance = startPoint[1] - endPoint[1];
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}

export function GetLineLength(line) {
  // console.log("measure:", line);
  if (line === null) {
    return "check input";
  }
  if (line.type !== "LineString" || line.coordinates.length < 2) {
    return "Incorrect input";
  }
  // initialize a result variable
  // loop through line
  // find difference between point and previous point
  // add to result
  // return result
  let result = 0;
  for (let i = 0; i < line.coordinates.length - 1; i++) {
    let distance = GetDistanceBetweenPoints(
      line.coordinates[i],
      line.coordinates[i + 1]
    );
    result += distance;
  }
  return result;
  // return GetDistanceBetweenPoints(
  // line.coordinates[0],
  // line.coordinates[line.coordinates.length - 1]
  // );
  // console.log("inside measure:", line.coordinates)
}

export function GetPerimeter() {
  throw new Error("Not Implemented");
}
