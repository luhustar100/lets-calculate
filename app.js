function getnumber (num)
{
 var output= document.getElementById("result");
 output.value += num;
}

function clearscreen()
{
    var output= document.getElementById("result");
    output.value = ""
}

function getoutput()
{
    var output= document.getElementById("result");
    output.value = eval(output.value)
}