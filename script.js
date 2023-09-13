var durum = false;
var oprt = "";
var sonuc = "0";
// var bekleyenDeger="";
var ekran=document.querySelector(".calculate-input")
var btn =document.querySelectorAll(".button")
var operator=document.querySelectorAll(".operator")
var clear=document.querySelector(".clear")
var esittir=document.querySelector(".equal")
var decimal=document.querySelector(".decimal")



ekran.value="0"
btn.forEach(function(element){
    element.onclick=function(e){
        if(ekran.value == "0" || durum){
            ekran.value=""
        }
        ekran.value+=e.target.value
        durum=false
    }
})

operator.forEach(function(element){
    element.onclick=function(e){
        durum = true
        var yeni = this.value
        // bekleyenDeger=ekran.value+bekleyenDeger.value
    if(!durum){
        switch(oprt){
            case "+":ekran.value=(sonuc + Number(ekran.value));break
            case "-":ekran.value=(sonuc - Number(ekran.value));break
            case "*":ekran.value=(sonuc * Number(ekran.value));break
            case "/":ekran.value=(sonuc / Number(ekran.value));break
            default:break;

        }}
        sonuc=Number(ekran.value);
        oprt=yeni
    }
})
clear.onclick=function(){
    ekran.value="0"
    sonuc="0"
    oprt=""
    // bekleyenDeger=""
}

esittir.onclick=function(){
    // bekleyenDeger.value=""
    durum=true

    switch(oprt){
        case "+":ekran.value=(sonuc + Number(ekran.value));break
        case "-":ekran.value=(sonuc - Number(ekran.value));break
        case "*":ekran.value=(sonuc * Number(ekran.value));break
        case "/":ekran.value=(sonuc / Number(ekran.value));break
        default:break;
    }
    sonuc = Number(ekran.value);
    ekran.value = sonuc
    sonuc=0;
    oprt=""
}
decimal.onclick=function(){
    if(!ekran.value.includes(".") && !durum){
        ekran.value+="."
    }else if(durum){
        ekran.value="0"
    }
}