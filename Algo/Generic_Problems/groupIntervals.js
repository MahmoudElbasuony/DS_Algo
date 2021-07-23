/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
  const groups = {};
  const intervals = [...arr];
  intervals.sort((a, b) => a[0] - b[1]);
  const isIntersect = (start1, end1, start2, end2) =>
    (end2 >= start1 && end2 <= end1) ||
    (start2 >= start1 && start2 <= end1) ||
    (start1 >= start2 && start1 <= end2) ||
    (end1 >= start2 && end1 <= end2);

  for (let i = 0; i < intervals.length; i++) {
    const start1 = intervals[i][0];
    const end1 = intervals[i][1];
    if (!groups[start1]) groups[start1] = end1;

    groups[start1] = Math.max(groups[start1], end1);
  }

  let entries = Object.entries(groups).map((e) => [+e[0], +e[1]]);
  let entriesCount = entries.length;
  let i = 1;
  let prevIndx = 0;
  while (i < entries.length) {
    const current = entries[i];
    const prev = entries[prevIndx];
    const [start1, end1] = prev;
    const [start2, end2] = current;
    if (isIntersect(start1, end1, start2, end2)) {
      const minStart = Math.min(start1, start2);
      const maxEnd = Math.max(end1, end2);
      [entries[i][0], entries[i][1]] = [minStart, maxEnd];
      entries.splice(prevIndx, 1);
      i--;
    }
    prevIndx = i;
    i++;
  }
  return entries;
};

console.log(
  merge([[9,11],[430,435],[56,56],[323,330],[47,51],[354,358],[194,202],[286,290],[149,158],[121,127],[208,212],[271,278],[69,78],[33,33],[359,360],[386,394],[84,90],[175,177],[78,79],[241,248],[267,272],[164,165],[113,115],[107,112],[384,392],[291,293],[204,207],[231,234],[352,356],[96,100],[77,79],[284,287],[150,152],[5,5],[163,171],[409,409],[193,196],[243,250],[228,228],[274,276],[78,83],[56,60],[480,489],[259,264],[255,260],[249,251],[189,194],[198,199],[197,202],[123,123],[154,157],[142,149],[106,111],[6,10],[235,235],[298,303],[346,352],[299,307],[345,346],[363,363],[266,268],[433,441],[350,353],[499,506],[38,41],[408,410],[156,156],[392,396],[436,444],[301,304],[31,32],[41,48],[158,160],[407,410],[103,104],[104,106],[235,244],[30,35],[372,373],[133,133],[4,7],[455,457],[443,450],[479,480],[245,247],[255,261],[83,91],[5,6],[340,343],[97,101],[36,37],[166,167],[442,448],[357,363],[77,79],[428,432],[235,238],[298,306],[230,237],[262,270],[409,418],[456,459],[17,21],[86,93],[79,82]])
.length);
