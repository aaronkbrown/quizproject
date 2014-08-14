
// Array for responses
var responsesArray = [];

// Array for tracking categories
var categoryArray = [];




// Fired when clicking on an answer
$(".answerClick").click(function(){
  var categoryDiv = $(this).parent();
  var categoryData = categoryDiv.attr("data-category");
  var answerValue = $(this).attr("data-answer");

  // Add answer and category values to arrays at very front
  responsesArray.unshift(answerValue);
  categoryArray.unshift(categoryData);
});


//Adjust CSS of dot on grid using calculated offset values
$("#getResults").click(function(){

  // Number of Category A questions
  var catAQuestions = 0;

  // Number of Category B questions
  var catBQuestions = 0;

  // Overall score in Category A questions
  var catAScore = 0;

  // Overall score in Category B questions
  var catBScore = 0;

  var questionsAnswered = responsesArray.length;
  var questionsCount = 0;

  while(questionsCount < questionsAnswered){

    var whichCategory = categoryArray[questionsCount];
    var responseValue = responsesArray[questionsCount];
    // Check which category
    if(whichCategory == "categoryA"){
      // If category A, get answer value
      if(responseValue == "agree"){
        // If agreed, add 1 to score in Category A
        catAScore = catAScore + 1;
      } else if(responseValue == "disagree"){
        // If disagreed, subtract 1 from score in Category A
        catAScore = catAScore - 1;
      } else {
        // No answer, no value
        catAScore = catAScore;
      }
      // Increase overall Category A question count
      catAQuestions = catAQuestions + 1;
    } else if(whichCategory == "categoryB"){
      // If category B, get answer value
      if(responseValue == "agree"){
        // If agreed, add 1 to score in Category B
        catBScore = catBScore + 1;
      } else if(responseValue == "disagree"){
        // If disagreed, subtract 1 from score in Category B
        catBScore = catBScore - 1;
      } else {
        // No answer, no value
        catBScore = catBScore;
      }
      // Increase overall Category B question count
      catBQuestions = catBQuestions + 1;
    }

    // alert("Category: " + whichCategory + ", Answer: " + responseValue);
    // Increase overall question count to traverse through arrays and while loop
    questionsCount = questionsCount + 1;
  }

  // Overall offset on grid from Category A score, X-axis
  var offsetA;

  offsetA = 0.5 + ((catAScore / catAQuestions) * 0.5);

  // Overall offset on grid from Category B score, Y-axis
  var offsetB;

  offsetB = 0.5 - ((catBScore / catBQuestions) * 0.5);

  $("#dot").css("margin-left", "calc((" + offsetA + " * 100%) - 5px)");
  $("#dot").css("margin-top", "calc((" + offsetB + " * 100%) - 5px)");
});

