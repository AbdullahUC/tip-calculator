const btn = document.getElementsByClassName("btn-percent");
const input1 = document.getElementById("input1");
const custom = document.getElementById("input2");
const input2 = document.getElementById("input3");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const none = document.getElementById("none");
const reset = document.getElementById("reset");

const test = (prop) => {
    let percent;
    if(custom.value > 1){
        percent = custom.value
    }
    if(document.getElementById('5').checked && custom.value < 1){
        percent = 5;
    }else if(document.getElementById('10').checked && custom.value < 1){
        percent = 10;
    }else if(document.getElementById('15').checked && custom.value < 1){
        percent = 15;
    }else if(document.getElementById('20').checked && custom.value < 1){
        percent = 20;
    }else if(document.getElementById('25').checked && custom.value < 1){
        percent = 25;
    }else if(custom.value <= 1){
        percent = 100;
    }

    let num = input1.value * percent / 100;
    if(input2.value == 0){
        input2.value = 1;
    }else{
        input2.value == input2.value
    }
    let num2 = num / input2.value;
    let num3 = num2.toFixed(2)
    if(num3 == NaN){
        num3 = 0.00;
    }
    let subtotal = input1.value / input2.value;
    let intnum3 = parseInt(num3);
    let total = subtotal + intnum3;
    result1.innerHTML = `$` + num3;
    result2.innerHTML = `$` + total.toFixed(2);

    if(num3 == 0.00){
        reset.style.backgroundColor = "#0d686d"
    }else{
        reset.style.backgroundColor = "#25c2ad"
    }
}

reset.addEventListener("click", function(){
    input1.value = '';
    test();
})