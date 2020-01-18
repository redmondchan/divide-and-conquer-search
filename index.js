//function that accepts a sorted array and a value. It'll find the the location of the value within the array. If the value is not found, it'll return -1

function search(array, value){
  let start = 0
  let end = array.length - 1

  while(start <= end){
    let middle = Math.floor((start + end )/ 2)
    if(array[middle] > value){
      end = middle - 1
    } else if (array[middle] < value) {
      start = middle + 1
    } else {
      return middle
    }
  }

  return -1
}

console.log(search([1, 2, 3 ,4, 5, 6, 7], 4)) //3
console.log(search([1, 2, 3 ,4, 5, 6, 7], 6)) //5
console.log(search([1, 2, 3 ,4, 5, 6, 7], 11)) //-1