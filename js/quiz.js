const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ccount = 0;
function fun(min, max) {
  const c = Math.floor(Math.random() * (max - min)) + min;
  return c;
}

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

// for (let i = 1; i <= 10; i++) {
//   if (a.length == 1) {
//     b.push(a[0]);
//     a.pop();
//     break;
//   }
//   const d = fun(1, a.length);
//   // console.log(d);
//   b.push(a[d]);
//   a.splice(d, 1);
// }



// options for question 2
const q2 = [];
async function fq2() {
  let a;
  try {
    let randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq11 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q2.push(fq11.data.name);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq12 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q2.push(fq12.data.name);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq13 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q2.push(fq13.data.name);
  } catch (error) {
    console.error(error);
  }
}

// options for question 3
const q3 = [];
async function fq3() {
  try {
    let a;
    let randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq31 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q3.push(fq31.data.image);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq32 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q3.push(fq32.data.image);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq33 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q3.push(fq33.data.image);
  } catch (error) {
    console.error(error);
  }
}

// options for question 5
const q5 = [];
async function fq5() {
  let a;
  try {
    let randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq51 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q5.push(fq51.data.type);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq52 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q5.push(fq52.data.type);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq53 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q5.push(fq53.data.type);
    while (q5[0] == '') {
      randaf = fun(1, 670);
      a = `character/${randaf}`;
      const fq510 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
      q5.shift();
      q5.unshift(fq510.data.type);
    }
    while (q5[1] == '') {
      randaf = fun(1, 670);
      a = `character/${randaf}`;
      const fq511 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
      q5.splice(1, 1, fq511.data.type);
    }
    while (q5[2] == '') {
      randaf = fun(1, 670);
      a = `character/${randaf}`;
      const fq512 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
      q5.pop();
      q5.push(fq512.data.type);
    }
  } catch (error) {
    console.error(error);
  }
}

const q6 = [];
async function fq6() {
  let a;
  try {
    let randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq61 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q6.push(fq61.data.origin.name);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq62 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q6.push(fq62.data.origin.name);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq63 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q6.push(fq63.data.origin.name);
  } catch (error) {
    console.error(error);
  }
}

const q8 = [];
async function fq8() {
  let a;
  try {
    let randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq81 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q8.push(fq81.data.location.name);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq82 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q8.push(fq82.data.location.name);
    randaf = fun(1, 670);
    a = `character/${randaf}`;
    const fq83 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q8.push(fq83.data.location.name);
    console.log("q8");
    console.log(q8);  
  } catch (error) {
    console.error(error);
  }
}

const q9 = [];
async function fq9() {
  let a;
  try {
    let randaf = fun(1, 41);
    a = `episode/${randaf}`;
    const fq91 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q9.push(fq91.data.name);
    randaf = fun(1, 41);
    a = `episode/${randaf}`;
    const fq92 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q9.push(fq92.data.name);
    randaf = fun(1, 41);
    a = `episode/${randaf}`;
    const fq93 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    q9.push(fq93.data.name);
  } catch (error) {
    console.error(error);
  }
}

const ql = [];
async function fql() {
  let a;
  try {
    let randaf = fun(1, 108);
    a = `location/${randaf}`;
    const fql1 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    ql.push(fql1.data.type);
    randaf = fun(1, 108);
    a = `location/${randaf}`;
    const fql2 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    ql.push(fql2.data.type);
    randaf = fun(1, 108);
    a = `location/${randaf}`;
    const fql3 = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    ql.push(fql3.data.type);
  } catch (error) {
    console.error(error);
  }
}

// console.log(b);
const question2 = [];
const question = [];
async function getUser(a, i) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    question.push(response.data);
    // console.log(question);
    question2.push(question[i]);
  } catch (error) {
    console.error(error);
  }
}
let ran = 0;
for (let i = 0; i < 10; i++) {
  switch (b[i]) {
    case 1:
      ran = fun(1, 671);
      getUser(`character/${ran}`, i);
      break;
    case 2:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      fq2();
      break;
    case 3:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      fq3();
      break;
    case 4:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 5:
      ran = fun(10, 100);
      getUser(`character/${ran}`, i);
      fq5();
      break;
    case 6:
      ran = fun(1, 50);
      getUser(`character/${ran}`, i);
      fq6();
      break;
    case 7:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 8:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      fq8();
      break;
    case 9:
      ran = fun(2, 41);
      getUser(`episode/${ran}`, i);
      fq9();
      break;
    case 10:
      ran = fun(1, 108);
      getUser(`location/${ran}`, i);
      fql();
      // console.log(question);
      break;
    default:
      console.log('not working');
  }
}

// setTimeout(() => {
//   console.log(ql);
// }, 8000);

setTimeout(() => {
  console.log(question);

  let i = 0;
 selectqus(i);
}, 10000);

function selectqus(i) {
  switch (b[i]) {
    case 1:
      askq1(i);
      // console.log('yep got it ');
      break;
    case 2:
      askq2(i);
      break;
    case 3:
      askq3(i);
      break;
    case 4:
      askq4(i);
      break;
    case 5:
      askq5(i);
      break;
    case 6:
      askq6(i);
      break;
    case 7:
      askq7(i);
      break;
    case 8:
      askq8(i);
      break;
    case 9:
      askq9(i);
      break;
    case 10:
      askq10(i);
      break;
    default:
      console.log("finally done");  
      break;
  }
}

function askq1(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the gender of the below character?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  document.getElementById('ans-btn1').innerText = 'male';
  document.getElementById('ans-btn2').innerText = 'female';
  document.getElementById('ans-btn3').innerText = 'genderless';
  document.getElementById('ans-btn4').innerText = 'unknown';
  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${question[i].name} and SPECIES : ${question[i].species}`;
  });
  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');
  
  console.log("1");
  console.log(question[i]);
   
  ans1.addEventListener('click', function (event) {
    if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      ccount += 1;
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';

    selectqus(i);
  }, 15000);
}

function askq2(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the name of the below character?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);
  q2.push(question[i].name);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  document.getElementById('ans-btn1').innerText = q2[boptions[0]];
  document.getElementById('ans-btn2').innerText = q2[boptions[1]];
  document.getElementById('ans-btn3').innerText = q2[boptions[2]];
  document.getElementById('ans-btn4').innerText = q2[boptions[3]];

  console.log("2");
  console.log(question[i]);
  console.log(q2); 

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `GENDER : ${question[i].gender} and SPECIES : ${question[i].species}`;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  ans1.addEventListener('click', function (event) {
    if (question[i].name === q2[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q2[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].name === q2[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q2[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].name === q2[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q2[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].name === q2[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q2[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q2[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    selectqus(i);
  }, 15000);
}

function askq3(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'Select the picture of the below named character -';
  const qusrm = document.getElementById('question-img');
  qusrm.style.visibility = 'hidden';
  const forq2 = document.getElementById('forq2');
  forq2.style.visibility="visible";
  forq2.innerText = `${question[i].name}`;
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);
  q3.push(question[i].image);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  document.getElementById('ans-btn1').innerText = q3[boptions[0]];
  document.getElementById('ans-btn2').innerText = q3[boptions[1]];
  document.getElementById('ans-btn3').innerText = q3[boptions[2]];
  document.getElementById('ans-btn4').innerText = q3[boptions[3]];

  console.log("3");
  console.log(question[i]);
  console.log(q3); 

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `GENDER : ${question[i].gender} and SPECIES : ${question[i].species}`;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  ans1.addEventListener('click', function (event) {
    if (question[i].image === q3[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].image === q3[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].image === q3[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].image === q3[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].image === q3[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].image === q3[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].image === q3[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].image === q3[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].image === q3[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    qusrm.style.visibility = 'visible';
    forq2.style.visibility="hidden";
    selectqus(i);
  }, 15000);
}

function askq4(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the status of the below character ?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  document.getElementById('ans-btn1').innerText = 'Alive';
  document.getElementById('ans-btn2').innerText = 'Dead';
  document.getElementById('ans-btn3').innerText = 'unknown';
  document.getElementById('ans-btn4').innerText = "I don't know";
  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${question[i].name} and SPECIES : ${question[i].species}`;
  });
  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  console.log("4");
  console.log(question[i]);

  ans1.addEventListener('click', function (event) {
    if (question[i].status === 'Alive') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].status === 'Dead') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === "I don't know") {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].status === 'Alive') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === 'Dead') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].status === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === "I don't know") {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].status === 'Alive') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === 'Dead') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].status === "I don't know") {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].status === 'Alive') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === 'Dead') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === 'unknown') {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].status === "I don't know") {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
      ccount += 1;
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';

    selectqus(i);
  }, 15000);
}

function askq5(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the type of the below character?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);
  q5.push(question[i].type);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  document.getElementById('ans-btn1').innerText = q5[boptions[0]];
  document.getElementById('ans-btn2').innerText = q5[boptions[1]];
  document.getElementById('ans-btn3').innerText = q5[boptions[2]];
  document.getElementById('ans-btn4').innerText = q5[boptions[3]];

  console.log("5");
  console.log(question[i]);
  console.log(q5); 

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `GENDER : ${question[i].gender} and SPECIES : ${question[i].species}`;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  ans1.addEventListener('click', function (event) {
    if (question[i].type === q5[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === q5[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].type === q5[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === q5[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].type === q5[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === q5[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].type === q5[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === q5[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === q5[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    selectqus(i);
  }, 15000);
}



function askq6(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the origin of the below character?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);
  q6.push(question[i].origin.name);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  console.log("6");
  console.log(question[i].origin.name);
  console.log(q6); 


  document.getElementById('ans-btn1').innerText = q6[boptions[0]];
  document.getElementById('ans-btn2').innerText = q6[boptions[1]];
  document.getElementById('ans-btn3').innerText = q6[boptions[2]];
  document.getElementById('ans-btn4').innerText = q6[boptions[3]];

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${question[i].name} and SPECIES : ${question[i].species}`;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');


  ans1.addEventListener('click', function (event) {
    if (question[i].origin.name === q6[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].origin.name === q6[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].origin.name === q6[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].origin.name === q6[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].origin.name === q6[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].origin.name === q6[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].origin.name === q6[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].origin.name === q6[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].origin.name === q6[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    selectqus(i);
  }, 15000);
}


function askq7(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'In which episode was the below character first seen in ?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  let spliting= question[i].episode[0].split("episode/");
  document.getElementById('ans-btn1').innerText = spliting[1];
  document.getElementById('ans-btn2').innerText = fun(1,41);
  document.getElementById('ans-btn3').innerText =  fun(1,41);
  document.getElementById('ans-btn4').innerText =  fun(1,41);
  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${question[i].name} and SPECIES : ${question[i].species}`;
  });
  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  console.log("7");
  console.log(question[i]);

  ans1.addEventListener('click', function (event) {
    // if (question[i].episode[0] === spliting[1]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    // } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    // }
  });

  ans2.addEventListener('click', function (event) {
    // if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //   ccount += 1;
    // } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    // }
  });

  ans3.addEventListener('click', function (event) {
    // if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //   ccount += 1;
    // } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    // }
  });

  ans4.addEventListener('click', function (event) {
    // if (question[i].gender === 'Male') {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'Female') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'Genderless') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    // } else if (question[i].gender === 'unknown') {
      // console.log(question[i]);
    //   document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //   document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    //   ccount += 1;
    // }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';

    selectqus(i);
  }, 15000);
}

function askq8(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'In which location was the below character last seen?';
  document
    .getElementById('question-img')
    .setAttribute('src', question[i].image);
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);

  console.log("8");
  console.log(question[i]);
  console.log(q8); 

  q8.push(question[i].location.name);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  document.getElementById('ans-btn1').innerText = q8[boptions[0]];
  document.getElementById('ans-btn2').innerText = q8[boptions[1]];
  document.getElementById('ans-btn3').innerText = q8[boptions[2]];
  document.getElementById('ans-btn4').innerText = q8[boptions[3]];

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `NAME : ${question[i].name} and SPECIES : ${question[i].species}`;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  console.log("8");
  console.log(question[i]);
  console.log(q8); 

  ans1.addEventListener('click', function (event) {
    if (question[i].location.name === q8[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].location.name === q8[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].location.name === q8[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].location.name === q8[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].location.name === q8[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].location.name === q8[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].location.name === q8[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].location.name === q8[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].location.name === q8[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    selectqus(i);
  }, 15000);
}



function askq9(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the title of the following episode ?';
  let forq9=document
    .getElementById('question-img');
  forq9.style.visibility="hidden";
  let forq2=document.getElementById("forq2");
  forq2.style.visibility="visible";
  forq2.innerText=question[i].episode;
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);
  q9.push(question[i].name);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  document.getElementById('ans-btn1').innerText = q9[boptions[0]];
  document.getElementById('ans-btn2').innerText = q9[boptions[1]];
  document.getElementById('ans-btn3').innerText = q9[boptions[2]];
  document.getElementById('ans-btn4').innerText = q9[boptions[3]];

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `AIR DATE : ${question[i].air_date} `;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  console.log("9");
  console.log(question[i]);
  console.log(q9); 

  ans1.addEventListener('click', function (event) {
    if (question[i].name === q9[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q9[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].name === q9[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q9[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].name === q9[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q9[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].name === q9[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].name === q9[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].name === q9[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    forq9.style.visibility="visible";
    forq2.style.visibility="hidden";
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    selectqus(i);
  }, 15000);
}


function askq10(i) {
  const ch = document.getElementById('question');
  ch.textContent = 'What is the type of the below location?';
  let forq10=document
    .getElementById('question-img');
  forq10.style.visibility="hidden";
  let forq2=document.getElementById("forq2");
  forq2.style.visibility="visible";
  forq2.innerText=question[i].name;
  const optnum = [0, 1, 2, 3];
  const boptions = shuffle(optnum);
  ql.push(question[i].type);
  // let foptions=[];
  // foptions.push(q2[boptions[0]]);
  // foptions.push(q2[boptions[1]]);
  // foptions.push(q2[boptions[2]]);
  // foptions.push(q2[boptions[3]]);

  document.getElementById('ans-btn1').innerText = ql[boptions[0]];
  document.getElementById('ans-btn2').innerText = ql[boptions[1]];
  document.getElementById('ans-btn3').innerText = ql[boptions[2]];
  document.getElementById('ans-btn4').innerText = ql[boptions[3]];

  console.log("10");
  console.log(question[i]);
  console.log(ql); 

  const hint = document.getElementById('hints');
  hint.innerHTML = 'Click here for hints';
  hint.addEventListener('click', function (event) {
    hint.innerHTML = `DIMENSION : ${question[i].dimension}`;
  });

  const ans1 = document.getElementById('ans-btn1');
  const ans2 = document.getElementById('ans-btn2');
  const ans3 = document.getElementById('ans-btn3');
  const ans4 = document.getElementById('ans-btn4');

  ans1.addEventListener('click', function (event) {
    if (question[i].type === ql[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === ql[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans2.addEventListener('click', function (event) {
    if (question[i].type === ql[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === ql[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans3.addEventListener('click', function (event) {
    if (question[i].type === ql[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === ql[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });

  ans4.addEventListener('click', function (event) {
    if (question[i].type === ql[boptions[0]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
      ccount += 1;
    } else if (question[i].type === ql[boptions[1]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[2]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
      document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    } else if (question[i].type === ql[boptions[3]]) {
      // console.log(question[i]);
      document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
      document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    }
  });
  setTimeout(() => {
    i += 1;
    forq10.style.visibility="visible";
    forq2.style.visibility="hidden";
    document.getElementById('ans-btn2').style.backgroundColor = 'white';
    document.getElementById('ans-btn1').style.backgroundColor = 'white';
    document.getElementById('ans-btn3').style.backgroundColor = 'white';
    document.getElementById('ans-btn4').style.backgroundColor = 'white';
    selectqus(i);
  }, 15000);
}