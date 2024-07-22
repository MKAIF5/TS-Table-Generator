// console.log("kaif");
// console.log(15 + 15);

 const button =  document.getElementById("result") as HTMLButtonElement

button.addEventListener("click", function (event) {
    event.preventDefault();
    let btnClick = document.getElementById("inp") as HTMLInputElement
    let outputAns = document.getElementById("answer") as HTMLParagraphElement
    outputAns.innerHTML = "";
    for ( let i = 1; i <= 10; i++) {
      outputAns.innerHTML += ` ${btnClick} + "x" + i + "=" + ${btnClick} * i + </br>`;
    }
  });