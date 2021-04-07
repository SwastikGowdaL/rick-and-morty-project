
let name1=document.getElementById("name");
name1.innerText=sessionStorage.getItem("name");
let score = document.getElementById("score");
score.innerText=sessionStorage.getItem("score");

let tryagain=document.getElementById("tryagain");
tryagain.addEventListener("click",function(event){
    window.location="index2.html";
})

let timeup= sessionStorage.getItem("timeup");
if(timeup==1){
    Swal.fire({
        icon: 'error',
        title: "Time's UP ⏰",
      });
}