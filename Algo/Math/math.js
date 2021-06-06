export class Math2 {
  static factorial(number) {
    if (number === 0) return 1;
    return number * Math2.factorial(number - 1);
  }
  static superSet(set, currentSet  = []) {
    if (!set || !(set instanceof Array) || !set.length)
      throw new Error("superSet() requires valid set");
    // remove duplication
    const newSet = Array.from(new Set(set));



    return subsets;
  }
}


function btPowerSetRecursive(originalSet, allSubsets = [[]], currentSubSet = [], startAt = 0) {
    // Let's iterate over originalSet elements that may be added to the subset
    // without having duplicates. The value of startAt prevents adding the duplicates.
    for (let position = startAt; position < originalSet.length; position += 1) {
      // Let's push current element to the subset
      currentSubSet.push(originalSet[position]);
  
      // Current subset is already valid so let's memorize it.
      // We do array destruction here to save the clone of the currentSubSet.
      // We need to save a clone since the original currentSubSet is going to be
      // mutated in further recursive calls.
      allSubsets.push([...currentSubSet]);
  
      // Let's try to generate all other subsets for the current subset.
      // We're increasing the position by one to avoid duplicates in subset.
      btPowerSetRecursive(originalSet, allSubsets, currentSubSet, position + 1);
  
      // BACKTRACK. Exclude last element from the subset and try the next valid one.
      currentSubSet.pop();
    }
  
    // Return all subsets of a set.
    return allSubsets;
  }
  
  /**
   * Find power-set of a set using BACKTRACKING approach.
   *
   * @param {*[]} originalSet
   * @return {*[][]}
   */
  export default function btPowerSet(originalSet) {
    return btPowerSetRecursive(originalSet);
  }