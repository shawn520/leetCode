var removeDuplicates = function(nums) {
  let [i, j] = [0, 0];
  while(j<nums.length) {
      if(nums[i] === nums[j]) j++;
      else {
          let temp = nums[i+1];
          nums[i+1] = nums[j];
          nums[j] = temp;
          i++;
          j++;
      }
  }
  return i+1;
};