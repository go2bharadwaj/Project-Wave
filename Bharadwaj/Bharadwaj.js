var total = 0;
var problemNo = 0;
var cars = [];
game();
      

function game(){  
            
            let num1 = generateRandom(1, 5, -1);//creates number 0 to 5 for first num in equation
            let num2 = generateRandom(1, 5, -1);//creates number 0 to 5 for second num in equation
            let correct_num = num1 + num2; //correct answer
            let incorrect_num = generateRandom(0, 10, correct_num); //glitch not loading test tomorrow prevents correct answer twice, exclude the correct answer
            var combo = 0;
            
            LoadHeader();
            LoadQuestion(num1,num2);
            LoadOptions(correct_num,incorrect_num);
            LoadTotal(total);
            LoadAnswerCol();


//Helper Functions_______________________________________________________________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________________________________________________________________________
            function LeftSelected(){
              if(combo === 1){
                var elem1 = document.getElementById("first");
                elem1.style.color = 'green';
                var elem2 = document.getElementById("second");
                elem2.style.color = 'white';
                total = total + 1;
              }
              else if(combo === 2){
                var elem1 = document.getElementById("first");
                elem1.style.color = 'red';
                var elem2 = document.getElementById("second");
                elem2.style.color = 'white';
              }
            }

            function RightSelected(){
              if(combo === 1){
                var elem1 = document.getElementById("first");
                elem1.style.color = 'white';
                var elem2 = document.getElementById("second");
                elem2.style.color = 'red';
              }
              else if(combo === 2){
                var elem1 = document.getElementById("first");
                elem1.style.color = 'white';
                var elem2 = document.getElementById("second");
                elem2.style.color = 'green';
                total = total + 1;
              }
            }
            
            function MakeWhite(){
               var elem1 = document.getElementById("first");
               elem1.style.color = 'white';
               var elem2 = document.getElementById("second");
               elem2.style.color = 'white';
            }
            
            function LoadHeader(){
              document.getElementById("header1").innerHTML = "Project Wave";
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

            function LoadQuestion(num1,num2){
                  let question = num1 + " + " + num2 + " = "; //string for question
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
                 end();
              }
          };
            //_________________________________________________________________________________________________________________________________________________________________
            //_________________________________________________________________________________________________________________________________________________________________________________________________
            //_________________________________________________________________________________________________________________________________________________________________________________________________
  } 
      
function end(){
   document.getElementById("header2").innerHTML = "Total!";
   document.getElementById("first").innerHTML = "->";
   document.getElementById("second").innerHTML = "<-";
   var elem1 = document.getElementById("first");
   elem1.style.color = 'gold';
   var elem2 = document.getElementById("second");
   elem2.style.color = 'gold';
}      




