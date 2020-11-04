let num1 = Math.floor((Math.random(0) * 5) + 1); //creates number 0 to 5 for first num in equation
      let num2 = Math.floor((Math.random(0) * 5) + 1);//creates number 0 to 5 for second num in equation
      
      let incorrect_num = Math.floor((Math.random(0) * 10) + 1); //incorrect answer
      let correct_num = num1 + num2; //correct answer
      
      let question = num1 + " + " + num2 + " = "; //string for question

      //glitch not loading test tomorrow prevents correct answer twice
      if(incorrect_num = correct_num){
        incorrect_num = Math.floor((Math.random(0) * 10) + 1);
      }  
      

      document.getElementById("header2").innerHTML = question;
  
      let decider = Math.floor((Math.random(0) * 5) + 1);   
      if(decider >= 3){
        document.getElementById("first").innerHTML = correct_num;
        document.getElementById("second").innerHTML = incorrect_num;
        
      }
      else{
        document.getElementById("second").innerHTML = correct_num;
        document.getElementById("first").innerHTML = incorrect_num;
      }
       





