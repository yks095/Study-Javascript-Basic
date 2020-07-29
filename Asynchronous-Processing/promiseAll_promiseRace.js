function sleep(ms)  {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '강아지';
  }
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  }
  
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  }
  
  async function process()  {
    try {
      const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);                   // 가장 빨리 끝난 것에서 에러가 발생하면 에러가 난 것으로 간주하고, 나머지에서 에러가 나면 상관없음
      const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);    // 3개 중 하나라도 에러가 발생하면 전체가 에러가 난 것으러 간주함
      console.log(dog);
      console.log(rabbit);
      console.log(turtle);
      console.log('first : ' + first);
    } catch(e)  {
      console.log(e);
    }
  }
  
  process();