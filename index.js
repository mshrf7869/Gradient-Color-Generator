let btn1=document.querySelector(".button1");
let btn2=document.querySelector(".button2");
let copybx=document.querySelector(".copybox");

const rgbgenerator=()=>{
    let hexavalue="0123456789abcdef";
    let add="#";
    for(let i=0;i<6;i++){
        add=add+hexavalue[Math.floor(Math.random()*16)];
    }
    return add;
}

let rgb1="#000";
let rgb2="#fff";
const btn1fun=()=>{
     rgb1=rgbgenerator();
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    btn1.innerHTML=rgb1;
   copybx.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2});`;
}
const btn2fun=()=>{
    rgb2=rgbgenerator();
   
   document.body.style.backgroundImage=`linear-gradient(to right top,${rgb1},${rgb2})`;
   btn2.innerHTML=rgb2;
   copybx.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2});`;
}
const clipcopy=()=>{
 navigator.clipboard.writeText(copybx.innerText); // it is used to copy the text
 alert("text copied");
}

btn1.addEventListener("click",btn1fun);
btn2.addEventListener("click",btn2fun);

copybx.addEventListener("click",clipcopy);