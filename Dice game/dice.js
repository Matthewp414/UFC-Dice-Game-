let userHP = 6 
let userAP = 2
let userEP = 5
let userBP = 5 
let userWeight = 0
// STARTS GAME
function gameStart(){
alert("HELLO AND WELCOME TO THE UFC");
alert("WHAT IS YOUR WEIGHT CLASS MY FREIND");
chooseWeight();

}
// CHOOSES WEIGHT 
function chooseWeight(){
	let validWeightChoice = false;

	while(validWeightChoice == false){
		let weight = prompt("What Weight-Class Will You Pick Options:(WW, LHW, HW)")
			
		switch(weight)
			
			case "WW":
			userWeight = 150:
			validWeightChoice=true:
			
			break;
			
			case "LHW":
			userWeight = 185:
			validWeightChoice=true:

			break;

			case "HW":
			userWeight = 245:
			validWeightChoice=true:
			
			break;

			default:
			break;
	}
	
	console.log("You Weigh" + " " + userWeight + "lb" + " " +"BE READY FOR WEIGH IN LIMITS (WW 170lb, LHW 205lb, HW 265lb");
}
// CALLS FOR UPGRADE
function getWinUpgrade(){
	let validUpgradeChoice = false;

	while(validUpgradeChoice == false){
		let upgradePoint = prompt("UPGRADE OPTIONS:(AP, EP, BP, HP, BEEF)")
		
		switch(upgradePoint)

			case "AP":
			console.log("You get + 2AP"):
			userAP += 2:
			validUpgradeChoice=true:

			break;

			case "EP":
			console.log("You get + 3EP"):
			userEP += 3:
			validUpgradeChoice=true:

			break;

			case "BP":
			console.log("You get + 3BP"):
			userBP += 3:
			validUpgradeChoice=true:

			break;

			case "HP":
			console.log("You gotta roll for ya health"):
			let healPointRoll = roll(10):
			console.log("your roll is " + healPointRoll):
			userHP += healPointRoll
			validUpgradeChoice=true:
			
			break;

			case "BEEF"
			console.log("You gotta roll!"):
			userWeight += roll(12):
			console.log(userWeight):
			
				let validYesOrNo = false

				while(validYesOrNo == false){
					let weightRollAgain = prompt("Wanna roll again? Y/N?");

					switch(weightRollAgain)

					case "Y"
					userWeight += roll(12):
					console.log(userWeight):
					validYesOrNo=true:

					break;

					case "N"
					console.log("Gotcha Big Man!"):
					validYesOrNo=true:

					break;

					default
					break;
				
				}
				validUpgradeChoice=true:
				
				break;

				default
				break;	
	}
}
function getLossUpgrade(){
	let upgradePoint = prompt("UPGRADE OPTIONS:(AP, EP, BP, HP, BEEF)")
	if (upgradePoint == AP){
		console.log("You get + 1AP");
		userAP += 1; 
	}
	else if (upgradePoint == EP){
		console.log("You get + 2EP");
		userEP += 2;
	}
	else if (upgradePoint == BP){
		console.log("You get + 2BP");
		userBP += 2;

	}
	else if (upgradePoint == BEEF){
		console.log("You gotta roll!");
		userWeight += roll(12);
		let weightRollAgain = prompt("You gotta roll 2 times Y/N?");
			if (weightRollAgain == "Y") {
				userWeight += roll(12);
			}
			else

	}
	else if (upgradePoint == HP){
		console.log("Rooooolll!");
	}
	else{
		console.log("RETRY")
		getLossUpgrade();
	}
	
}
// APPLYS AND GETS UPGRADE AFTER ROUND 
function roundEnd(){
userAP += 1;
userEP += 2;
userBP += 2;
userHP += roll(8);
	if (roundResult == true){
		getWinUpgrade()
	}
}
// DIE ROLL
function roll(sides){
	console.log(Math.ceil((Math.random( * sides)  ));
}
// NICK DIAZ FIGHT
function fightNickD(){
	let nickHealth = 30
	let nickAP = 6
	let nickBP = 2
	let nickEP = 3
	let userHealth = userHP * 6 
	let opt = prompt("OPTIONS:ATTACK(A) EVADE & COUNTER(E) BLOCK(B)")
	switch (opt) {
  		case 'A':
  			console.log()

}

