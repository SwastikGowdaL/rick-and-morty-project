//for randomizing options 
function shuffle(arr) {
    let len = arr.length;
    const d = len;
    const array = [];
    let k;
    let i;
    for (i = 0; i < d; i++) {
      k = Math.floor(Math.random() * len);
      array.push(arr[k]);
      arr.splice(k, 1);
      len = arr.length;
    }
    for (i = 0; i < d; i++) {
      arr[i] = array[i];
    }
    return arr;
  }

//for random questions 
function fun(min, max) {
    const c = Math.floor(Math.random() * (max - min)) + min;
    return c;
  }

//assigning the variable with their respective id 
let question = document.getElementById("question");
let question_num=document.getElementById("question-num");
let question_img=document.getElementById("question-img");
let question_txt=document.getElementById("forq2");
let hint=document.getElementById("hints");
let ans1=document.getElementById("ans-btn1");
let ans2=document.getElementById("ans-btn2");
let ans3=document.getElementById("ans-btn3");
let ans4=document.getElementById("ans-btn4");
let timer=document.getElementById("index2-sub-space6-1");
let q_left = document.getElementById("question-left");

//function for getting the data
function makeGetRequest(path) {
    return new Promise(function (resolve, reject) {
        axios.get(path)
          .then(response => {
                var result = response.data;
                resolve(result);
            })
          .catch(error => {
                reject(error);
            });
    });
}

let i=0;
let ccount=0;

let question_1;

let question_2;
let q2_op=[];

let question_3;
let q3_op=[];

let question_4;

let question_5;
let q5_op=[];

let question_6;
let q6_op=[];

let question_7;
let q7_op=[];

let question_8;
let q8_op=[];

let question_9;
let q9_op=[];

let question_10;
let q10_op=[];

let cor1=0;
let cor2=0;
let cor3=0;
let cor4=0;
let cor5=0;
let cor6=0;
let cor7=0;
let cor8=0;
let cor9=0;
let cor10=0;

let corans=0;

let w1=0;
let w2=0;
let w3=0;
let w4=0;
let w5=0;
let w6=0;
let w7=0;
let w8=0;
let w9=0;
let w10=0;

let  qq=11;
main();

//function for the assigning the question in a array variable 
async function main(){

  //first question
    var rand = fun(1,670);
    question_1= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);

    //second question
    rand = fun(1,100);
    question_2= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
    q2_op.push(question_2.name);
    for(let j=0;j<3;j++){
      rand = fun(1,670);
      let options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
      q2_op.push(options.name);
    }

  //third question 
  rand = fun(1,100);
    question_3= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
    q3_op.push(question_3.image);
    for(let j=0;j<3;j++){
      rand = fun(1,670);
      let options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
      q3_op.push(options.image);
    }

//fourth question
   rand = fun(1,670);
  question_4= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);


//fifth question
rand = fun(20,670);
    question_5= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
    while(question_5.type===""){
      rand = fun(20,670);
      question_5= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
    }
    q5_op.push(question_5.type);
    for(let j=0;j<3;j++){
      rand = fun(20,670);
      let options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
      while(options.type==="" || options.type===question_5.type){
        rand = fun(20,670);
      options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
      }
      q5_op.push(options.type);
    }


//sixth  question
rand = fun(1,670);
    question_6= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
    while(question_6.origin.name==="undefined"){
      rand = fun(1,670);
      question_6= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
    }
    q6_op.push(question_6.origin.name);
    for(let j=0;j<3;j++){
      rand = fun(1,670);
      let options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
      while(options.origin.name==="undefined" || options.origin.name==="unknown" || options.origin.name===question_6.origin.name){
        rand = fun(1,670);
      options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
      }
      q6_op.push(options.origin.name);
    }

//seventh question 
   rand = fun(1,670);
  question_7= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
let ep=question_7.episode[0];
let split_ep=ep.split("episode/");
q7_op.push(Number(split_ep[1]));
for(let j=0;j<3;j++){
  rand = fun(1,41);
  while(rand===q7_op[0]){
    rand = fun(1,41);
  }
  q7_op.push(rand);
}



//eight question
rand = fun(1,670);
question_8= await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
q8_op.push(question_8.location.name);
for(let j=0;j<3;j++){
  rand = fun(1,670);
  let options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
  while(options.location.name===question_8.location.name){
    rand = fun(1,670);
  options=await makeGetRequest(`https://rickandmortyapi.com/api/character/${rand}`);
  }
  q8_op.push(options.location.name);
}


//ninth question
rand=fun(1,41);
question_9= await makeGetRequest(`https://rickandmortyapi.com/api/episode/${rand}`);
q9_op.push(question_9.name);
for(let j=0;j<3;j++){
  rand = fun(1,41);
  let options=await makeGetRequest(`https://rickandmortyapi.com/api/episode/${rand}`);
  while(options.name===question_8.name){
    rand = fun(1,670);
  options=await makeGetRequest(`https://rickandmortyapi.com/api/episode/${rand}`);
  }
  q9_op.push(options.name);
}


//tenth question
rand=fun(1,108);
question_10= await makeGetRequest(`https://rickandmortyapi.com/api/location/${rand}`);
q10_op.push(question_10.type);
for(let j=0;j<3;j++){
  rand = fun(1,108);
  let options=await makeGetRequest(`https://rickandmortyapi.com/api/location/${rand}`);
  while(options.type===question_10.type){
    rand = fun(1,108);
  options=await makeGetRequest(`https://rickandmortyapi.com/api/location/${rand}`);
  }
  q10_op.push(options.type);
}


    ques1(question_1,ques2);
  // ques2(question_2);

  setTimeout(()=>{

    sessionStorage.setItem('score', corans);
    let num=1;
    sessionStorage.setItem('timeup', num);
    window.location.href = "indexlast.html";

  },180000);

}

function ques1(q,callback){
  // return new Promise( function(resolve,reject){
  i++;
  document.getElementById("body-id").style.visibility="visible";
question_num.innerText=i;
question.textContent = 'What is the gender of the below character?';
question_img.setAttribute('src', q.image);
hint.innerHTML = 'Click here for hints';
hint.addEventListener('click', function (event) {
  hint.innerHTML = `NAME : ${q.name} and SPECIES : ${q.species}`;
});
ans1.innerText="male";
ans2.innerText="female";
ans3.innerText="genderless";
ans4.innerText="unknown";

qq-=1;
q_left.innerText=qq;

// console.log(q.gender); 

ans1.addEventListener('click', function (event) {
  if (q.gender === 'Male') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1+=1;
  } else if (q.gender === 'Female') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'Genderless') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor1-=99;
  }

  next();

});

ans2.addEventListener('click', function (event) {
  if (q.gender === 'Male') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'Female') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1+=1;
  } else if (q.gender === 'Genderless') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor1-=99;
  }
  next();
});

ans3.addEventListener('click', function (event) {
  if (q.gender === 'Male') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'Female') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'Genderless') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1+=1;
  } else if (q.gender === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor1-=99;
  }
  next();
});

ans4.addEventListener('click', function (event) {
  if (q.gender === 'Male') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'Female') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'Genderless') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.gender === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor1+=1;
  }
  next();
});

function next(){

  if(cor1===1){
    cor1-=99;
    corans+=1;
    correct_sound();
    w1++;
  }
if(w1===0){
  wrong_sound();
  w1++;
}

setTimeout(() => {
  document.getElementById('ans-btn2').style.backgroundColor = 'white';
  document.getElementById('ans-btn1').style.backgroundColor = 'white';
  document.getElementById('ans-btn3').style.backgroundColor = 'white';
  document.getElementById('ans-btn4').style.backgroundColor = 'white';


  // resolve();
  callback(question_2,ques4);
}, 5000);
}


// });
}

function ques2(q,callback){

  // return new Promise((resolve,reject)=>{

//   document.getElementById("app").remove();
//   document.getElementById("root").remove();


//   var timer_div1 = document.createElement("div");
//   var timer_div2 = document.createElement("div");
//   timer_div1.setAttribute('id','app1');
//   timer_div2.setAttribute('id','root1');
// timer.appendChild(timer_div1);
// timer.appendChild(timer_div2);

// reloadCss();

// function reloadCss()
// {
//     var links = document.getElementsByTagName("link");
//     for (var cl in links)
//     {
//         var link = links[cl];
//         if (link.rel === "stylesheet")
//             link.href += "";
//     }
// }


i++;
  question_num.innerText=i;
  question.textContent = 'What is the name of the below character?';  
  question_img.setAttribute('src', q.image);
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `GENDER : ${q.gender} and SPECIES : ${q.species}`;
  });

  qq-=1;
  q_left.innerText=qq;

  let mix_op=shuffle([0,1,2,3]);
  
  // console.log(q.name); 

ans1.innerText=q2_op[mix_op[0]];
ans2.innerText=q2_op[mix_op[1]];
ans3.innerText=q2_op[mix_op[2]];
ans4.innerText=q2_op[mix_op[3]];


ans1.addEventListener('click', function (event) {
  if (q.name === q2_op[mix_op[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2+=1;
  } else if (q.name === q2_op[mix_op[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor1-=99;
  } else if (q.name === q2_op[mix_op[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor2-=99;
  }
  next();
});


ans2.addEventListener('click', function (event) {
  if (q.name === q2_op[mix_op[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2+=1;
  } else if (q.name === q2_op[mix_op[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor2-=99;
  }
  next();
});

ans3.addEventListener('click', function (event) {
  if (q.name === q2_op[mix_op[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2+=1;
  } else if (q.name === q2_op[mix_op[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor2-=99;
  }
  next();
});


ans4.addEventListener('click', function (event) {
  if (q.name === q2_op[mix_op[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor2-=99;
  } else if (q.name === q2_op[mix_op[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor2+=1;
  }
  next();
});

function next(){
  if(cor2===1){
    cor2-=99;
    corans+=1;
    correct_sound();
    w2++;
  }

if(w2===0){
  wrong_sound();
  w2++;
}
setTimeout(() => {
  document.getElementById('ans-btn2').style.backgroundColor = 'white';
  document.getElementById('ans-btn1').style.backgroundColor = 'white';
  document.getElementById('ans-btn3').style.backgroundColor = 'white';
  document.getElementById('ans-btn4').style.backgroundColor = 'white';


  // resolve();
  callback(question_4,ques5);
}, 5000);

}

// });
}

function ques3(q){
question_num.innerText=i;
question.textContent = 'select the image of the below named character - ';  
question_txt.innerText=q.name;
hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `GENDER : ${q.gender} and SPECIES : ${q.species}`;
  });

  // console.log(q.name); 

  q_left.innerText=qq;


  ans1.innerText="";
  ans2.innerText="";
  ans3.innerText="";
  ans4.innerText="";

  let img1=document.createElement("img");
  let img2=document.createElement("img");
  let img3=document.createElement("img");
  let img4=document.createElement("img");


  let mix_arr=shuffle([0,1,2,3]);

img1.setAttribute("src",q3_op[mix_arr[0]]);
img2.setAttribute("src",q3_op[mix_arr[1]]);
img3.setAttribute("src",q3_op[mix_arr[2]]);
img4.setAttribute("src",q3_op[mix_arr[3]]);

ans1.appendChild(img1);
ans2.appendChild(img2);
ans3.appendChild(img3);
ans4.appendChild(img4);



ans1.addEventListener('click', function (event) {
  if (q.image === q3_op[mix_arr[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3+=1;
  } else if (q.image === q3_op[mix_arr[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor3-=99;
  }
  next();
});

ans2.addEventListener('click', function (event) {
  if (q.image === q3_op[mix_arr[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3+=1;
  } else if (q.image === q3_op[mix_arr[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor3-=99;
  }
  next();
});

ans3.addEventListener('click', function (event) {
  if (q.image === q3_op[mix_arr[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3+=1;
  } else if (q.image === q3_op[mix_arr[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor3-=99;
  }
  next();
});

ans4.addEventListener('click', function (event) {
  if (q.image === q3_op[mix_arr[0]]) {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[1]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[2]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor3-=99;
  } else if (q.image === q3_op[mix_arr[3]]) {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor3+=1;
  }
  next();
});


function next(){

  if(cor3===1){
    cor3-=99;
    corans+=1;
    correct_sound();
    w3++;
  }
  if(w3===0){
    wrong_sound();
w3++;
  }

 

setTimeout(() => {

 

  document.getElementById('ans-btn2').style.backgroundColor = 'white';
  document.getElementById('ans-btn1').style.backgroundColor = 'white';
  document.getElementById('ans-btn3').style.backgroundColor = 'white';
  document.getElementById('ans-btn4').style.backgroundColor = 'white';

question_txt.innerText="";
let new_img=document.createElement("img");
new_img.setAttribute("id","question-img");
new_img.setAttribute("alt","img");
new_img.setAttribute("width","75%");
let inside_index2=document.getElementById("index2-sub-space2-1");
inside_index2.appendChild(new_img);

img1.remove();
img2.remove();
img3.remove();
img4.remove();

sessionStorage.setItem('score', corans);
let num=0;
sessionStorage.setItem('timeup', num);
window.location.href = "indexlast.html";

}, 5000);

}

}


function ques4(q,callback){

// console.log(q.status); 

question_num.innerText=i;
question.textContent = 'What is the status of the below character?';
// let question_img=document.getElementById("question-img");
question_img.setAttribute('src', q.image);
hint.innerHTML = 'Click here for hints';
hint.addEventListener('click', function (event) {
  hint.innerHTML = `NAME : ${q.name} and SPECIES : ${q.species}`;
});
ans1.innerText="Alive";
ans2.innerText="Dead";
ans3.innerText="Unknown";
ans4.innerText="I don't know";


q_left.innerText=qq;


ans1.addEventListener('click', function (event) {
  if (q.status === 'Alive') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4+=1;
  } else if (q.status === 'Dead') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === "i don't know") {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor4-=99;
  }

  next();

});



ans2.addEventListener('click', function (event) {
  if (q.status === 'Alive') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === 'Dead') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4+=1;
  } else if (q.status === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === "i don't know") {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor4-=99;
  }

  next();

});


ans3.addEventListener('click', function (event) {
  if (q.status === 'Alive') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === 'Dead') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4+=1;
  } else if (q.status === "i don't know") {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor4-=99;
  }

  next();

});


ans4.addEventListener('click', function (event) {
  if (q.status === 'Alive') {
    // console.log(q);
    document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === 'Dead') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === 'unknown') {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    cor4-=99;
  } else if (q.status === "i don't know") {
    // console.log(q);
    document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    cor4+=1;
  }

  next();

});

function next(){

  if(cor4===1){
    cor4-=99;
    corans+=1;
    correct_sound();
    w4++;
  }

  if(w4===0){
    wrong_sound();
    w4++;
  }

  setTimeout(() => {
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
  
  
  

    callback(question_5,ques6);
  }, 5000);
  

}

}

function ques5(q,callback){

// console.log(q.type); 

  question_num.innerText=i;
  question.textContent = 'What is the type of the below character?';
  let question_img=document.getElementById("question-img");
  question_img.setAttribute('src', q.image);
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${q.name} and SPECIES : ${q.species}`;
  });

  let mix_op1=shuffle([0,1,2,3]);
  
  ans1.innerText=q5_op[mix_op1[0]];
  ans2.innerText=q5_op[mix_op1[1]];
  ans3.innerText=q5_op[mix_op1[2]];
  ans4.innerText=q5_op[mix_op1[3]];

  q_left.innerText=qq;


  ans1.addEventListener('click', function (event) {
    if (q.type === q5_op[mix_op1[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5+=1;
    } else if (q.type === q5_op[mix_op1[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor5-=99;
    }
    next();
  });


  ans2.addEventListener('click', function (event) {
    if (q.type === q5_op[mix_op1[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5+=1;
    } else if (q.type === q5_op[mix_op1[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor5-=99;
    }
    next();
  });

  ans3.addEventListener('click', function (event) {
    if (q.type === q5_op[mix_op1[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5+=1;
    } else if (q.type === q5_op[mix_op1[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor5-=99;
    }
    next();
  });


  ans4.addEventListener('click', function (event) {
    if (q.type === q5_op[mix_op1[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor5-=99;
    } else if (q.type === q5_op[mix_op1[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor5+=1;
    }
    next();
  });


  function next(){

    if(cor5===1){
      cor5-=99;
      corans+=1;
      correct_sound();
      w5++;
    }

    if(w5===0){
wrong_sound();
w5++;
    }


    setTimeout(() => {
      document.getElementById('ans-btn2').style.backgroundColor = 'white';
      document.getElementById('ans-btn1').style.backgroundColor = 'white';
      document.getElementById('ans-btn3').style.backgroundColor = 'white';
      document.getElementById('ans-btn4').style.backgroundColor = 'white';
    
     
    

      // ques5(question_5);
      // return;
      callback(question_6,ques7);
    }, 5000);
    
  
  }

}

function ques6(q,callback){

// console.log(q.origin.name); 

  question_num.innerText=i;
  question.textContent = 'What is the origin of the below character?';
  let question_img=document.getElementById("question-img");
  question_img.setAttribute('src', q.image);
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${q.name} and SPECIES : ${q.species}`;
  });

  let mix_op2=shuffle([0,1,2,3]);
  
  ans1.innerText=q6_op[mix_op2[0]];
  ans2.innerText=q6_op[mix_op2[1]];
  ans3.innerText=q6_op[mix_op2[2]];
  ans4.innerText=q6_op[mix_op2[3]];

  q_left.innerText=qq;

  ans1.addEventListener('click', function (event) {
    if (q.origin.name === q6_op[mix_op2[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6+=1;
    } else if (q.origin.name === q6_op[mix_op2[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor6-=99;
    }
    next();
  });

  ans2.addEventListener('click', function (event) {
    if (q.origin.name === q6_op[mix_op2[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6+=1;
    } else if (q.origin.name === q6_op[mix_op2[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor6-=99;
    }
    next();
  });


  ans3.addEventListener('click', function (event) {
    if (q.origin.name === q6_op[mix_op2[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6+=1;
    } else if (q.origin.name === q6_op[mix_op2[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor6-=99;
    }
    next();
  });


  ans4.addEventListener('click', function (event) {
    if (q.origin.name === q6_op[mix_op2[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor6-=99;
    } else if (q.origin.name === q6_op[mix_op2[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor6+=1;
    }
    next();
  });

  function next(){

    if(cor6===1){
      cor6-=99;
      corans+=1;
      correct_sound();
      w6++;
    }

if(w6===0){
  wrong_sound();
  w6++;
}

    setTimeout(() => {
      document.getElementById('ans-btn2').style.backgroundColor = 'white';
      document.getElementById('ans-btn1').style.backgroundColor = 'white';
      document.getElementById('ans-btn3').style.backgroundColor = 'white';
      document.getElementById('ans-btn4').style.backgroundColor = 'white';
    
     
    

      // ques5(question_5);
      // return;
      callback(question_7,ques8);
    }, 5000);
    
  
  }

}

function ques7(q,callback){

  // console.log(q7_op[0]); 

  question_num.innerText=i;
  question.textContent = 'In which episode was the below character first seen in ?';
  let question_img=document.getElementById("question-img");
  question_img.setAttribute('src', q.image);
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${q.name} and SPECIES : ${q.species}`;
  });

  let mix_op3=shuffle([0,1,2,3]);
  
  ans1.innerText=q7_op[mix_op3[0]];
  ans2.innerText=q7_op[mix_op3[1]];
  ans3.innerText=q7_op[mix_op3[2]];
  ans4.innerText=q7_op[mix_op3[3]];

  q_left.innerText=qq;


  ans1.addEventListener('click', function (event) {
    if (q7_op[0] === q7_op[mix_op3[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7+=1;
    } else if (q7_op[0] === q7_op[mix_op3[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor7-=99;
    }
    next();
  });


  ans2.addEventListener('click', function (event) {
    if (q7_op[0] === q7_op[mix_op3[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7+=1;
    } else if (q7_op[0] === q7_op[mix_op3[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor7-=99;
    }
    next();
  });


  ans3.addEventListener('click', function (event) {
    if (q7_op[0] === q7_op[mix_op3[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7+=1;
    } else if (q7_op[0] === q7_op[mix_op3[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor7-=99;
    }
    next();
  });


  ans4.addEventListener('click', function (event) {
    if (q7_op[0] === q7_op[mix_op3[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor7-=99;
    } else if (q7_op[0] === q7_op[mix_op3[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor7+=1;
    }
    next();
  });


  function next(){

    if(cor7===1){
      cor7-=99;
      corans+=1;
      correct_sound();
      w7++;
    }

    if(w7===0){
      wrong_sound();
      w7++;
    }

    setTimeout(() => {
      document.getElementById('ans-btn2').style.backgroundColor = 'white';
      document.getElementById('ans-btn1').style.backgroundColor = 'white';
      document.getElementById('ans-btn3').style.backgroundColor = 'white';
      document.getElementById('ans-btn4').style.backgroundColor = 'white';
    
     
    

      // ques5(question_5);
      // return;
       callback(question_8,ques9);
    }, 5000);
    
  
  }


}

function ques8(q,callback){

  // console.log(question_8.location.name); 

  question_num.innerText=i;
  question.textContent = 'In which location was the below character last seen in ?';
  let question_img=document.getElementById("question-img");
  question_img.setAttribute('src', q.image);
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${q.name} and SPECIES : ${q.species}`;
  });

  let mix_op4=shuffle([0,1,2,3]);
  
  ans1.innerText=q8_op[mix_op4[0]];
  ans2.innerText=q8_op[mix_op4[1]];
  ans3.innerText=q8_op[mix_op4[2]];
  ans4.innerText=q8_op[mix_op4[3]];

  q_left.innerText=qq;

  ans1.addEventListener('click', function (event) {
    if (q8_op[0] === q8_op[mix_op4[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8+=1;
    } else if (q8_op[0] === q8_op[mix_op4[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor8-=99;
    }
    next();
  });


  ans2.addEventListener('click', function (event) {
    if (q8_op[0] === q8_op[mix_op4[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8+=1;
    } else if (q8_op[0] === q8_op[mix_op4[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor8-=99;
    }
    next();
  });

  ans3.addEventListener('click', function (event) {
    if (q8_op[0] === q8_op[mix_op4[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8+=1;
    } else if (q8_op[0] === q8_op[mix_op4[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor8-=99;
    }
    next();
  });

  ans4.addEventListener('click', function (event) {
    if (q8_op[0] === q8_op[mix_op4[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor8-=99;
    } else if (q8_op[0] === q8_op[mix_op4[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor8+=1;
    }
    next();
  });

  function next(){

    if(cor8===1){
      cor8-=99;
      corans+=1;
      correct_sound();
      w8++;
    }
  if(w8===0){
    wrong_sound();
    w8++;
  }

    setTimeout(() => {
      document.getElementById('ans-btn2').style.backgroundColor = 'white';
      document.getElementById('ans-btn1').style.backgroundColor = 'white';
      document.getElementById('ans-btn3').style.backgroundColor = 'white';
      document.getElementById('ans-btn4').style.backgroundColor = 'white';
    
     

      // ques5(question_5);
      // return;
      callback(question_9,ques10);
    }, 5000);
    
  
  }

}


function ques9(q,callback){

  // console.log(question_9.name); 

  question_num.innerText=i;
  question.textContent = 'What is the title of the following episode ?';
  let question_img=document.getElementById("question-img");
  question_img.remove();
  question_txt.innerText=q.episode;
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `AIR date : ${q.air_date}`;
  });


  let mix_op5=shuffle([0,1,2,3]);
  
  ans1.innerText=q9_op[mix_op5[0]];
  ans2.innerText=q9_op[mix_op5[1]];
  ans3.innerText=q9_op[mix_op5[2]];
  ans4.innerText=q9_op[mix_op5[3]];

  q_left.innerText=qq;

  ans1.addEventListener('click', function (event) {
    if (question_9.name === q9_op[mix_op5[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9+=1;
    } else if (question_9.name === q9_op[mix_op5[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor9-=99;
    }
    next();
  });

  ans2.addEventListener('click', function (event) {
    if (question_9.name === q9_op[mix_op5[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9+=1;
    } else if (question_9.name === q9_op[mix_op5[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor9-=99;
    }
    next();
  });


  ans3.addEventListener('click', function (event) {
    if (question_9.name === q9_op[mix_op5[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9+=1;
    } else if (question_9.name === q9_op[mix_op5[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor9-=99;
    }
    next();
  });


  ans4.addEventListener('click', function (event) {
    if (question_9.name === q9_op[mix_op5[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9-=99;
    } else if (question_9.name === q9_op[mix_op5[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor9+=1;
    } else if (question_9.name === q9_op[mix_op5[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor9-=99;
    }
    next();
  });

  function next(){

    if(cor9===1){
      cor9-=99;
      corans+=1;
      correct_sound();
      w9++;
    }

if(w9===0){
  wrong_sound();
  w9++;
}

    setTimeout(() => {
      document.getElementById('ans-btn2').style.backgroundColor = 'white';
      document.getElementById('ans-btn1').style.backgroundColor = 'white';
      document.getElementById('ans-btn3').style.backgroundColor = 'white';
      document.getElementById('ans-btn4').style.backgroundColor = 'white';
    
     
    

      // ques5(question_5);
      // return;
      callback(question_10,ques3);
    }, 5000);
    
  
  }

}

function ques10(q,callback){

  // console.log(question_10.type); 
  // console.clear()
  question_num.innerText=i;
  question.textContent = 'What is the type of the below location ?';
  question_txt.innerText=q.name;
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `dimension : ${q.dimension}`;
  });

  let mix_op6=shuffle([0,1,2,3]);
  
  ans1.innerText=q10_op[mix_op6[0]];
  ans2.innerText=q10_op[mix_op6[1]];
  ans3.innerText=q10_op[mix_op6[2]];
  ans4.innerText=q10_op[mix_op6[3]];

  q_left.innerText=qq;

  ans1.addEventListener('click', function (event) {
    if (question_10.type === q10_op[mix_op6[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10+=1;
    } else if (question_10.type === q10_op[mix_op6[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor10-=99;
    }
    next();
  });


  ans2.addEventListener('click', function (event) {
    if (question_10.type === q10_op[mix_op6[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10+=1;
    } else if (question_10.type === q10_op[mix_op6[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor10-=99;
    }
    next();
  });

  ans3.addEventListener('click', function (event) {
    if (question_10.type === q10_op[mix_op6[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10+=1;
    } else if (question_10.type === q10_op[mix_op6[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor10-=99;
    }
    next();
  });

  ans4.addEventListener('click', function (event) {
    if (question_10.type === q10_op[mix_op6[0]]) {
      // console.log(q);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[1]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[2]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      cor10-=99;
    } else if (question_10.type === q10_op[mix_op6[3]]) {
      // console.log(q);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      cor10+=1;
    }
    next();
  });

  function next(){


    if(cor10===1){
      cor10-=99;
      corans+=1;
      correct_sound();
      w10++;
    }

if(w10===0){
  wrong_sound();
  w10++;
}

    setTimeout(() => {
      document.getElementById('ans-btn2').style.backgroundColor = 'white';
      document.getElementById('ans-btn1').style.backgroundColor = 'white';
      document.getElementById('ans-btn3').style.backgroundColor = 'white';
      document.getElementById('ans-btn4').style.backgroundColor = 'white';
    
     
    

      // ques5(question_5);
      // return;
      callback(question_3);
    }, 5000);
    
  
  }

}

function correct_sound(){
 
this.sound = new Audio();
this.sound.src = '..assets/audio/theme-song.mp3';
this.sound.load();
this.sound.autoplay = true;
this.sound.play()
  .then(() => {
    // Audio is playing.
  })
  .catch(error => {
    console.log(error);
  });

}
function wrong_sound(){
  const source =
  'ws.mp3';
const audio = new Audio();
// no event listener needed here
audio.src = source;
audio.autoplay = true;
audio.play();
}