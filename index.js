function receivesAFunction(cbf) {
  cbf();
  return "ran cbf";
}

function returnsANamedFunction() {
  return function aNamedFunction() {
    return "a named function";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return "anonymous function";
  };
}
