// function syncWork() {
//   const start = Date.now();
//   for(let i = 0; i < 1000000000; i++) {

//   }
//   const end = Date.now();
//   console.log(end - start + 'ms');
// }

// syncWork();
// console.log('Next Step of Synchronous');
// console.log();

function asyncWork(callback) {                              // 3
    // asyncWork 함수가 끝난 다음에 어떠한 작업을 하고 싶을 때 => callback 함수를 파라미터로 전달
    setTimeout(() => {                                      // 4
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + "ms");                      // 6
      callback(end - start);                                // 7
    }, 0); // 0 => 어떤 수치만큼의 시간이 흐른 후, 특정 작업을 하겠다. 즉 0에는 어떤 수치만큼의 시간(ms) 입력
  } // 실제로는 0ms가 아닌 4ms 이후에 실행. 브라우저에서 지정한 최소값이 4ms
  
  console.log("Start Asynchronous Work");                   // 1
  asyncWork(ms => {                                         // 2
    console.log("End Asyncronous Work");                    // 8
    console.log("During " + ms + "ms...");                  // 9(ms = 7번째 순서에서 계산된 end - start의 값이 파라미터로 넘어옴)
  });
  console.log("Start Next Step of Asynchronous Work");      // 5
  
  // 보통 'Ajax Web API 요청, 파일 읽기, 압호화/복호화, 작업 예약' 에서 많이 사용