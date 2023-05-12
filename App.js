function addNum()
{
    var F_num = parseFloat(document.getElementById("num1").value)||0;
    var S_num = parseFloat(document.getElementById("num2").value)||0;
    var T_num = parseFloat(document.getElementById("num3").value)||0;
    var cal = document.getElementById("answer");
    var calculate = F_num+S_num+T_num;
    cal.value = calculate

}
function subNum()
{
    var F_num = parseFloat(document.getElementById("num1").value)||0;
    var S_num = parseFloat(document.getElementById("num2").value)||0;
    var T_num = parseFloat(document.getElementById("num3").value)||0;
    var cal = document.getElementById("answer");
    var calculate = F_num-S_num-T_num;
    cal.value = calculate

}
function multiplyNum()
{
    var F_num = parseFloat(document.getElementById("num1").value)||1;
    var S_num = parseFloat(document.getElementById("num2").value)||1;
    var T_num = parseFloat(document.getElementById("num3").value)||1;
    var cal = document.getElementById("answer");
    var calculate = F_num*S_num*T_num;
    cal.value = calculate

}
function divideNum()
{
    var F_num = parseFloat(document.getElementById("num1").value)||1;
    var S_num = parseFloat(document.getElementById("num2").value)||1;
    var T_num = parseFloat(document.getElementById("num3").value)||1;
    var cal = document.getElementById("answer");
    var calculate = F_num/S_num/T_num;
    cal.value = calculate

}
function remainderNum()
{
    var F_num = parseFloat(document.getElementById("num1").value)||1;
    var S_num = parseFloat(document.getElementById("num2").value)||1;
    var cal = document.getElementById("answer");
    var calculate = F_num%S_num;
    cal.value = calculate

}
function percentageNum()
{
    var F_num = parseFloat(document.getElementById("num1").value)||1;
    var S_num = parseFloat(document.getElementById("num2").value)||1;
    var cal = document.getElementById("answer");
    var calculate = (F_num/100)*S_num;
    cal.value = calculate

}