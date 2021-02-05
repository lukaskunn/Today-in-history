function shuffle(array, size) {
  var newArray = [];

  for (let i = 0; i < size; i++) {
    var randomItem = array[Math.floor(Math.random() * array.length)];
    var index = array.indexOf(randomItem);
    array.splice(index, 1);
    newArray.push(randomItem);
  }

  newArray.sort(dynamicSort('year'));
  return newArray;
}

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

export default shuffle;