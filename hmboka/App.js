//console.log("gamemode = ", gameMode);
var total = 0;
var problemNo = 1;
var progID = "";
console.log("problemNo = ", problemNo);
game();


function game(){  
              document.addEventListener("keydown", function(event) {
                
              if (problemNo !== gameMode) {

                if (event.key == 'ArrowLeft') {
                  console.log("left swipe detected");
                  
                  LeftSelected();
                  
                  problemNo = problemNo + 1;
                                   progID = getProgID();
                  console.log("progID = ", progID);
                  var tryingProg = document.getElementById(progID);
                  tryingProg.style.background = 'yellow';
                  
                  let num1 = generateRandom(1, 5, -1);//creates number 0 to 5 for first num in equation
                  let num2 = generateRandom(1, 5, -1);//creates number 0 to 5 for second num in equation
                  let correct_num = LoadCorrect_num(num1,num2); //correct answer
                  let incorrect_num = generateRandom(0, 10, correct_num); //glitch not loading test tomorrow prevents correct answer twice, exclude the correct answer
                  

                  LoadHeader();
                  LoadOptions(correct_num,incorrect_num);
                  console.log("problemNo = ", problemNo);
                  //game();
                  
                 
                } else if (event.key === 'ArrowRight') {
                  console.log("right swipe detected");
                  RightSelected();
                  //LoadTotal(total);
                  
                  problemNo = problemNo + 1;
                                   progID = getProgID();
                  console.log("progID = ", progID);
                  var tryingProg = document.getElementById(progID);
                  tryingProg.style.background = 'yellow';
                
                  let num1 = generateRandom(1, 5, -1);//creates number 0 to 5 for first num in equation
                  let num2 = generateRandom(1, 5, -1);//creates number 0 to 5 for second num in equation
                  let correct_num = LoadCorrect_num(num1,num2); //correct answer
                  let incorrect_num = generateRandom(0, 10, correct_num); //glitch not loading test tomorrow prevents correct answer twice, exclude the correct answer
                  
                  LoadHeader();
                  LoadOptions(correct_num,incorrect_num);
                  console.log("problemNo = ", problemNo);
                  //game();
                  //console.log("right swipe detected");
                  //console.log(problemNo);
                }
                
              } else {
                LoadTotal(total);
                LoadEnd();
              }
            });
            //console.log("in here for some reason");
            let num1 = generateRandom(1, 5, -1);//creates number 0 to 5 for first num in equation
            let num2 = generateRandom(1, 5, -1);//creates number 0 to 5 for second num in equation
            let correct_num = LoadCorrect_num(num1,num2); //correct answer
            let incorrect_num = generateRandom(0, 10, correct_num); //glitch not loading test tomorrow prevents correct answer twice, exclude the correct answer
            var combo = 0;
            LoadHeader();
            LoadOptions(correct_num,incorrect_num);
         
            progID = getProgID();
            console.log("profID = ", progID);
            var tryingProg = document.getElementById(progID);
            tryingProg.style.background = 'yellow';
            //LoadHeader();
            //LoadOptions(correct_num,incorrect_num);

            

            LoadTotal(total);
            //LoadAnswerCol();
           

function getProgID(){
    var circNum = "";
    
    if(problemNo == 1){
      circNum = "pgc1";
    }
    else if(problemNo == 2){
      circNum = "pgc2";
      
    }
    else if(problemNo == 3){
      circNum = "pgc3";
      
    }
    else if(problemNo == 4){
      circNum = "pgc4";
    }
    else if(problemNo == 5){
      circNum = "pgc5";
      
    }
    else if(problemNo == 6){
      circNum = "pgc6";
      
    }
    else if(problemNo == 7){
      circNum = "pgc7";
    }
    else if(problemNo == 8){
      circNum = "pgc8";
      
    }
    else if(problemNo == 9){
      circNum = "pgc9";
      
    }
    else if(problemNo == 10){
      circNum = "pgc10";
    }
    else if(problemNo == 11){
      circNum = "pgc11";
      
    }
    else if(problemNo == 12){
      circNum = "pgc12";
      
    }
    else if(problemNo == 13){
      circNum = "pgc13";
      
    }
    else if(problemNo == 14){
      circNum = "pgc14";
    }
    else {
      circNum = "pgc15";
      
    }
    return circNum;

  }
  
  
//Helper Functions_______________________________________________________________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________________________________________________________________________
            function LeftSelected(){
              console.log("Left click: made it here and progId is", progID);
              
              if(combo === 1){
                tryingProg = document.getElementById(progID);
                tryingProg.style.background = 'green';
  
                total = total + 1;
                
              }
              else if(combo === 2){
                tryingProg = document.getElementById(progID);
                tryingProg.style.background = 'red';

              }
              LoadTotal(total);
              console.log("total = ", total);
            }

            function RightSelected(){
              console.log("Right click: made it here and progId is", progID);
              //problemNo = problemNo + 1;
              if(combo === 1){
                tryingProg = document.getElementById(progID);
                tryingProg.style.background = 'red';
                // var elem1 = document.getElementById("first");
                // elem1.style.color = 'white';
                // var elem2 = document.getElementById("second");
                // elem2.style.color = 'red';
              }
              else if(combo === 2){
                tryingProg = document.getElementById(progID);
                tryingProg.style.background = 'green';
                // var elem1 = document.getElementById("first");
                // elem1.style.color = 'white';
                // var elem2 = document.getElementById("second");
                // elem2.style.color = 'green';
                total = total + 1;
                
              }
              LoadTotal(total);
              console.log("total = ", total);
            }
            
            function MakeWhite(){
               var elem1 = document.getElementById("first");
               elem1.style.color = 'white';
               var elem2 = document.getElementById("second");
               elem2.style.color = 'white';
            }
            
            function LoadHeader(){
              // add animation
              document.getElementById("header1").innerHTML = "<- Swipe ->";
              var elem1 = document.getElementById("header1");
              elem1.style.color = 'black';
            }


            function generateRandom(min, max, exclude){
                var num = Math.floor(Math.random() * (max - min + 1)) + min;
                return (num === exclude) ? generateRandom(min, max, exclude) : num;
            }

            function LoadTotal(total){ 
                  document.getElementById("third").innerHTML = total;
            }

            function LoadAdditionQuestion(num1,num2){
                  let question = num1 + " + " + num2 + " = "; //string for question
                  document.getElementById("header2").innerHTML = question;
            }
  
            function LoadSubtractionQuestion(num1,num2){
                  let question = num1 + " - " + num2 + " = "; //string for question
                  document.getElementById("header2").innerHTML = question;
            }

            function LoadOptions(correct_num,incorrect_num){
                let decider = generateRandom(0, 2, -1);   
                  if(decider === 0){
                    document.getElementById("first").innerHTML = correct_num;
                    document.getElementById("second").innerHTML = incorrect_num;
                    combo = 1;
                  }
                  else{
                    document.getElementById("second").innerHTML = correct_num;
                    document.getElementById("first").innerHTML = incorrect_num;
                    combo = 2;
                  }
            }
            
            function LoadAnswerCol(){
              
            }
            
            function LoadCorrect_num(num1, num2){
              let decider = generateRandom(0, 2, -1);
              let number;
                  if(decider === 0){
                     number = num1 + num2;
                     LoadAdditionQuestion(num1,num2);
                  }
                  else{
                     number = num1 - num2;
                     LoadSubtractionQuestion(num1,num2);
                  }
              return number;
            }
            
            function LoadEnd(){
              document.getElementById("header2").innerHTML = "Total!";
              document.getElementById("first").innerHTML = "->";
              document.getElementById("second").innerHTML = "<-";
              var elem1 = document.getElementById("first");
              elem1.style.color = 'gold';
              var elem2 = document.getElementById("second");
              elem2.style.color = 'gold';
            }
  
  
            function move() {
                var elem = document.getElementById("myBar");   
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                  if (width >= 100) {
                    clearInterval(id);
                  } else {
                    width++; 
                    elem.style.width = width + '%'; 
                  }
                }
              }

//SOLI___________________________________________________________________________________________________________________________________________________________
            window.onSoliEvent = function(event) { // this function will run any time a gesture is detected'
              if(problemNo !== gameMode){
                
                    if(event.type == 'tap') {
                       console.log("tap detected");
                    }
                
                    if(event.type == 'swipe') {
                        // 1-> right, 7-> down, 5-> left, 3-> up
                        if(event.data.direction == '1') {
                              console.log("right swipe detected");
                              RightSelected(); 
                              LoadTotal(total);
                              problemNo = problemNo + 1;
                              game();
                        } 
                        else if (event.data.direction == '5') {
                              console.log("left swipe detected");
                              LeftSelected();
                              LoadTotal(total);
                              problemNo = problemNo + 1;
                              game();
                        }  
                    }

                    if(event.type == 'presence') {
                      // do something
                    }
                    if(event.type == 'reach') {
                      //console.log("tap detected");
                      //t = 0;// do something
                    } 
              }
              
              else{
                 LoadEnd();
              }
          };
            //_________________________________________________________________________________________________________________________________________________________________
            //_________________________________________________________________________________________________________________________________________________________________________________________________
            //_________________________________________________________________________________________________________________________________________________________________________________________________
  } 
      
   




