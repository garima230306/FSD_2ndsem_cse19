function calculateSum() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let sum = n1 + n2;

    document.getElementById("result").innerText = "Result: " + sum;
  }
