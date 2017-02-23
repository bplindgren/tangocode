// --------- Assignment 1 ---------

// var myArray = [1, 6, 7, -5, 13, 25, 4, 5, 15, -8]

// First Solution
function difference(array) {
  var largestDiff = 0

  // Iterate over each index of the array and compare its value to the value
  // of every other index in the array. If the difference is greater than the
  // value stored at largestDiff, update largestDiff
  for (i = 0; i < array.length; i++) {
    for (y = 0; y < array.length; y++) {
      if ((array[i] - array[y]) > largestDiff) {
        largestDiff = array[i] - array[y]
      }
    }
  }
  return largestDiff
}

// console.log(difference(myArray))


// Second Solution
function difference2(array) {
  return Math.max.apply(null, array) - Math.min.apply(null, array)
}

// console.log(difference2(myArray))

// The second solution is the better solution. In the first solution, the array must be
// iterated over array.length() times. As an array gets larger, this becomes a lengthy
// operation. In the second solution, by taking advantage of some methods from the built
// in Math object, the highest and lowest values can be found very quickly. Then just
// subtract the lowest value from the highest value.




// --------- Assignment 2 ---------

// Rectangle objects
// rect1 = { x: 20, y: 30, width: 40, height: 11 }
// rect2 = { x: 50, y: 22, width: 26, height: 36 }
// rect3 = { x: 10, y: 10, width: 30, height: 20 }
// rect4 = { x: 45, y: 10, width: 12, height: 4 }

// Helper function to get the max and min extent of a rectangle
function getMaxAndMin(rect) {
  var values = {}
  values.Xmin = rect.x
  values.Xmax = rect.x + rect.width
  values.Ymin = rect.y
  values.Ymax = rect.y + rect.height
  return values
}

// Helper function to determine if the X ranges and Y ranges overlap
function withinRange(rect1, rect2) {
  return ((rect1.Xmin >= rect2.Xmin && rect1.Xmin <= rect2.Xmax ||
          rect1.Xmax >= rect2.Xmin && rect1.Xmax <= rect2.Xmax) &&
          (rect1.Ymin >= rect2.Ymin && rect1.Ymin <= rect2.Ymax ||
          rect1.Ymax >= rect2.Ymin && rect1.Ymax <= rect2.Ymax))
}

function intersect(rect1, rect2) {
  // Determine rect1 Xmax, Xmin, Ymax, Ymin
  var rect1 = getMaxAndMin(rect1)
  // Determine rect2 Xmax, Xmin, Ymax, Ymin
  var rect2 = getMaxAndMin(rect2)

  // Check if rect1 X range is within rect2 X range
  return withinRange(rect1, rect2)

}

// console.log(intersect(rect1, rect2))
// console.log(intersect(rect1, rect3))
// console.log(intersect(rect1, rect4))
// console.log(intersect(rect2, rect3))
// console.log(intersect(rect2, rect4))
// console.log(intersect(rect3, rect4))




// --------- Assignment 3 ---------

// function assignment3(str) {
//   var h = 7
//   var letters = ["a", "c", "d", "e", "g", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w"]

//   for (var i = 0; i < str.length; i++) {
//     var letter = str[i]
//     var index = letters.indexOf(letter)
//     h = (h * 37) + index
//   }
//   return h
// }

// console.log(assignment3("leepdag"))
// console.log(assignment3("correct"))

function assignment3num(num) {
  var letters = ["a", "c", "d", "e", "g", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w"]
  var str = ''

  while (num > 7) {
    var newLetter = letters[(num % 37)]
    str = newLetter + str
    num = Math.floor(num / 37)
  }

  return str
}

// console.log(assignment3num(680131662011))
// console.log(assignment3num(667734139064))