$("#numContestants").keyup(function(event){
	if(event.keyCode == 13){	//if 'enter' is pressed from the input box
		$("#roll").click();		//click the 'roll' button
	}
});

function Roll(){
	var rando; 	//random number
	var output; //output message
			
	rando = Math.floor((Math.random() * $('#numContestants').val()) + 1); //pull random winning number using range 1 through 'input value'

	output = "<h2>The winning number is: </h2><h1 id='output'>" + rando + "</h1><h2>CONGRATS!!</h2>" //compose winning message 
	
	$('#winningNumber').html(output); //output message to div
	
	$("#dot").show().fadeOut("slow",function(){ 				//one dot
		$("#dotdot").show().fadeOut("slow",function(){			//two dots
			$("#dotdotdot").show().fadeOut("slow",function(){	//three dots
				$('#winningNumber').fadeIn("slow");				//reveal winning message
			});
		});
	});
}