// Approach 1: Two Pointers
var removeElement = function(nums, val) {
  let i = -1;
  for(let j=0; j<nums.length; j++) {
      if(nums[j] !== val) {
          nums[++i] = nums[j];
      }
  }
  return i+1;
};