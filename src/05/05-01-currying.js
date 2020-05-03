function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

// const multiplyX = x => a => multiply(a, x);
function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

// currying's benefit
// can divide parameters
const result1 = multiplyThree(3); // 3*3
const result2 = multiplyFour(3); // 4*3
const result1_2 = multiplyX(3)(3);
const result2_2 = multiplyX(4)(3);

// => ((x*a)*b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => (x) => x * a * b + c;
const fomula = equation(2, 3, 4);
const x = 10;
const result = fomula(x);

const multiply_1 = (a, b) => a * b;
const add_1 = (a, b) => a + b;

const multiplyX_1 = (x) => (a) => multiply_1(x, a);
const addX_1 = (x) => (a) => add_1(x, a);

const addFour = addX_1(4);
const mulTwo = multiplyX_1(2);
const mulThree = multiplyX_1(3);

// x * 2 * 3 + 4
const fomula_1 = (x) => addFour(mulThree(mulTwo(x)));

function compose(funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (value) {
        return nextFunc(prevFunc(value));
      };
    },
    function (k) {
      return k;
    },
  );
}

const formulaWithCompose = compose([mulTwo, mulThree, addFour]);

function compose_1(...funcArr) {
  //const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        //const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    },
  );
}
const formulaWithCompose_1 = compose_1(mulTwo, mulThree, addFour);
const x_1 = 10;
formulaWithCompose_1(10);
