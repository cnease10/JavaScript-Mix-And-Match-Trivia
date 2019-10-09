function start() {
		$('#instructScreen').css("display", "none");
		$('#openingScreen').css("display", "grid");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "none");
		$('#buttons').css("display", "none");
		$('#stats').css("display", "none");
		$('#twoPlayer').css("display", "none");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "none");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
		

	}
$(window).on( "load", start() );


$('#instructions').on('click', () => {
	onePlayer.instructionScreen()
});

$('#back').on('click', () => {
	location.reload();
})

$('#p1').on('click', ()=> {
	onePlayer.round1screen(); 
	onePlayer.round1setup();
	const $h1 = $('<h1/>')
	$h1.text('Player 1, Round 1');
	$('#s1r1').prepend($h1);
});

$('#p2').on('click', () => {
	twoPlayerGame.p1Round1Screen();
	twoPlayerGame.p1Round1Setup();
	const $h1 = $('<h1/>')
	$h1.text('Player 1, Round 1');
	$('#p1r1').prepend($h1);
});

$('#continue').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.round2screen();
		onePlayer.round2setup();
		const $h1 = $('<h1/>')
		$h1.text('Player 1, Round 2');
		$('#s1r2').prepend($h1);
		console.log('round2');
	} else if (onePlayer.currentRound ===2) {
		onePlayer.round3screen();
		onePlayer.round3setup();
		const $h1 = $('<h1/>')
		$h1.text('Player 1, Round 3');
		$('#s1r3').prepend($h1);
		console.log('round 3');
	} else if (onePlayer.currentRound === 3) {
		onePlayer.finalScreen();
		onePlayer.finalScoreSetup();
		console.log('final');
	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2Round1Screen();
		twoPlayerGame.p2Round1Setup();
		const $h1 = $('<h1/>')
		$h1.text('Player 2, Round 1');
		$('#p2r1').prepend($h1);
		console.log('one');
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.p1Round2Screen();
		twoPlayerGame.p1Round2Setup();
		console.log('')
		const $h1 = $('<h1/>')
		$h1.text('Player 1, Round 2');
		$('#p1r2').prepend($h1);
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2Round2Screen();
		twoPlayerGame.p2Round2Setup();
		const $h1 = $('<h1/>')
		$h1.text('Player 2, Round 2');
		$('#p2r2').prepend($h1);
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.p1Round3Screen();
		twoPlayerGame.p1Round3Setup();
		const $h1 = $('<h1/>')
		$h1.text('Player 1, Round 3');
		$('#p1r3').prepend($h1);
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2Round3Screen();
		twoPlayerGame.p2Round3Setup();
		const $h1 = $('<h1/>')
		$h1.text('Player 2, Round 3');
		$('#p2r3').prepend($h1);
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.p2FinalScreen();
		twoPlayerGame.p2FinalScreenSetup();
	}
});

$('#restart').on('click', () => {
	location.reload();
});
$('#q1a1').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1correct += 1;
	} else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	} else if (onePlayer.currentRound === 3) {
		onePlayer.p1correct += 1;

	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npcorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npcorrect += 1;
	}

});
$('#q1a2').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect += 1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect += 1;

	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npcorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npincorrect += 1;
	}
});
$('#q1a3').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect += 1;

	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npincorrect += 1;
	}

});
$('#q2a1').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect += 1;

	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npincorrect += 1;
	}

});
$('#q2a2').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1correct +=1;

	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npcorrect += 1;
	}
});
$('#q2a3').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect +=1;

	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npcorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npcorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npincorrect += 1;
	}
});
$('#q3a1').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect += 1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1correct +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1correct +=1;
	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npcorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npincorrect += 1;
	}

});
$('#q3a2').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1correct +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect += 1;
	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npcorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npincorrect += 1;
	}
});
$('#q3a3').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect += 1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1correct +=1;
	} else if (twoPlayerGame.p1Round === 1 && twoPlayerGame.p2Round === 0) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 1 && twoPlayerGame.p1Round === 1) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 2 && twoPlayerGame.p2Round === 1) {
		twoPlayerGame.p2p1incorrect += 1;
	} else if (twoPlayerGame.p2Round === 2 && twoPlayerGame.p1Round === 2) {
		twoPlayerGame.npincorrect += 1;
	} else if (twoPlayerGame.p1Round === 3 && twoPlayerGame.p2Round === 2) {
		twoPlayerGame.p2p1correct += 1;
	} else if (twoPlayerGame.p2Round === 3 && twoPlayerGame.p1Round === 3) {
		twoPlayerGame.npcorrect += 1;
	}
});


class Game {
	constructor() {
		this.p1correct = 0,
		this.p1incorrect = 0,
		this.p2p1correct= 0,
		this.p2p1incorrect = 0,
		this.npcorrect = 0,
		this.npincorrect = 0,
		this.finalScore = 0,
		this.questions = [],
		this.answers = [],
		this.currentRound = 0
		
	}
	instructionScreen() {
		$('#instructScreen').css("display", "block");
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('.q1').css("display", "none")
		$('#twoPlayer').css("display", "none");
		$('#buttons').css("display", "none");
		$('#stats').css("display", "none");
		$('#twoPlayer').css("display", "none");
		$('#finalScreen').css("display", "none");
		
	}



	roundUpdate() {
		this.currentRound+=1;
	}
		
	
	round1setup() {
		this.addQuestions();
		this.roundUnoQuestions();
		this.addAnswers();
		this.roundUnoAnswers();
		this.roundUpdate();
	}

	round2setup() {
		this.roundDosQuestions();
		this.roundDosAnswers();
		this.roundUpdate();
	}

	round3setup() {
		this.roundTresQuestions();
		this.roundTresAnswers();
		this.roundUpdate();
	}

	addQuestions () {
		this.questions.push("Q1: What does true || false equate to?");
		this.questions.push("Q2: A boolean expression: ");
		this.questions.push("Q3: What does false && true equate to?");
		this.questions.push("Q1: When using the DOM, you can create: ");
		this.questions.push("Q2: When instantiating, you create");
		this.questions.push("Q3: What is an example of control flow?");
		this.questions.push("Q1: What has key value pairs?");
		this.questions.push("Q2: What does scope mean?");
		this.questions.push("Q3: What is control flow?");
	}

	addAnswers() {
		this.answers.push('A1: true');
		this.answers.push('A2: false');
		this.answers.push('A3: is either true or false');
		this.answers.push('A1: functions');
		this.answers.push('A2: new HTML elements');
		this.answers.push('A3: objects');
		this.answers.push('A1: object');
		this.answers.push('A2: restriction of where in your code your variables can be accessed');
		this.answers.push('A3: order in which individual statements or instructions are executed');


	}
	roundUnoQuestions() {
		let q1 = this.questions[0];
		let ww = $('#s1r1').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[1];
		$(d2).text(q2);
		let q3 = this.questions[2];
		$(d3).text(q3);
	}

	roundUnoAnswers() {
		let a1 = this.answers[0];
		let aa = $('#s1r1').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[1];
		$(cc).text(a2);
		let a3 = this.answers[2];
		$(dd).text(a3);
		
	}
	roundDosQuestions() {
		let q1 = this.questions[3];
		let ww = $('#s1r2').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[4];
		$(d2).text(q2);
		let q3 = this.questions[5];
		$(d3).text(q3);
	}

	roundDosAnswers() {
		let a1 = this.answers[3];
		let aa = $('#s1r2').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[4];
		$(cc).text(a2);
		let a3 = this.answers[5];
		$(dd).text(a3);
	}
		

	roundTresQuestions() {
		let q1 = this.questions[6];
		let ww = $('#s1r3').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[7];
		$(d2).text(q2);
		let q3 = this.questions[8];
		$(d3).text(q3);
	}

	roundTresAnswers() {
		let a1 = this.answers[6];
		let aa = $('#s1r3').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[7];
		$(cc).text(a2);
		let a3 = this.answers[8];
		$(dd).text(a3);
		
		
	}
	finalScoreSetup() {
		const $h1 = $('<h2/>');
		$h1.text(`Correct Answers: ${this.p1correct.toString()} of 9`);
		$h1.insertAfter('#finalScoreText');
	}


}



//1 player game

class Game1p extends Game {
	round1screen () {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "grid");
		$('#s1r1').css("display", "grid");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#buttons').css("display", "grid");
		$('#twoPlayer').css("display", "none");
		$('#stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	
		
	}

	round2screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "grid");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "grid");
		$('#buttons').css("display", "grid");
		$('#twoPlayer').css("display", "none");
		$('#stats').css("display", "none");
		$('#finalScreen').css("display", "none");

	}

	round3screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "grid");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "grid");
		$('#buttons').css("display", "grid");
		$('#twoPlayer').css("display", "none");
		$('#stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}

	finalScreen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "none");
		$('#buttons').css("display", "none");
		$('#stats').css("display", "none");
		$('#finalScreen').css("display", "block");
	}
	

}

const onePlayer = new Game1p ();

//2 player game
class Game2p extends Game {
	constructor() {
		super();
		this.p1Round = 0,
		this.p2Round = 0
	}

	p1RoundUpdate() {
		this.p1Round += 1;
			
	}

	p2RoundUpdate() {
		this.p2Round += 1;
	}

	p1Round1Setup() {
		this.addQuestions();
		this.p1Round1Questions();
		this.addAnswers();
		this.p1Round1Answers();
		this.p1RoundUpdate();
	}

	p2Round1Setup() {
		this.p2Round1Questions();
		this.p2Round1Answers();
		this.p2RoundUpdate();
	}

	p1Round2Setup() {
		this.p1Round2Questions();
		this.p1Round2Answers();
		this.p1RoundUpdate();
	}

	p2Round2Setup() {
		this.p2Round2Questions();
		this.p2Round2Answers();
		this.p2RoundUpdate();
	}

	p1Round3Setup() {
		this.p1Round3Questions();
		this.p1Round3Answers();
		this.p1RoundUpdate();
	}
	p2Round3Setup() {
		this.p2Round3Questions();
		this.p2Round3Answers();
		this.p2RoundUpdate();
	}
	p2FinalScreenSetup() {
		const $h2 = $('<h2/>');
		$h2.text(` Player 2 Correct Answers: ${this.npcorrect.toString()} of 9`);
		$h2.insertAfter('#finalScoreText');
		const $h23 = $('<h2/>');
		$h23.text(` Player 1 Correct Answers: ${this.p2p1correct.toString()} of 9`);
		$h23.insertAfter('#finalScoreText');
	

	}
	p1Round1Questions() {
		let q1 = this.questions[0];
		let ww = $('#p1r1').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[1];
		$(d2).text(q2);
		let q3 = this.questions[2];
		$(d3).text(q3);
	}

	p1Round1Answers() {
		let a1 = this.answers[0];
		let aa = $('#p1r1').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[1];
		$(cc).text(a2);
		let a3 = this.answers[2];
		$(dd).text(a3);
	}

	p2Round1Questions() {
		let q1 = this.questions[0];
		let ww = $('#p2r1').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[1];
		$(d2).text(q2);
		let q3 = this.questions[2];
		$(d3).text(q3);
	}

	p2Round1Answers() {
		let a1 = this.answers[0];
		let aa = $('#p2r1').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[1];
		$(cc).text(a2);
		let a3 = this.answers[2];
		$(dd).text(a3);
		
	}
	p1Round2Questions() {
		let q1 = this.questions[3];
		let ww = $('#p1r2').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[4];
		$(d2).text(q2);
		let q3 = this.questions[5];
		$(d3).text(q3);
	}

	p1Round2Answers() {
		let a1 = this.answers[3];
		let aa = $('#p1r2').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[4];
		$(cc).text(a2);
		let a3 = this.answers[5];
		$(dd).text(a3);
	}
	p2Round2Questions() {
		let q1 = this.questions[3];
		let ww = $('#p2r2').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[4];
		$(d2).text(q2);
		let q3 = this.questions[5];
		$(d3).text(q3);
	}

	p2Round2Answers() {
		let a1 = this.answers[3];
		let aa = $('#p2r2').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[4];
		$(cc).text(a2);
		let a3 = this.answers[5];
		$(dd).text(a3);
	}
	p1Round3Questions() {
		let q1 = this.questions[6];
		let ww = $('#p1r3').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[7];
		$(d2).text(q2);
		let q3 = this.questions[8];
		$(d3).text(q3);
	}

	p1Round3Answers() {
		let a1 = this.answers[6];
		let aa = $('#p1r3').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[7];
		$(cc).text(a2);
		let a3 = this.answers[8];
		$(dd).text(a3);
		
	}
	p2Round3Questions() {
		let q1 = this.questions[6];
		let ww = $('#p2r3').children();
		let d1 = ww[0];
		let d2 = ww[1];
		let d3 = ww[2];
		$(d1).text(q1);
		let q2 = this.questions[7];
		$(d2).text(q2);
		let q3 = this.questions[8];
		$(d3).text(q3);
	}

	p2Round3Answers() {
		let a1 = this.answers[6];
		let aa = $('#p2r3').children();
		let bb = aa[3];
		let cc = aa[4];
		let dd = aa[5];
		$(bb).text(a1);
		let a2 = this.answers[7];
		$(cc).text(a2);
		let a3 = this.answers[8];
		$(dd).text(a3);
	}


	p1Round1Screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "block");
		$('#p1r1').css("display", "block");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}
	p2Round1Screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "block");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "block");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}
	
	p1Round2Screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "block");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "block");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}
	p2Round2Screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "block");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "block");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}
	p1Round3Screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "block");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "block");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}

	p2Round3Screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "block");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "block");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
	}
	p2FinalScreen () {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "none");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "none");
		$('#twoPlayer').css("display", "none");
		$('#p1r1').css("display", "none");
		$('#p1r2').css("display", "none");
		$('#p1r3').css("display", "none");
		$('#p2r1').css("display", "none");
		$('#p2r2').css("display", "none");
		$('#p2r3').css("display", "none");
		$('#buttons').css("display", "none");
		$('#stats').css("display", "none");
		$('#r1Stats').css("display", "none");
		$('#r2Stats').css("display", "none");
		$('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "block");
	}

}
const twoPlayerGame = new Game2p ();

