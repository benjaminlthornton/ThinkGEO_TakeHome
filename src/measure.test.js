import * as wkt from "wkt";
import * as measure from "./measure";

test("[GetDistanceBetweenPoints] - The distance between point[10, 0] and point[-10, 0] is 20", () => {
  expect(measure.GetDistanceBetweenPoints([10, 0], [-10, 0])).toBeCloseTo(20.0);
});

test("[GetLineLength] - The length of LINESTRING(40 0, -40 0) is 80", () => {
  let line = wkt.parse("LINESTRING(40 0, -40 0)");
  expect(measure.GetLineLength(line)).toBeCloseTo(80);
});

test("[GetLineLength] - The length of LINESTRING(0 0,10 0,10 10,0 10) is 30", () => {
  let line = wkt.parse("LINESTRING(0 0,10 0,10 10,0 10)");
  expect(measure.GetLineLength(line)).toBe(30);
});
