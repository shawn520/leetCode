// 方法一：两个for循环，时间复杂度平方
var twoSum = function(nums, target) {
    let length = nums.length;
    for(let i=0; i<length; i++) {
        let complement = target - nums[i];
        for(let j = i + 1; j < length; j++) {
            if(nums[j] == complement) {
                return [i, j];
            }
        }
    }
    return [0, 0];
};

// 方法二：遍历两次2n
var twoSum2 = function(nums, target) {
    let length = nums.length;
    let hashTable = {};
    for(let i = 0; i < length; i++) {
        hashTable[nums[i]] = i;
    }
    for(let i=0; i < length; i++) {
        let complement = target - nums[i];
        let found = hashTable[complement];
        if(found != undefined && found != i) return [i, found];
    }
    return [0, 0];
};

// 方法三：遍历1次
var twoSum3 = function(nums, target) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let found = obj[complement];
        if( found != undefined && found != i) return [found, i];
        else {
            obj[nums[i]] = i;
        }
    }
    return [0, 0];
}

// 使用map,遍历一次
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [0,0];
};

let arr = [2,7,11,15];
let target = 9;
let result = twoSum3(arr, target);
console.log(result);
