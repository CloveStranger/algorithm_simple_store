/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

argumentsLength(1, 2, 3); // 3
argumentsLength(1, {}, []); // 3
argumentsLength(1); // 3
argumentsLength(1, ",", 1231, [], {}); // 3
