function start() {
		$('#instructScreen').css("display", "none");
		$('#openingScreen').css("display", "block");
		$('#onePlayer').css("display", "none");
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
	alert('Please match the correct answer number to the question number by selecting the corresponding answer button for each question. Press continue to go to the next round.')
});

$('#p2').on('click', () => {
	twoPlayerGame.p1Round1Screen();
});

$('#continue').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.round2screen();
		onePlayer.round2setup();
		console.log('round2');
	} else if (onePlayer.currentRound ===2) {
		onePlayer.round3screen();
		onePlayer.round3setup();
		console.log('round 3');
	} else if (onePlayer.currentRound === 3) {
		onePlayer.finalScreen();
		onePlayer.finalScoreSetup();
		console.log('final');
		console.log(onePlayer.score1)
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
	}

});
$('#q1a2').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect += 1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect += 1;
	}
});
$('#q1a3').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect += 1;
	}
});
$('#q2a1').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1correct += 1;
	}

});
$('#q2a2').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect +=1;
	}
});
$('#q2a3').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect +=1;
	}
});
$('#q3a1').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect +=1;
	}

});
$('#q3a2').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1correct += 1;
	}
});
$('#q3a3').on('click', ()=> {
	if (onePlayer.currentRound === 1) {
		onePlayer.p1incorrect +=1;
	}else if (onePlayer.currentRound === 2) {
		onePlayer.p1correct += 1;
	}else if (onePlayer.currentRound === 3) {
		onePlayer.p1incorrect +=1;
	}
});


class Game {
	constructor() {
		this.p1correct = 0,
		this.p1incorrect = 0,
		this.finalScore = 0,
		this.questions = [],
		this.answers = [],
		this.currentRound = 0
		// this.numberofRounds =0
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
		// $('#p1r1').css("display", "none");
		// $('#p1r2').css("display", "none");
		// $('#p1r3').css("display", "none");
		// $('#p2r1').css("display", "none");
		// $('#p2r2').css("display", "none");
		// $('#p2r3').css("display", "none");
		// $('#buttons').css("display", "none");
		// $('#stats').css("display", "none");
		// $('#r1Stats').css("display", "none");
		// $('#r2Stats').css("display", "none");
		// $('#r3Stats').css("display", "none");
		$('#finalScreen').css("display", "none");
		
	}



	roundUpdate() {
		// for (let i = 0; i < numberofRounds; i++) {
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
		this.addQuestions();
		this.addAnswers();
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
		this.questions.push("html definition");
		this.questions.push("question 2");
		this.questions.push("question 3");
		this.questions.push("question 4");
		this.questions.push("question 5");
		this.questions.push("question 6");
		this.questions.push("question 7");
		this.questions.push("question 8");
		this.questions.push("question 9");
	}

	addAnswers() {
		this.answers.push('answer1');
		this.answers.push('answer2');
		this.answers.push('answer3');
		this.answers.push('answer4');
		this.answers.push('answer5');
		this.answers.push('answer6');
		this.answers.push('answer7');
		this.answers.push('answer8');
		this.answers.push('answer9');


	}
	roundUnoQuestions() {
		let q1 = this.questions[0];
		console.log(q1);
		let ww = $('#s1r1').children();
		console.log(ww);
		let d1 = ww[0];
		console.log(d1);
		$(d1).text(q1);

		let q2 = this.questions[1];
		console.log(q2);
		let xx = $('#s1r1').children();
		console.log(ww);
		let d2 = xx[1];
		console.log(d2);
		$(d2).text(q2);

		let q3 = this.questions[2];
		console.log(q3);
		let zz = $('#s1r1').children();
		console.log(ww);
		let d3 = zz[2];
		console.log(d3);
		$(d3).text(q3);
	}

	roundUnoAnswers() {
		let a1 = this.answers[0];
		console.log(a1);
		let aa = $('#s1r1').children();
		console.log(aa);
		let bb = aa[3];
		console.log(bb);
		let cc = $(bb).children();
		let dd = cc[0];
		$(dd).text(a1);
		
		let a2 = this.answers[1];
		console.log(a2);
		let ee = $('#s1r1').children();
		let ff = ee[3];
		let gg = $(ff).children();
		let hh = gg[1];
		$(hh).text(a2);

		let a3 = this.answers[0];
		let ii = $('#s1r1').children();
		let jj = ii[3];
		let kk = $(jj).children();
		let ll = kk[2];
		$(ll).text(a3);
		
	}
	roundDosQuestions() {
		let q1 = this.questions[3];
		console.log(q1);
		let ww = $('#s1r2').children();
		console.log(ww);
		let d1 = ww[0];
		console.log(d1);
		$(d1).text(q1);

		let q2 = this.questions[4];
		console.log(q2);
		let xx = $('#s1r2').children();
		console.log(ww);
		let d2 = xx[1];
		console.log(d2);
		$(d2).text(q2);

		let q3 = this.questions[5];
		console.log(q3);
		let zz = $('#s1r2').children();
		console.log(ww);
		let d3 = zz[2];
		console.log(d3);
		$(d3).text(q3);
	}

	roundDosAnswers() {
		let a1 = this.answers[3];
		console.log(a1);
		let aa = $('#s1r2').children();
		console.log(aa);
		let bb = aa[3];
		console.log(bb);
		let cc = $(bb).children();
		let dd = cc[0];
		$(dd).text(a1);
		
		let a2 = this.answers[4];
		console.log(a2);
		let ee = $('#s1r2').children();
		let ff = ee[3];
		let gg = $(ff).children();
		let hh = gg[1];
		$(hh).text(a2);

		let a3 = this.answers[5];
		let ii = $('#s1r2').children();
		let jj = ii[3];
		let kk = $(jj).children();
		let ll = kk[2];
		$(ll).text(a3);
	}
		

	roundTresQuestions() {
		let q1 = this.questions[6];
		console.log(q1);
		let ww = $('#s1r3').children();
		console.log(ww);
		let d1 = ww[0];
		console.log(d1);
		$(d1).text(q1);

		let q2 = this.questions[7];
		console.log(q2);
		let xx = $('#s1r3').children();
		console.log(ww);
		let d2 = xx[1];
		console.log(d2);
		$(d2).text(q2);

		let q3 = this.questions[8];
		console.log(q3);
		let zz = $('#s1r3').children();
		console.log(ww);
		let d3 = zz[2];
		console.log(d3);
		$(d3).text(q3);
	}

	roundTresAnswers() {
		let a1 = this.answers[6];
		console.log(a1);
		let aa = $('#s1r3').children();
		console.log(aa);
		let bb = aa[3];
		console.log(bb);
		let cc = $(bb).children();
		let dd = cc[0];
		$(dd).text(a1);
		
		let a2 = this.answers[7];
		console.log(a2);
		let ee = $('#s1r3').children();
		let ff = ee[3];
		let gg = $(ff).children();
		let hh = gg[1];
		$(hh).text(a2);

		let a3 = this.answers[8];
		let ii = $('#s1r3').children();
		let jj = ii[3];
		let kk = $(jj).children();
		let ll = kk[2];
		$(ll).text(a3);
		
	}
	finalScoreSetup() {
		const $h1 = $('<h2/>');
		$h1.text(`Correct Answers: ${this.p1correct.toString()}`);
		const $h12 = $('<h2/>');
		$h12.text(`Incorrect Answers: ${this.p1incorrect.toString()}`);
		$h1.insertAfter('#finalScoreText');
		$h12.insertAfter('#finalScoreText');
	}


}



//1 player game

class Game1p extends Game {
	round1screen () {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "block");
		$('#s1r1').css("display", "block");
		$('.q1').css("display", "block");
		$('#twoPlayer').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#finalScreen').css("display", "none");
		// $('#p1r1').css("display", "none");
		// $('#p1r2').css("display", "none");
		// $('#p1r3').css("display", "none");
		// $('#p2r1').css("display", "none");
		// $('#p2r2').css("display", "none");
		// $('#p2r3').css("display", "none");
		// $('#buttons').css("display", "none");
		// $('#stats').css("display", "none");
		// $('#r1Stats').css("display", "none");
		// $('#r2Stats').css("display", "none");
		// $('#r3Stats').css("display", "none");
		
	}

	round2screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "block");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "block");
		$('.q1').css("display", "block")
		$('#twoPlayer').css("display", "none");
		$('#buttons').css("display", "block");
		$('#stats').css("display", "none");
		$('#finalScreen').css("display", "none");

	}

	round3screen() {
		$('#openingScreen').css("display", "none");
		$('#onePlayer').css("display", "block");
		$('#s1r1').css("display", "none");
		$('#s1r2').css("display", "none");
		$('#s1r3').css("display", "block");
		$('.q1').css("display", "block")
		$('#twoPlayer').css("display", "none");
		$('#buttons').css("display", "block");
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


// $('#openingScreen').css("display", "block");
// $('#onePlayer').css("display", "block");
// $('#s1r1').css("display", "block");
// $('#s1r2').css("display", "block");
// $('#s1r3').css("display", "block");
// $('#twoPlayer').css("display", "block");
// $('#p1r1').css("display", "block");
// $('#p1r2').css("display", "block");
// $('#p1r3').css("display", "block");
// $('#p2r1').css("display", "block");
// $('#p2r2').css("display", "block");
// $('#p2r3').css("display", "block");
// $('#buttons').css("display", "block");
// $('#stats').css("display", "block");
// $('#r1Stats').css("display", "block");
// $('#r2Stats').css("display", "block");
// $('#r3Stats').css("display", "block");
// $('#finalScreen').css("display", "block");

