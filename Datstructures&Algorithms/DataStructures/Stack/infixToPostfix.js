/*
Algorithm
 - loop through the expression
 - Output any operand encountered to the result variable
 - Push the 1st operator to a stack
 - For the subsequent operators, if the current operator has a lower precedence,
   than the operator ontop of the stack, shift the operator to the result variable.
 - Continue to pop from the stack if the current operator precedence is lower than or equal to
   the top operator on the stack
 - If ( is encountered, push it to the stack, if ) is encountered, pop out all operands until ) is reached. pop ( also.
*/

const operatorPrecedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };

const isAlphaOrDigit = (ch) => /^[A-Z]$/i.test(ch) || !isNaN(ch);
const isStackEmpty = (stack) => Boolean(stack.length);
const peek = (stack) => stack[stack.length - 1];
const lessOrEqualPrecedence = (stack, currElem) => {
  const topOprt = peek(stack);
  return operatorPrecedence[currElem] <= operatorPrecedence[topOprt]
    ? true
    : false;
};

const infixToPostfix = (exp) => {
  let postfix = [];
  const expressionArr = exp.split(" ");
  const operatorStack = [];

  for (let elem of expressionArr) {
    if (isAlphaOrDigit(elem)) {
      postfix.push(elem);
    } else if (elem === "(") {
      operatorStack.push(elem);
    } else if (elem === ")") {
      while (isStackEmpty(operatorStack) && peek(operatorStack) !== "(") {
        const operator = operatorStack.pop();
        postfix.push(operator);
      }
      operatorStack.pop();
    } else {
      while (
        isStackEmpty(operatorStack) &&
        lessOrEqualPrecedence(operatorStack, elem)
      ) {
        const operator = operatorStack.pop();

        postfix.push(operator);
      }
      operatorStack.push(elem);
    }
  }
  while (isStackEmpty(operatorStack)) {
    const operator = operatorStack.pop();
    postfix.push(operator);
  }

  return postfix.join(" ");
};

const operations = {
  "^": (f, s) => Math.pow(f, s),
  "/": (f, s) => f / s,
  "*": (f, s) => f * s,
  "-": (f, s) => f - s,
  "+": (f, s) => f + s,
};

const evaluatePostfix = (expression) => {
  const operandsStack = [];
  const expressionArr = expression.split(" ");
  for (let elem of expressionArr) {
    if (isNaN(elem)) {
      const val1 = operandsStack.pop();
      const val2 = operandsStack.pop();
      operandsStack.push(operations[elem](val2, val1));
    } else {
      operandsStack.push(Number(elem));
    }
  }
  return operandsStack[0];
};

console.log(evaluatePostfix(infixToPostfix("127")));
console.log(evaluatePostfix(infixToPostfix("2 + 3")));
console.log(evaluatePostfix(infixToPostfix("2 - 3 - 4")));
console.log(evaluatePostfix(infixToPostfix("10 * 5 / 2")));
