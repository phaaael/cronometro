function clock() {
  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });
  }

  const clock = document.querySelector('.clock');
  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function() {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function(event) {
    const el = event.target;

    let insert = document.querySelector('.insert').value
    insert = Number(insert)

    if (el.classList.contains('reset')) {
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      clock.classList.remove('paused');
      seconds = 0;
    }

    if (el.classList.contains('start')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      startClock();
    }

    if (el.classList.contains('stop')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }

    if(el.classList.contains('send')) {
      if(clock.innerHTML = '00:00:00') {    
          console.log(clock.innerHTML = getTimeFromSeconds(seconds + insert))
      }
      seconds = seconds + insert
    }

    if(el.classList.contains('fiveMore')) {
      if(clock.innerHTML = '00:00:00') {
        clock.innerHTML = getTimeFromSeconds(seconds + 5)
      }
      seconds = seconds + 5
    }

    if(el.classList.contains('fifteenMore')) {
      if(clock.innerHTML = '00:00:00') {
        clock.innerHTML = getTimeFromSeconds(seconds + 15)
      }
      seconds = seconds + 15
    }

    if(el.classList.contains('thirtyMore')) {
      if(clock.innerHTML = '00:00:00') {
        clock.innerHTML = getTimeFromSeconds(seconds + 30)
      }
      seconds = seconds + 30
    }

    if(el.classList.contains('fortyfiveMore')) {
      if(clock.innerHTML = '00:00:00') {
        clock.innerHTML = getTimeFromSeconds(seconds + 45)
      }
      seconds = seconds + 45
    }
  });
}

clock();
