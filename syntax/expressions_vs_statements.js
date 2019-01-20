'use strict';
// Expression は値を生成し、値が予期される場所ならどこでも書ける。
// Statement は何らかの動作を行う。

// これは statement
var myvar;

// '1' は expression で、全体としては statement
myvar = 1;

// かっこの中は関数の引数で、expression。全体としては statement
console.log(0 + myvar);

// よりわかりやすく。
console.log(1 + myvar) /* ここまでが expression */ ; /* ';' が付くと statement になる。*/

// 関数呼び出しは expression であって、変数に代入できる。
var myfunc = console.log(2 + myvar);

// expression と statement が期待される文脈に注意しよう。
// 例えば、if 文には、statement が必要。
if (myvar > 0) console.log(3 + myvar);

// '{}' で囲まれた部分は、block statement になることができる。（常になるわけではない。後述）
if (myvar > 0) {
  console.log(4 + myvar);
}

// Object リテラルは (block) statement のように見えてしまう。
myvar = {
  foo: 3    // （実際は、expression なので、変数に代入できる）
};
console.log(myvar);

// この曖昧さを排除するため、Object リテラルは expression statement にできない。
// （この辺り若干理解しきれていない。）
// Object は必ず expression として評価される。

// eval は文字列を statement として評価する。
myvar = eval('{ foo: 123 }')
console.log(myvar); // -> 123

// カッコでかこめば、objedt が帰る。
myvar = eval('({ foo: 123 })')
console.log(myvar); // -> {foo: 123}

// また、Named function expression も宣言(=statement) のように見える。
// というか形がまったく同じである。
myvar = function foo() {console.log('Hello')};  // （実際は、expression なので、変数に代入できる）
myvar();

// 関数宣言は statement なのでカンマがいらない
function foo() {console.log('World')}
foo();

// この曖昧さを排除するため、function で始まる expression は
// expression statement にできず、必ず expression として評価される。

// 以下の式でカッコを外すとエラー
(function() { console.log('abc') }());


