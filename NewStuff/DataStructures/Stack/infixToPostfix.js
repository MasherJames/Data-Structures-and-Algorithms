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

const isAlpha = (ch) => /^[A-Z]$/i.test(ch);
const isStackEmpty = (stack) => Boolean(stack.length);
const peek = (stack) => stack[stack.length - 1];
const lessOrEqualPrecedence = (stack, currElem) => {
  const topOprt = peek(stack);
  return operatorPrecedence[currElem] <= operatorPrecedence[topOprt]
    ? true
    : false;
};

const infixToPostfix = (exp) => {
  let postfix = "";
  const operatorStack = [];
  for (let elem of exp) {
    if (isAlpha(elem)) {
      postfix += elem;
    } else if (elem === "(") {
      operatorStack.push(elem);
    } else if (elem === ")") {
      while (isStackEmpty(operatorStack) && peek(operatorStack) !== "(") {
        const operator = operatorStack.pop();
        postfix += operator;
      }
      operatorStack.pop();
    } else {
      while (
        isStackEmpty(operatorStack) &&
        lessOrEqualPrecedence(operatorStack, elem)
      ) {
        const operator = operatorStack.pop();
        postfix += operator;
      }
      operatorStack.push(elem);
    }
  }
  while (isStackEmpty(operatorStack)) {
    const operator = operatorStack.pop();
    postfix += operator;
  }
  return postfix;
};
console.log(infixToPostfix("a+b*c-d"));
console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i"));
