function convert() {
    let temp = document.getElementById("temp").value;
    let choice = document.getElementById("choice").value;
    let result = document.getElementById("result");

    if(temp == "") {
        result.innerHTML = "Enter temperature";
        return;
    }

    if(choice == "CtoF") {
        let f = (temp * 9/5) + 32;
        result.innerHTML = temp + " °C = " + f + " °F";
    }

    else {
        let c = (temp - 32) * 5/9;
        result.innerHTML = temp + " °F = " + c + " °C";
    }

}