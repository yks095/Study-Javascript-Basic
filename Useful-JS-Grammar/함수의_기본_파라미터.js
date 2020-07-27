function calculateCircleAreaFirst(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
  }
  
  function calculateCircleAreaSecond(r = 1) {
    return Math.PI * r * r;
  }
  
  const calculateCircleAreaThird = (r = 1) => Math.PI * r * r;
  
  let area = calculateCircleAreaFirst();
  console.log(area);
  area = calculateCircleAreaSecond();
  console.log(area);
  area = calculateCircleAreaThird();
  console.log(area);
  