setInterval(function(){
    var text=document.getElementById("ann");
    if(text.innerHTML==="Webpages"){
        text.innerHTML="Games";
        text.style.color='blue';
        
    }
    else{
            text.innerHTML="Webpages";
            text.style.color='blue';
            text.style.fontWeight='bold';
    }
},1500);
function mainfun(){
    window.location.href="index.html";
}

button=document.getElementById('button');
button.addEventListener('click',()=>{
    window.location.href="https://drive.google.com/drive/folders/13EzK-dJmp6SIQ3D1NJBpPUS5bRZjhjWd?usp=drive_link";
   });

ios=document.getElementById('ios');
ios.addEventListener('click',()=>{
    window.location.href="https://nv-calc.netlify.app/";
});
xo=document.getElementById('xo');
xo.addEventListener('click',()=>{
    window.location.href="https://nv-x-o-game.netlify.app/";
});
pikachu=document.getElementById('pikachu');
pikachu.addEventListener('click',()=>{
    window.location.href="https://dragoxpika.netlify.app/";
});




