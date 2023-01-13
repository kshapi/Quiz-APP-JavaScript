const radio = document.querySelectorAll('input');
const label = document.querySelectorAll('label');
const screen = document.getElementById('screen');
const Previousbtn = document.getElementById('pre');
const button = document.querySelector('.btn');
let timer = document.getElementById('timer');


  let time = 15;
  let i = 0;
  let right = 0;
  let wrong = 0;
  let skips = 0;
  
  //Laoding Questions First Time
  function laod(){
    
    if(i === Questions.length){
      return end();
    }
    
screen.innerText = `${i+1}  |   ${Questions[i].Q}`;
label[0].innerText =Questions[i].A;
label[1].innerText =Questions[i].B;
label[2].innerText =Questions[i].C;
label[3].innerText =Questions[i].D;
  
  //Set Values Accoding Options
  radio[0].setAttribute('value',Questions[i].A);
  radio[1].setAttribute('value',Questions[i].B);
  radio[2].setAttribute('value',Questions[i].C);
  radio[3].setAttribute('value',Questions[i].D);
  
    reset();
  };
  laod();
  

  //Next
  function next(){
    
    let ans = check();
    //if radio button is not checked then youcan not go for next
    radio.forEach(item =>{
      if(item.checked){
        //Checking Answers
       if(ans == Questions[i].Ans){
          right++;
        }else{
          wrong++;
        };
        i++;
        time = 15;
        laod();
        count();
     };
   });
   if(i == Questions.length){
     button.innerText = 'Finish';
   }
 };
  
  
  function check(){
    
    let Ans = '';
    radio.forEach((item)=>{
      if(item.checked){
          Ans = item.value;
      }
    });
    return Ans;
    
  };
  check();
  
  const counter = document.querySelector('.counter').children[0];

  function count (){
    
   counter.innerText = `${i} / ${Questions.length}`;
  };
  count();
  
  //Reset Radio Buttons After Next
  function reset(){
    
   radio.forEach((item)=> {
     
      if(item.checked){
        item.checked = false;
      };
    });
  };
  
  //Timer : when time end Question will be skip
  const timeOut = setInterval(()=>{
    if(time < 1){
      i++;
      laod();
      time = 15;
      count();
      skip();
    }else {
      time--;
      time = (time < 10)? '0'+time: time;
      timer.innerText = time;
    };
      
  },1000);
  
  //skip
  function skip(){
    
    skips++;
    
  };
  
  
  const main = document.querySelector('.main');
  // End of Quiz when Questions Complate
  function end() {
  
    main.innerHTML = `
    <h1 class="last">Score<h1/>
      <div class="answer">
        <p class="right">Right : ${right}<p/>
        <p class="wrong">Wrong : ${wrong}<p/>
        <p class="skip">Skip : ${skips}<p/>
      </div>
      `;
  };