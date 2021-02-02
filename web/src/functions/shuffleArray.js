function shuffle(array, size) {
    var newArray = [];
  
    for (let i = 0; i < size; i++) {
      var randomItem = array[Math.floor(Math.random()*array.length)];
      var index = array.indexOf(randomItem);
      array.splice(index, 1);
      newArray.push(randomItem);
    }
  
    newArray.sort();
    return newArray;
  }
  
  export default shuffle;