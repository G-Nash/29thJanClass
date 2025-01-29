let timer=document.getElementById("p1")
let vd=document.getElementById("vd")

let t=3

setInterval(() => {
    if (t>=0){
        timer.innerText=t--
    }
    else{
        timer.style.display="none"
        vd.style.display="flex"
    }
}, 1000);