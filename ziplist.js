const testList1 = ["a", "b", "c"];
const testList2 = [1, 2, 3];

function zipList(str, num) {

  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i], num[i]);
  }
  return result;
}

console.log(zipList(testList1, testList2));

function ziplistTheSimpleWay(str, length) {
  let result = _.zip(str, length);
  return _.object(result);
}

console.log(ziplistTheSimpleWay(testList1, testList2));
