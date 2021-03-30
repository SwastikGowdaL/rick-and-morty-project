
    else if (b[i] == 2) {
      const ch = document.getElementById('question');
      ch.textContent = 'What is the name of the below character?';
      document
        .getElementById('question-img')
        .setAttribute('src', question[i].image);
      var opt = [];
      opt.push(question[i]);

      let optrand = fun(1, 600);
      axios
        .get(`https://rickandmortyapi.com/api/character/${optrand}`)
        .then(function (response) {
          opt.push(response.data);
          console.log(opt[1]);
        });

      optrand = fun(1, 600);
      axios
        .get(`https://rickandmortyapi.com/api/character/${optrand}`)
        .then(function (response1) {
          opt.push(response1.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      optrand = fun(1, 600);
      axios
        .get(`https://rickandmortyapi.com/api/character/${optrand}`)
        .then(function (response2) {
          console.log(response2.data);
          opt.push(response2.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      // to get random user for options
      // async function getUser() {
      //   try {
      //     let optrand = fun(1, 600);
      //     const response1 = await axios.get(
      //       `https://rickandmortyapi.com/api/character/${optrand}`
      //     );
      //     console.log(response1.data);
      //     opt.push(response1.data);
      //     optrand = fun(1, 600);
      //     const response2 = await axios.get(
      //       `https://rickandmortyapi.com/api/character/${optrand}`
      //     );
      //     opt.push(response2.data);
      //     console.log(response2.data);
      //     optrand = fun(1, 600);
      //     const response3 = await axios.get(
      //       `https://rickandmortyapi.com/api/character/${optrand}`
      //     );
      //     opt.push(response3.data);
      //     console.log(response3.data);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // }
      const arr = [1, 2, 3, 4];
      const opt2 = shuffle(arr);
      console.log(opt);
      const hint = document.getElementById('hints');
      document.getElementById('ans-btn1').innerText = opt[1].name;
      document.getElementById('ans-btn2').innerText = opt[opt2[1]].name;
      document.getElementById('ans-btn3').innerText = opt[opt2[2]].name;
      document.getElementById('ans-btn4').innerText = opt[opt2[3]].name;
      
      hint.innerHTML="Click here for hints";
      hint.addEventListener('click', function (event) {
        hint.innerHTML = `GENDER : ${question[i].gender} and SPECIES : ${question[i].species}`;
      });
      const ans1 = document.getElementById('ans-btn1');
      const ans2 = document.getElementById('ans-btn2');
      const ans3 = document.getElementById('ans-btn3');
      const ans4 = document.getElementById('ans-btn4');
      ans1.addEventListener('click', function (event) {
        if (question[i].name === opt[opt2[0]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
          ccount += 1;
        } else if (question[i].name === opt[opt2[1]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[2]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[3]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
        }
      });

      ans2.addEventListener('click', function (event) {
        if (question[i].name === opt[opt2[0]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[1]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
          ccount += 1;
        } else if (question[i].name === opt[opt2[2]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[3]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
        }
      });

      ans3.addEventListener('click', function (event) {
        if (question[i].name === opt[opt2[0]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[1]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[2]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
          ccount += 1;
        } else if (question[i].name === opt[opt2[3]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
        }
      });

      ans4.addEventListener('click', function (event) {
        if (question[i].name === opt[opt2[0]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[1]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[2]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].name === opt[opt2[3]].name) {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
          ccount += 1;
        }
      });
    }