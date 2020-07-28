function sumNumbers(...numbers)  {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  const numArr = [1, 2, 3, 4, 5, 6];
  console.log(sumNumbers(...numArr));