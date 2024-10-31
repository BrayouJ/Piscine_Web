function range(start, end, step) {
    if (step == undefined) {
      step = 1;
    }
    var result = [];
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
   
    for (var i = start; i >= end; i += step) {
      result.push(i);
    }
   
    return result;
}
   
module.exports = { range };