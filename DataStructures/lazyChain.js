const lazyChain = arg => {
  let finalValue = arg;

  let chain = {
    invoke,
    value
  };

  function value() {
    return finalValue;
  }
  function invoke(name, ...args) {
    finalValue = finalValue[name](...args);
    return chain;
  }
  return chain;
};

const lazyChainSecond = arg => {
  const operationAndArgs = [];

  const chain = {
    invoke,
    value
  };

  function value() {
    return operationAndArgs.reduce(
      (finalValAcc, currFunc) => finalValAcc[currFunc.func](...currFunc.args),
      arg
    );
  }

  function invoke(func, ...args) {
    operationAndArgs.push({ func, args });
    return chain;
  }

  return chain;
};

const lazyChainThird = (arg, numberOfInvocations = []) => {
  return {
    invoke: (func, ...args) => {
      return lazyChainThird(arg, [...numberOfInvocations, { func, args }]);
    },
    value: () => {
      return numberOfInvocations.reduce((currentResult, currFuncAndArgs) => {
        return currentResult[currFuncAndArgs.func](...currFuncAndArgs.args);
      }, arg);
    }
  };
};

console.log(
  lazyChainThird("hello")
    .invoke("toUpperCase")
    .invoke("split", "")
    .value()
);
console.log(
  lazyChainSecond("hello")
    .invoke("toUpperCase")
    .invoke("split", "")
    .value()
);

console.log(
  lazyChain([1, 2, 3])
    .invoke("map", x => x * x)
    .invoke("reverse")
    .value()
);
console.log(
  lazyChainThird([1, 2, 3])
    .invoke("map", x => x * x)
    .invoke("reverse")
    .value()
);
