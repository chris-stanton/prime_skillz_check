// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle (side1, side2, base){
  function area(side1, side2, base){
    var area = (base * side1) / 2;
  }
  function perimeter(side1, side2, base){
    var perimeter = side1 + side2 + base;
  }
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.


console.log(function(3, 8, 3));
console.log(function(4, 10, 4));
