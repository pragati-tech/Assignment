/*declairing variables*/ 
var messagebox=document.querySelector("#messagebox")
var close=document.querySelector("#right i")
var right=document.querySelector("#right")
var center=document.querySelector("#center")
var info=document.querySelector("#nav #profilepic")
var infoname=document.querySelector("#nav #name")
var chat=document.querySelector(".chat")
var like=document.querySelector("#icons #like")
var left=document.querySelector("#left")


var x = window.matchMedia("(max-width: 500px)")
var messenger=[{name:"David christopher"},{name:"David christopher"},
{name:"David christopher"},
{name:"David christopher"},
{name:"David christopher"}]




/*Defining functions*/ 
function showmessage(){
    var temp=``
    messenger.forEach(function(messages){
        temp+=` <div class="message">
        <div id="profilepic"></div>
        <div id="name">
            <h4 style="color: #083570;">${messages.name}</h4>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div id="date">
        <small style="font-size: 12px;color:rgb(163, 163, 163); text-align:center" >14:02</small>
    </div>
       </div>
       <hr style="border:5px solid white">`
    })
    document.querySelector("#messagebox").innerHTML=temp
}

close.addEventListener("click",function(){
    right.style.display="none"
    center.style.width="70%"
})

info.addEventListener("click",function(){
    right.style.display="initial"
    center.style.width="45%"
})

infoname.addEventListener("click",function(){
    right.style.display="initial"
    center.style.width="45%"
})

chat.addEventListener("click",function(){
    center.style.width="70%"
    right.style.display="none"
})
function likeduser(){   
    var flag=0;
if (flag==0){
    like.addEventListener("click",function(){
        like.innerHTML="<i class='ri-heart-fill'></i>"
        flag=1;
    })
}
else{
    like.addEventListener("click",function(){
        like.innerHTML="<i class='ri-heart-line'></i>"
        flag=0;
    })
}
}
function mobilescreen(){
    if(x.matches){
        messagebox.addEventListener("click",function(){
            center.style.display="initial"
            center.style.width="100%"
            left.style.display="none"
        })
        info.addEventListener("click",function(){
            center.style.display="none"
        })
    }
    else{
        
    }
}






/*calling functions*/
showmessage() 
likeduser()
mobilescreen()

