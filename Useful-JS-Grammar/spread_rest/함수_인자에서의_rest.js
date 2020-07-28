function sumNumbers(a, b, c, d, e)  {
    return a + b + c + d + e;
  }
  
  function sumRestNumbers(...numbers) {
    return numbers.reduce((acc, current) => acc + current , 0);
  }
  
  console.log(sumNumbers(1, 2, 3, 4, 5));
  console.log(sumRestNumbers(1, 2, 3, 4, 5, 6));