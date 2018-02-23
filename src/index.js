module.exports = function solveEquation(equation) {
  var temp = equation.replace('* x^2 ', '').replace('* x ', '').replace(/\s/g, '').match(/[+ -]*\d+/g);
  var a = temp[0], b = temp[1], c = temp[2];
  var D = (b * b - 4 * a * c);
  var result = [];
  if (D > 0) {
    result[0] = Math.round(-b - Math.sqrt(D)) / (2 * a);
    result[1] = Math.round(-b + Math.sqrt(D)) / (2 * a);
  }
  else if (D = 0) {
    result[0] = result[1] = -1 * b / (2 * a);
  }
  else {
    return false;
  }
  sorter = function (r, y) {
    return r - y;
  }
  result.sort(sorter);

  return result;
}
