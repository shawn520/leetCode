/**
 * @param {string[]} strs
 * @return {string}
 */
var getCommonPrefix = function(str1, str2) {
    let i = 0;
    for(;i<str1.length && i< str2.length; i++) {
        if(str1[i] !== str2[i]) break;
    }
    return str1.slice(0, i);
}
 
var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) { return ''; }
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++) {
        prefix = getCommonPrefix(prefix, strs[i]);
        if(prefix === '') break;
    }
    return prefix;
}