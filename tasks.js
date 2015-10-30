
/**
 * Given an array A returns a minimal positive integer not present in the array
 * the array A contains valid JavaScript numbers (both positive and negative)
 * This solution works in linear time and uses O(1) additional memory,
 * but at the expense of changing the input array
 */
function solution1(A) {
  for (var i = 0; i < A.length; ++i) {
    if (A[i] != i + 1) {
        var t = A[i];
        A[i] = -1;
        while (Number.isInteger(t) &&
            1 <= t && t <= A.length &&
            A[t - 1] != t) {
            var next = A[t - 1];
            A[t - 1] = t;
            t = next;
        }
    }
  }
  for (var i = 0; i < A.length; i++) {
      if (A[i] != i + 1) {
          return i + 1;
      }
  }
  return A.length + 1;
}

/**
 * Given an array A returns a minimal positive integer not present in the array
 * the array A contains valid JavaScript numbers (both positive and negative)
 * This solution works in linear time and uses linear amount of additional memory,
 * but leaves the input array unchanged
 */
function solution1Hash(nums) {
  var hashset = {}
  for (var i = 0; i < nums.length; ++i) {
      hashset[nums[i]] = 1;
  }
  for (var n = 1; n <= nums.length; ++n) {
      if (!(n in hashset)) {
          return n;
      }
  }
  return n; 
}

/**
 * given a string S returns a boolean indicating if the string is bracket balanced
 * bracket kinds are [ ], { }, ( )
 */
function solution2(S) {
  var stack = [];
  var opening = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }
  for (var i = 0; i < S.length; ++i) {
    switch (S.charAt(i)) {
      case '(': 
      case '[':
      case '{':
        stack.push(S.charAt(i));
        break;
      case ')':
      case ']':
      case '}':
        if (stack.length == 0) return false;
        if (stack.pop() != opening[S.charAt(i)]) return false;
    }
  }
  return stack.length == 0;
}

function solution3(A, F) {
  var parameters = /^(.*)=>/.exec(F)[1];
  if (parameters.indexOf("(") == -1) {
    parameters = "(" + parameters + ")";
  }
  var expression = /.*=>\s*(.*)$/.exec(F)[1];
  var mapper = eval("(function" + parameters + " { return " + expression + "})");
  return A.map(mapper);  
}