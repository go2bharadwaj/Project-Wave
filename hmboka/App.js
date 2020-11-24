var total = 0;
var problemNo = 0;
var progID = "";
var testingVar;
game();

function game() {
  document.addEventListener("keydown", function(event) {
    if (problemNo !== gameMode) {
      if (event.keyCode == 37) {
        LeftSelected();
        LoadTotal(total);
        problemNo = problemNo + 1;
        game();
        console.log("left swipe detected");
        console.log(problemNo);
      } else if (event.keyCode == 39) {
        RightSelected();
        LoadTotal(total);
        problemNo = problemNo + 1;
        game();
        console.log("right swipe detected");
        console.log(problemNo);
      }
    } else {
      LoadEnd();
    }
  });
  let num1 = generateRandom(1, 5, -1); //creates number 0 to 5 for first num in equation
  let num2 = generateRandom(1, 5, -1); //creates number 0 to 5 for second num in equation
  let correct_num = LoadCorrect_num(num1, num2); //correct answer
  let incorrect_num = generateRandom(0, 10, correct_num); //glitch not loading test tomorrow prevents correct answer twice, exclude the correct answer
  var combo = 0;
  var boolMakeYellow = true;
  selectProgID();
  makeYellow();

  LoadHeader();
  LoadOptions(correct_num, incorrect_num);
  LoadTotal(total);
  //LoadAnswerCol();

  //Helper Functions_______________________________________________________________________________________________________________________________________________________________________________
  //______________________________________________________________________________________________________________________________________________________________________________________________
  function LeftSelected() {
    boolMakeYellow = false;
    if (combo === 1) {
      testingVar = document.getElementById(progID);
      testingVar.style.background = "green";
      var elem1 = document.getElementById("first");
      elem1.style.color = "green";
      var elem2 = document.getElementById("second");
      elem2.style.color = "white";
      total = total + 1;
    } else if (combo === 2) {
      testingVar = document.getElementById(progID);
      testingVar.style.background = "red";
      var elem1 = document.getElementById("first");
      elem1.style.color = "red";
      var elem2 = document.getElementById("second");
      elem2.style.color = "white";
    }
  }

  function RightSelected() {
    if (combo === 1) {
      testingVar = document.getElementById(progID);
      testingVar.style.background = "red";
      var elem1 = document.getElementById("first");
      elem1.style.color = "white";
      var elem2 = document.getElementById("second");
      elem2.style.color = "red";
    } else if (combo === 2) {
      testingVar = document.getElementById(progID);
      testingVar.style.background = "green";
      var elem1 = document.getElementById("first");
      elem1.style.color = "white";
      var elem2 = document.getElementById("second");
      elem2.style.color = "green";
      total = total + 1;
    }
  }
  function selectProgID() {
    if (problemNo == 1) {
      progID = "pgcirctrying";
      // testingVar = document.getElementById(progID);
      // if(makeYellow == true){
      //   testingVar.style.background = "yellow";
      // }
    console.log("IN SELECTPROGID");
    } else if (problemNo == 2) {
      progID = "pgc1";
    } else if (problemNo == 3) {
      progID = "pgc1";
    } else if (problemNo == 4) {
      progID = "pgc1";
    } else if (problemNo == 5) {
      progID = "pgc1";
    } else if (problemNo == 5) {
      progID = "pgc1";
    } else if (problemNo == 6) {
      progID = "pgc1";
    } else if (problemNo == 7) {
      progID = "pgc1";
    } else if (problemNo == 8) {
      progID = "pgc1";
    } else if (problemNo == 9) {
      progID = "pgc1";
    } else if (problemNo == 10) {
      progID = "pgc1";
    } else if (problemNo == 11) {
      progID = "pgc1";
    } else if (problemNo == 12) {
      progID = "pgc1";
    } else if (problemNo == 13) {
      progID = "pgc1";
    } else if (problemNo == 14) {
      progID = "pgc1";
    } else {
      progID = "pgc1";
    }
  }

  function makeYellow() {
    console.log("IN MAKEYELLOW ", boolMakeYellow);

    testingVar = document.getElementById(progID);
    if (boolMakeYellow == true) {
      testingVar.style.background = "yellow";
    }
  }

  function MakeWhite() {
    var elem1 = document.getElementById("first");
    elem1.style.color = "white";
    var elem2 = document.getElementById("second");
    elem2.style.color = "white";
  }

  function LoadHeader() {
    // add animation
    document.getElementById("header1").innerHTML = "<- Swipe ->";
    var elem1 = document.getElementById("header1");
    elem1.style.color = "black";
  }

  function generateRandom(min, max, exclude) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === exclude ? generateRandom(min, max, exclude) : num;
  }

  function LoadTotal(total) {
    document.getElementById("third").innerHTML = total;
  }

  function LoadAdditionQuestion(num1, num2) {
    let question = num1 + " + " + num2 + " = "; //string for question
    document.getElementById("header2").innerHTML = question;
  }

  function LoadSubtractionQuestion(num1, num2) {
    let question = num1 + " - " + num2 + " = "; //string for question
    document.getElementById("header2").innerHTML = question;
  }

  function LoadOptions(correct_num, incorrect_num) {
    let decider = generateRandom(0, 2, -1);
    if (decider === 0) {
      document.getElementById("first").innerHTML = correct_num;
      document.getElementById("second").innerHTML = incorrect_num;
      combo = 1;
    } else {
      document.getElementById("second").innerHTML = correct_num;
      document.getElementById("first").innerHTML = incorrect_num;
      combo = 2;
    }
  }

  function LoadAnswerCol() {}

  function LoadCorrect_num(num1, num2) {
    let decider = generateRandom(0, 2, -1);
    let number;
    if (decider === 0) {
      number = num1 + num2;
      LoadAdditionQuestion(num1, num2);
    } else {
      number = num1 - num2;
      LoadSubtractionQuestion(num1, num2);
    }
    return number;
  }

  function LoadEnd() {
    document.getElementById("header2").innerHTML = "Total!";
    document.getElementById("first").innerHTML = "->";
    document.getElementById("second").innerHTML = "<-";
    var elem1 = document.getElementById("first");
    elem1.style.color = "gold";
    var elem2 = document.getElementById("second");
    elem2.style.color = "gold";
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
        elem.style.width = width + "%";
      }
    }
  }
  /*
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
  */
}
