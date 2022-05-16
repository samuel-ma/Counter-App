
// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');
const zero = document.querySelector('.zero');
const buttons = document.querySelector('.buttons');

buttons.addEventListener("click", (e) => {
  if(e.target.classList.contains("add")){
    zero.innerHTML++;
    setColor();
  }
  if(e.target.classList.contains("subtract")){
    zero.innerHTML--;
    setColor();
  }
  if(e.target.classList.contains("reset")){
    zero.innerHTML = 0;
    setColor();
  }
});

function setColor(){
  if (zero.innerHTML > 0){
    zero.style.color = "yellow";
  }else if (zero.innerHTML < 0){
    zero.style.color = "red";
    
  }else{
    zero.style.color = "white";
  }
  }




// add.addEventListener("click", () => {
//   count.innerHTML++;
// })

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// })

// add.addEventListener("click", () => {
//   count.innerHTML = 0;
// })

