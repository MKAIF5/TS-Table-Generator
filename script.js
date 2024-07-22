document.getElementById("result").addEventListener("click", function (event) {
    event.preventDefault();
    let btnClick = document.getElementById("inp").value;
    let outputAns = document.getElementById("answer");
    outputAns.innerHTML = "";
    for (i = 1; i <= 10; i++) {
      outputAns.innerHTML += btnClick + "x" + i + "=" + btnClick * i + "<br>";
    }
  });