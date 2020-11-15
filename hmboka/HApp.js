var total = 0;
var problemNo = 0;
var probNum = 0;
game();
//var gameMode = 5;

function game() {
    problemNo -=1;
    //USER INPUT WITH KEYBOARD
    document.addEventListener("keydown", function(event) {
    if (problemNo !== gameMode) {
      if (event.keyCode == 37) {
        LeftSelected();
        LoadTotal(total);
        problemNo =+ 1;
        game();
        console.log("left swipe detected");
        console.log(problemNo);
      } else if (event.keyCode == 39) {
        RightSelected();
        LoadTotal(total);
        problemNo += 1;
        game();
        console.log("right swipe detected");
        console.log(problemNo);
      }
    } else {
      end();
    }
  });

  let num1 = generateRandom(1, 5, -1); //creates number 0 to 5 for first num in equation
  let num2 = generateRandom(1, 5, -1); //creates number 0 to 5 for second num in equation
  let correct_num = LoadCorrect_num(num1, num2); //calls LoadCorrect to generate a correct answer
  let incorrect_num = generateRandom(0, 10, correct_num); //glitch not loading test tomorrow prevents correct answer twice, exclude the correct answer
  var combo = 0;

  //LoadHeader();
  LoadOptions(correct_num, incorrect_num);
  LoadTotal(total);
  //LoadAnswerCol();

  //Helper Functions_______________________________________________________________________________________________________________________________________________________________________________
  //______________________________________________________________________________________________________________________________________________________________________________________________
  function LeftSelected() {
    //this function is called when a left swipe is detected
    //when combo is 1, the first box is correct
    //when combo is 2, then the second box is correct
    probNum += 1;
    if (combo === 1) {
      //so if left swipe selected and combo is 1, then user chose correct answer so make first box green and add to total score
      var elem1 = document.getElementById("first");
      elem1.style.color = "green";
      var elem2 = document.getElementById("second");
      elem2.style.color = "white";
      total = total + 1;
    } else if (combo === 2) {
      //if left swipe is detected yet combo is 2 (2 meaning the second box is correct) make box red and do not add to total score
      var elem1 = document.getElementById("first");
      elem1.style.color = "red";
      var elem2 = document.getElementById("second");
      elem2.style.color = "white";
    }
  }

  function RightSelected() {
    //this function is called when a right swipe is detected
    //when combo is 1, the first box is correct
    //when combo is 2, then the second box is correct
    probNum += 1;
    if (combo === 1) {
      //if right swipe is detected yet combo is 1 (1 meaning the first box is correct) make box red and do not add to total score
      var elem1 = document.getElementById("first");
      elem1.style.color = "white";
      var elem2 = document.getElementById("second");
      elem2.style.color = "red";
    } else if (combo === 2) {
      //but if right swipe selected and combo is also 2, then user chose correct answer so make second box green and add to total score
      var elem1 = document.getElementById("first");
      elem1.style.color = "white";
      var elem2 = document.getElementById("second");
      elem2.style.color = "green";
      total = total + 1;
    }
  }

  function MakeWhite() {
    var elem1 = document.getElementById("first");
    elem1.style.color = "white";
    var elem2 = document.getElementById("second");
    elem2.style.color = "white";
  }
/*
  function LoadHeader() {
    document.getElementById("header1").innerHTML = "Project Wave";
    var elem1 = document.getElementById("header1");
    elem1.style.color = "black";
  }
*/

  function generateRandom(min, max, exclude) {
    //generates random question which excludes a value, in this case the correct answer to prevent duplicates
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === exclude ? generateRandom(min, max, exclude) : num;
  }

  function LoadTotal(total) {
    //prints total score in center box
    document.getElementById("third").innerHTML = total;
  }

  function LoadAdditionQuestion(num1, num2) {
    //prints addition question in header2 box
    let question = num1 + " + " + num2 + " = "; //string for question
    document.getElementById("header2").innerHTML = question;
  }

  function LoadSubtractionQuestion(num1, num2) {
    //prints subtraction question in header2 box
    let question = num1 + " - " + num2 + " = "; //string for question
    document.getElementById("header2").innerHTML = question;
  }

  function LoadOptions(correct_num, incorrect_num) {
    //this function decides which box will contain the correct answer
    let decider = generateRandom(0, 2, -1);
    if (decider === 0) {
      document.getElementById("first").innerHTML = correct_num; //puts correct answer into first box
      document.getElementById("second").innerHTML = incorrect_num; //puts incorrect answer into second box
      combo = 1; //this is the variable used to identify which option is the correct one
    } else {
      document.getElementById("second").innerHTML = correct_num;
      document.getElementById("first").innerHTML = incorrect_num;
      combo = 2;
    }
  }

  function LoadAnswerCol() {}

  function LoadCorrect_num(num1, num2) {
    //chooses whether or not the math question will be addition or subtraction
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

  function end() {
    LoadEnd();
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

  
  
  
  
  //SOLI___________________________________________________________________________________________________________________________________________________________
  /*
  window.onSoliEvent = function(event) {
    // this function will run any time a gesture is detected'
    if (problemNo !== gameMode) {
      if (event.type == "tap") {
        console.log("tap detected");
      }

      if (event.type == "swipe") {
        // 1-> right, 7-> down, 5-> left, 3-> up
        if (event.data.direction == "1") {
          console.log("right swipe detected");
          RightSelected();
          LoadTotal(total);
          problemNo = problemNo + 1;
          game();
        } else if (event.data.direction == "5") {
          console.log("left swipe detected");
          LeftSelected();
          LoadTotal(total);
          problemNo = problemNo + 1;
          game();
        }
      }

      if (event.type == "presence") {
        // do something
      }
      if (event.type == "reach") {
        //console.log("tap detected");
        //t = 0;// do something
      }
    } else {
      end();
    }
  };
  */
  //_________________________________________________________________________________________________________________________________________________________________
  //_________________________________________________________________________________________________________________________________________________________________________________________________
  //_________________________________________________________________________________________________________________________________________________________________________________________________
}
