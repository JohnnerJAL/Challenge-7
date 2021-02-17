const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const textOnScreen = "I like programming";
let idx = 1;
let speed = 300 / speedEl.value;


(function writeText() {
  
  textEl.innerText = textOnScreen.slice(0,idx)

  idx++
  
  if(idx > textOnScreen.length) {
    idx = 1;
  }

  setTimeout(() => writeText(), speed);

})();

speedEl.addEventListener('click', (e) => {
  speed = 300 / e.target.value;
})

