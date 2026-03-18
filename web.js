function convert(){
    var cm=document.getElementById("cmValueInput").value
    var m=cm/100
    document.getElementById("result").textContent=`Metre value: ${m}`
}

var convertBtn=document.getElementById("convertButton")
convertBtn.addEventListener("click",convert)