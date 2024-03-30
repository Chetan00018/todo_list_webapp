let input=document.getElementById("inputcontent")
let button=document.querySelector("button");
let tasklist=document.querySelector(".tasklist");


button.addEventListener("click",()=>{
    if(input.value==""){
        alert("fill something")
    }else{
    let li=document.createElement("li");
  console.log(li);
  li.innerHTML=input.value;
  tasklist.appendChild(li);
  let span=document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
    }
    input.value="";
    savedata();
});

tasklist.addEventListener("click",function(e){
    
    if(e.target.tagName ==="LI"){
  e.target.classList.toggle("checked")
  savedata();
  
    }
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       savedata();
    }
    else{
        console.log("hello");
    }
});

function savedata(){
localStorage.setItem("data",tasklist.innerHTML);
}

function showdata(){
  tasklist.innerHTML=localStorage.getItem("data")
}
showdata();
// let but=document.querySelector("#btn");

// but.addEventListener("click",function(e){
//   console.log(e.target.tagName);

// console.log(e.tagName)
// })