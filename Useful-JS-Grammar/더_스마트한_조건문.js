function getSound(animal) {
    const sounds = {
      개 : '멍멍',
      고양이 : '야옹',
      참새 : '짹짹',
      비둘기 : '구구'
    };
  
    return sounds[animal] || '...?';
  }
  
  console.log(getSound('개'));
  console.log(getSound('고양이'));
  console.log(getSound('인간'));

  
  function makeSound(animal)  {
    const tasks = {
      개 : () => {
        console.log('멍멍');
      },
      고양이() {
        console.log('야옹');
      },
      비둘기 : function() {
        console.log("구구");
      }
    }
    const task = tasks[animal];
    if(!task)  {
      console.log('...?');
      return;
    }
    task();
  }
  
  makeSound('개');
  makeSound('고양이');
  makeSound('인간');