var binarySearch = function(nums, left, right, target) {
  if(left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(nums[mid] == target) return mid;
      else if(target > nums[mid]) return binarySearch(nums, mid+1, right, target);
      else return binarySearch(nums, left, mid -1, target);
  }
  return left;
};

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  return binarySearch(nums, left, right, target);
  
};