export function bitWisePowerSet(arr) {
  const finalResult = [];

  for (let i = 0; i < 2 ** arr.length; i++) {
    let set  = [];
    for (let j = 0; j < arr.length; j++) {
        if(i & (1 << j)){
            set.push(arr[j]);
        }
    }
    finalResult.push(set);
  }

  return finalResult;
}
