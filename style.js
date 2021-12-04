const { html2pdf } = require("./html2pdf.bundle.min")

function donesubmit(){
    let container = document.getElementById("cont")
    //second cont
    let container2 = document.getElementById("contt-2")

    //image setting process

    let imgfile = document.getElementById("picF").files[0]
    let imgfile2 = document.getElementById("picF2").files[0]

    console.log(imgfile)
    console.log(imgfile2)
    let reader = new FileReader()
    let reader1 = new FileReader()


reader.readAsDataURL(imgfile)
reader1.readAsDataURL(imgfile2)
console.log(reader.result)
console.log(reader1.result)

//setting on template
reader.onloadend = function(){
    document.getElementById('imgedit').src = reader.result;
}


    reader1.onloadend=function(){document.getElementById('imgedit1').src = reader1.result;}

container.style.display="none"



document.getElementById("nameT").innerHTML=document.getElementById('fnameF').value
document.getElementById("pnameT").innerHTML=document.getElementById('PnameF').value
document.getElementById("mnameT").innerHTML=document.getElementById('MnameF').value
document.getElementById("cnameT").innerHTML=document.getElementById('cnameF').value
document.getElementById("snameT").innerHTML=document.getElementById('addressF').value
document.getElementById("telnoT").innerHTML=document.getElementById('tnumberF').value
document.getElementById("fnameT2").innerHTML=document.getElementById('fnameF').value
//document.getElementById("classT2").innerHTML=document.getElementById('cnameF').value
document.getElementById("classt2").innerHTML=document.getElementById('cnameF').value
document.getElementById("signt").innerHTML=document.getElementById("signF").value

container2.style.display="block"

}



//function call

function downloadpdf(){
    let areaId = document.getElementById("contt-2");
    html2pdf(areaId)}

    function printID(){
        window.print("contt-2")
    }