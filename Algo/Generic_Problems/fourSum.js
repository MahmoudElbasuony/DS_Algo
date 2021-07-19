/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const arr = [...nums];
    const len  = nums.length;
    arr.sort((a,b)=> a - b);
    
    for(let i = 0; i < len - 3; i++){
        for(let j= i+1; j < len - 2 ; j++){
            let m = j+1, n = len - 1;
            let reminder = target - (arr[i] + arr[j]);
            while(m < n){
                let sum34 = arr[m] + arr[n];
                if(sum34 < reminder){
                    m++;
                } else if(sum34 > reminder){
                    n--;
                } else {
                    result.push([nums[i],nums[j],nums[m],nums[n]]);
                    while(m < n && arr[m] === arr[m+1]) m++;
                    while(m < n && arr[n] === arr[n-1]) n--;
                    m++;
                    n--;
                }
            }
            while(j < len-2 && nums[j]===nums[j+1]) j++;
        }
        while(i < len-3 && nums[i]===nums[i+1]) i++;
    }
    
    return result;
};

console.log(fourSum([1,0,-1,0,-2,2],0));