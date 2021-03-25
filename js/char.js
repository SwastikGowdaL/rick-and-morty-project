const app = document.getElementById('image-space')

const option1=document.getElementById("ans")

const option2=document.getElementById("ans2")

const option3=document.getElementById("ans3")

const option4=document.getElementById("ans4")

fetch("https://rickandmortyapi.com/api/character?page=20")
.then(res => res.json())
.then(data =>{
  var i = Math.floor((Math.random() * 20) + 1);
  

  const image=document.createElement('img')
  image.src=data.results[i].image

  app.appendChild(image)

  var options=[]
  options[0]=data.results[i].name
  
  var x=0

  for(x=0;x<3;x++){
    var j = Math.floor((Math.random() * 20) + 1);
    options.push(data.results[j].name)
  }
  
  options.sort()

  option1.textContent=options[0]
  option2.textContent=options[1]
  option3.textContent=options[2]
  option4.textContent=options[3]

})


   