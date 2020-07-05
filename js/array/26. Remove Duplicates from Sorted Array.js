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

// 代码优化
var removeDuplicates = function(nums) {
  let i = 0;
  for(let j=0; j<nums.length; j++) {
      if(nums[i] !== nums[j]) {
          nums[++i] = nums[j];
      }
  }
  return i+1; 
};