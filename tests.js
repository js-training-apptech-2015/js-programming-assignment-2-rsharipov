function testSolution1(implementation, name) {
  QUnit.test(name, function( assert ) {
    assert.equal(implementation([]), 1); 
    assert.equal(implementation([1]), 2); 
    assert.equal(implementation([2]), 1); 
    assert.equal(implementation([1, 3]), 2); 
    assert.equal(implementation([-1, 1.2, 3]), 1); 
    assert.equal(implementation([-1, 1, -3, 2, -3]), 3); 
    assert.equal(implementation([1.2, 1, 2.2, 3, 5]), 2); 
    assert.equal(implementation([1, 5, 4, 2]), 3); 
  });
}

function testSolution2() {
  QUnit.test("solution2", function( assert ) {
    var ok = [
      "", "[]", "([])", "[()]", "[](){}", "[({})][{}][]{}({})"
    ];
    for (var i = 0; i < ok.length; ++i) {
      assert.ok(solution2(ok[i]), "solution2(" + ok[i] + ") should return true");
    }
    var notOk = [
      "][", "[(])", "[](){}{", "[]["
    ];
    for (var i = 0; i < notOk.length; ++i) {
      assert.notOk(solution2(notOk[i]), "solution2(" + notOk[i] + ") should return false");
    }
  });
}

function testSolution3() {
  QUnit.test("solution3", function( assert ) {
    assert.deepEqual(solution3([1, 2, 3], 'a => a'), [1, 2, 3]);
    assert.deepEqual(solution3([1, 2, 3], '(a)=>a'), [1, 2, 3]);
    assert.deepEqual(solution3([1, 2, 3], '(a)=>a * 2'), [2, 4, 6]);
    assert.deepEqual(solution3([1, 2, 3], 'a=>a + 2'), [3, 4, 5]);
    assert.deepEqual(solution3([1, 2, 3], '()=>1'), [1, 1, 1]);
    assert.deepEqual(solution3([1, 2, 3], '(elem, index, array)=>elem'), [1, 2, 3]);
    assert.deepEqual(solution3([1, 1, 1], '(elem, index, array)=>index'), [0, 1, 2]);
    assert.deepEqual(solution3([1, 1, 1], '(elem, index, array)=>array.reduce(function(a, b) { return a + b }, 0)'), [3, 3, 3]);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  testSolution1(solution1, "solution1 with O(1) additional memory");
  testSolution1(solution1Hash, "solution1 with hashtable (O(n) additional memory)");
  testSolution2();
  testSolution3();
});