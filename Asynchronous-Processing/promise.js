// promise => callback 지옥을 해결하기 위한 방법
const myPromiseResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result");
    }, 1000);
  });
  
  myPromiseResolve.then(result => {
    console.log(result);
  });
  
  console.log();
  
  const myPromiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 1000);
  });
  
  myPromiseReject
    .then(result => {
      console.log(result);
    })
    .catch(e => {
      console.error(e);
    });
  
    function increaseAndPrint(n) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
              const error = new Error();
              error.name = "ValueIsFiveError";
              reject(error);
              return;
            }
            console.log("result : " + value);
            resolve(value);
          }, 1000);
        });
      }
      
      increaseAndPrint(0)
        .then(increaseAndPrint)
        .then(increaseAndPrint)     // 특정 값을 공유하면서 연달아서 작업하기 번거로움
        .then(increaseAndPrint)
        .then(increaseAndPrint)
        .catch(e => {               // 어떤 then에서 에러가 발생했는지 파악하기 어려움
          console.error(e);
        });
      