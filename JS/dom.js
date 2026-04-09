//doument.writeIn("hello")

function result(){

 let inputData=document.getElementById("inputText").Value;
let headingText=document.getElementById('text').textcontent=inputData;

//valid age for age casting
if(inputData>=18){
    alert("Valid Data");

}
else{
    alert("not valid");
}

    let changecolor=document.getElementById('text');
    changecolor.style.color="red";

    let bodycolor=document.getElementsByTagName('body')[0];
    bodycolor.style.backgroundColor="blue";
}


let para=document.getElementById("paratext");
function changetextcolor(){
    para.style.backgroundColor="#"+Math.floor(Math.random()*1677215)

}
para.addEventListener('mouseover',changetextcolor);