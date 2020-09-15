$(document).ready(function(){

var magicBall = {};
magicBall.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it",  "Most likely", "Outlook good", "Yes", "Signs point to yes", "Try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Dont count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
$("#answer").hide();

magicBall.randomAnswer = function (question) {
  $("#8ball").effect("shake");
  $("#answer").fadeIn(4000);
	var randomNumber=Math.random();
	var randomNumArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumArray);
	var randomAns = this.listOfAnswers[randomIndex];
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	$("#answer").text( randomAns );
};

var onClick = function() {
	$("#answer").hide();

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

setTimeout(
	function() {
		var question = prompt("Ask me a Yes or No Question!");
	magicBall.randomAnswer(question);
	}, 500);
 };

$("#questionButton").click(onClick);


});
