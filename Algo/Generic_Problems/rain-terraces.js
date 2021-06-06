export function rainTerraces(terraces) {
  if (!terraces || !(terraces instanceof Array))
    throw new Error("rainTerraces() terraces values");
  let trappedWaterNumber = 0;

  if (terraces.length === 0) return trappedWaterNumber;

  const toRightWaterLevels = Array(terraces.length).fill(0);
  const toLeftWaterLevels = Array(terraces.length).fill(0);
  toRightWaterLevels[0] = [terraces[0]];
  toLeftWaterLevels[terraces.length - 1] = [terraces[terraces.length - 1]];

  for (let i = 1; i < terraces.length; i++) {
    const currentTerrace = terraces[i];
    const previousTerrace = toRightWaterLevels[i - 1];
    toRightWaterLevels[i] = Math.max(currentTerrace, previousTerrace);
  }

  for (let i = terraces.length - 2; i >= 0; i--) {
    const currentTerrace = terraces[i];
    const previousTerrace = toLeftWaterLevels[i + 1];
    toLeftWaterLevels[i] = Math.max(currentTerrace, previousTerrace);
  }

  for (let i = 0; i < terraces.length; i++) {
    const minOfMixResult = Math.min(
      toLeftWaterLevels[i],
      toRightWaterLevels[i]
    );
    if (minOfMixResult > terraces[i]) {
      trappedWaterNumber += (minOfMixResult - terraces[i]);
    }
  }
  return trappedWaterNumber;
}
