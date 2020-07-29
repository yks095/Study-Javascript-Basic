// Promise를 더 쉽게 사용하기 위한 방법 => async, await
function sleep(ms)  {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  async function process()  {   // 함수 앞에 'async' 키워드
    console.log('start');       
    await sleep(1000);          // promise 앞에 'await' 키워드
    console.log('end');
  
    return true;
  }
  
  async function processError()  {   // 함수 앞에 'async' 키워드
    try {
      await makeError();
    } catch(e){
      console.error(e);
    }
  }
  
  async function makeError()  {
    await sleep(1000);
    const error = new Error();
    throw error;
  }
  
  process().then(value => {
    console.log(value);       // async 함수를 실행하면 promise를 반환
  });
  processError();