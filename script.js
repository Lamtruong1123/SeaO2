// Count up animation for total stats
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer = setInterval(function () {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      obj.textContent = value;
      if (value === end) clearInterval(timer);
    }, stepTime);
  }
  
  window.onload = function () {
    animateValue("carbonCount", 0, 3150, 2000);
    animateValue("salesCount", 0, 23400, 2000);
  };
  