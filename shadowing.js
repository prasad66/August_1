console.log("%cShadowing in Javascript!!!",'font-size: 35px; font-weight: bolder')
console.log(`By definition, an outer scoped variable is said to be "shadowed" by an inner scoped variable when both of them have the same name.
To understand variable shadowing in JavaScript, you must first be aware of the two scopes you can declare variables in:

    Local Scope: Variables declared here are block-scoped or function-scoped;
    Global Scope: It's the outermost scope where any variable that's declared is available globally.

And, the three ways in which you can declare variables in those two scopes are as follows:

   => Using var — creates a function-scoped or globally-scoped variable;
   => Using let — creates a block-scoped local variable;
   => Using const — creates a block-scoped local constant.

Now that you know the basics, you must remember the following rules that apply to variables depending on the scope they're declared in:

Variable Type and Scope Determine If the Value of Shadowed Variable Is Overwritten;
Local Scope Variables Take Precedence;
let or const Cannot be Shadowed in a Local Scope.



`);

console.log(
  `%cVariable Type and Scope Determine If the Value of Shadowed Variable Is Overwritten
**********************************************************************************`,
  "font-weight: bold;"
);

console.log(`1.) Variables declared as let or const are block-scoped and they do not overwrite the value of the shadowed variable.

var a = "apple";
if (true) {
// block-scoped (local)
let a = "aeroplane";
console.log(">>inside if block=>", a); // 'aeroplane'
}

console.log(">>outside if block =>", a); // 'apple'`);
//For example:

// global scope
var a = "apple";

if (true) {
  // block-scoped (local)
  let a = "aeroplane";
  console.log("           >>inside if block=>", a); // 'aeroplane'
}

console.log("           >>outside if block =>", a); // 'apple'

console.log(`

2.) This isn't true, however, for variables declared with var since they are not block-scoped (but rather global and function scoped). Therefore, they would overwrite values in block scope but not in function scope. For example:
var b = "ball";
if (true) {
// block-scoped (local)
var b = "bat";
console.log(">>inside if block=>", b); // 'bat'
}

console.log(">>outside if block=>", b); // 'ball'
`);

//   // global scope
var b = "ball";

if (true) {
  // block-scoped (local)
  var b = "bat";
  console.log("           >>inside if block=>", b); // 'bat'
}

console.log("           >>outside if block=>", b); // 'ball'

console.log(`

3.) Since variables declared as var are function-scoped, the nested function in the following example won't overwrite the one with the same name in the outer scope:
function printCat() {
var c = "cat";

function printCamel() {
var c = "camel";
return c;
}

console.log(">>inside inner function=>",printCamel()); // 'camel'
console.log(">>outside inner function=>",c); // 'cat'
}
`);

function printCat() {
  var c = "cat";

  function printCamel() {
    var c = "camel";
    return c;
  }

  console.log("           >>inside inner function=>", printCamel()); // 'camel'
  console.log("           >>outside inner function=>", c); // 'cat'
}

printCat();

console.log(
  `
  

%cLocal Scope Variables Take Precedence
*************************************`,
  "font-weight: bold;"
);

console.log(`1.) When you use a local scoped variable of the same name, its value takes precedence over the outer scoped one. For example:
// global scope
var d = 'dog';

if (true) {
// block-scoped (local)
const d = 'dice';
console.log(">>inside if block=>",d); // 'dice'
}

console.log(">>outside if block=>",d); // 'dog'        
  `);

// global scope
var d = "dog";

if (true) {
  // block-scoped (local)
  const d = "dice";
  console.log("           >>inside if block=>", d); // 'dice'
}

console.log("           >>outside if block=>", d); // 'dog'

console.log(`2.) Same thing happens in a function scope as you can see in the code below:"
//global scope
var e = 'entity';

function printE() {
// function scope (local)
const foo = 'enemy';
// ...
return foo;
}

console.log(printE()); // 'enemy'
console.log(e); // 'entity'`);

// global scope
var e = "entity";

function printE() {
  // function scope (local)
  const e = "enemy";
  // ...
  return e;
}

console.log("           >>inside function =>", printE()); // 'enemy'
console.log("           >>inside if block=>", e); // 'entity'

console.log(`
  
  `);
console.log(
  "%c'let' or 'const' Cannot be Shadowed in a Local Scope",
  "font-weight: bold"
);
console.log("************************************************");

console.log(`1.) In a local scope you cannot shadow another let or const. In that case, you will get an error as shown below:
  
function printF() {
let f = 'food';

if (true) {
  var f = 'f'; // SyntaxError: Identifier 'foo' has already been declared
}
// ...
return foo;
}
  `);

  console.log(`However, a variable declared with let, const and var can shadow a global-scoped let, const and var variable. For example:
// global scope
const g = 'grape';

if (true) {
// block-scoped (local)
const g = 'gang';
console.log(g); // 'gang'
}

console.log(g); // 'grape'
  `)

  // global scope
  const g = 'grape';

  if (true) {
      // block-scoped (local)
      const g = 'gang';
      console.log("           >>inside if block =>",g); // 'gang'
  }

  console.log("           >>outside if block =>",g); // 'grape'
