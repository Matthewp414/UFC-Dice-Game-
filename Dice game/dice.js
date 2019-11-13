let userHP = 6 
let userAP = 2
let userEP = 0
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
			
		switch(weight){
			
			case "WW":
			userWeight = 150
			validWeightChoice=true
			
			break;
			
			case "LHW":
			userWeight = 185
			validWeightChoice=true

			break;

			case "HW":
			userWeight = 245
			validWeightChoice=true
			
			break;

			default:
			chooseWeight();
			break;
		}
	}
	
	console.log("You Weigh" + " " + userWeight + "lb" + " " +"BE READY FOR WEIGH IN LIMITS (WW 170lb, LHW 205lb, HW 265lb");
}
// CALLS FOR UPGRADE
function getWinUpgrade(){
	let validUpgradeChoice = false;

	while(validUpgradeChoice == false){
		let upgradePoint = prompt("UPGRADE OPTIONS:(AP, EP, BP, HP, BEEF)")
		
		switch(upgradePoint){

			case "AP":
				console.log("You get + 2AP")
				userAP += 2
				validUpgradeChoice=true

			break;

			case "EP":
				console.log("You get + 2EP")
				userEP += 2
				validUpgradeChoice=true

			break;

			case "BP":
				console.log("You get + 3BP")
				userBP += 3
				validUpgradeChoice=true

			break;

			case "HP":
				console.log("You gotta roll for ya health")
				let healPointRoll = roll(10)
				console.log("your roll is " + healPointRoll)
				userHP += healPointRoll
				validUpgradeChoice=true
			
			break;

			case "BEEF":
				console.log("You gotta roll!")
				userWeight += roll(12)
				console.log(userWeight)
			
				let validYesOrNo = false

				while(validYesOrNo == false){
					let weightRollAgain = prompt("Wanna roll again? Y/N?");

					switch(weightRollAgain){

						case "Y":
							userWeight += roll(12)
							console.log(userWeight)
							validYesOrNo=true

						break;
						case "N":
							console.log("Gotcha Big Man!");
							validYesOrNo=true;

						break;

						default:
						 return getWinUpgrade();
					
						break;
					}
				
				}
				validUpgradeChoice=true;
				
				break;

				default:
				 return getWinUpgrade()
				break;	
		}		
	}
}
function getLossUpgrade(){
	let validUpgradeChoice = false;

	while(validUpgradeChoice == false){
		let upgradePoint = prompt("UPGRADE OPTIONS:(AP, EP, BP, HP, BEEF)")
		
		switch(upgradePoint){

			case "AP":
			console.log("You get + 2AP")
			userAP += 1
			validUpgradeChoice=true

			break;

			case "EP":
			console.log("You get + 1EP")
			userEP += 1
			validUpgradeChoice=true

			break;

			case "BP":
			console.log("You get + 3BP")
			userBP += 2
			validUpgradeChoice=true

			break;

			case "HP":
			console.log("You gotta roll for ya health")
			let healPointRoll = roll(8)
			console.log("your roll is " + healPointRoll)
			userHP += healPointRoll
			validUpgradeChoice=true
			
			break;

			case "BEEF":
			let validYesOrNo = false
				while(validYesOrNo == false){
					let weightRollAgain = prompt("You have to roll 2 times, still want to BEEFUP Y/N?");

					switch(weightRollAgain){

					case "Y":
					userWeight += roll(12)
					console.log(userWeight)
					console.log("Second Roll")
					userWeight += roll(12)
					console.log(userWeight)
					validYesOrNo=true
					break;

					case "N":
					console.log("Gotcha Big Man!")
					 return getLossUpgrade()
					

					break;

					default:
					 return getLossUpgrade()

					break;
					}
				}
	
				validUpgradeChoice=true
				
					break;

					default:
					 return getLossUpgrade()
					break;
		}	
	}
}

// APPLYS AND GETS UPGRADE AFTER ROUND 

function roundEnd(rslt){
userAP += 1;
userEP += 2;
userBP += 2;
userHP += roll(8);
	if (rslt == "win"){
		getWinUpgrade();
	}
	if (rslt == "loss"){
		getLossUpgrade();
	}
}
// DIE ROLL
function roll(sides){
	return Math.ceil((Math.random()* sides ) + 1 );
}
// NICK DIAZ FIGHT
function botFighting(ap, ep, bp ){
	
	let botMoveArray = [];
	let botAttackRoll = roll(6)
 	let botBlockRoll = roll(20)
 	let botEvadeRoll = roll(20)
	let botAttack = (ap + botAttackRoll) * 2;
	let botBlock = bp + botBlockRoll;
 	let botEvade = ep + botEvadeRoll;
 	botMoveArray.push(botAttack);
 	botMoveArray.push(botBlock);
 	botMoveArray.push(botEvade);
 	return botMoveArray;
}
function botMovePick(choice){

}
let roundResult = "";
let nickHealth = 30;
let nickAP = 6;
let nickBP = 2;
let nickEP = 3;
let userHealth = userHP * 6
let totalUserEP = userEP + 20

function fightNickD(){
	 
	validMoveChoice = false
	while(validMoveChoice == false && (nickHealth > 0 || userHealth > 0)){
		let moveOption = prompt("OPTIONS:ATTACK(A) EVADE & COUNTER(E) BLOCK(B)")
		let botsMove = botFighting(nickAP, nickEP, nickBP);
		switch (moveOption){

			case "A":
				console.log("you are attacking with a PUNCH")
				nickHealth -= (userAP + roll(6)) * 2
				console.log("nicks health is at " + nickHealth)
				let nickMove = roll(3)				
				let moveSwitchNick = nickMove - 1
					switch(moveSwitchNick){
						
						case 0:
							console.log("He's punching")
							let botSwing = botsMove[0].parseInt()
							userHealth -= botSwing
							console.log("your health is at " + userHealth)


						break;
						 
						case 1:
							console.log("He's going to try to evade and counter punch")
							let botNickEvadePoints = botsMove[1] / 23 * 100
							let rollingForChance = roll(100)
							if (botNickEvadePoints >= rollingForChance){
								console.log("he dodged now hes attacking this ones gonna hurt!")
								userHealth -= (nickAP + 2 + roll(6)) * 2
								console.log("your health is at " + userHealth)
							}	

							else {
								console.log("He missied the counter punch and you glance him")
								nickHealth -= (userAP / 2 + roll(6)) * 2
								console.log("nicks healht is at " + nickHealth)
							}

							break;

							case 2:
								console.log("He's doing a good job of blocking right now")
								nickHealth += botsMove[2]

							break;

							default:
								fightNickD()
							break;

					}
		    validMoveChoice=true
			
			break;

			case "E":
				console.log("you are gonna try to evade")
				userEvadeChance = (userEP + roll(20)) / totalUserEP * 100
				rollingForChanceUser = roll(100)
				if (userEvadeChance >= rollingForChanceUser){
								console.log("You dodged now SHOOT!")
								nickHealth -= (userAP + 2 + roll(6)) * 2
								console.log("his health is at " + nickHealth)
							}	

							else {
								console.log("He missied the counter punch and you glance him")
								userHealth -= (nickAP / 2 + roll(6)) * 2
								console.log("your health is at " + userHealth)
							}
				let nickMove2 = roll(3);
				let moveSwitchNick2 = nickMove2 - 1
					switch(moveSwitchNick2){
						
						case 0:
							console.log("He's punching")
							userHealth -= botsMove[0]
							console.log("your health is at " + userHealth)


						break;
						 
						case 1:
							console.log("He's going to try to evade and counter punch")
							botNickEvadePoints = botsMove[1] / 23 * 100
							rollingForChanceBot = roll(100)
							if (botNickEvadePoints >= rollingForChanceBot){
								console.log("he dodged now hes attacking this ones gonna hurt!");
								userHealth -= (nickAP + 2 + roll(6)) * 2
								console.log("your health is at " + userHealth)
							}	

							else {
								console.log("He missied the counter punch and you glance him");
								nickHealth -= (userAP / 2 + roll(6)) * 2;
								console.log("nicks health is at " + nickHealth);
							}

							break;

							case 2:
								console.log("He's doing a good job of blocking right now")
								nickHealth += botsMove[2]

							break;
							
							default:
								fightNickD()
							break;

					}

			validMoveChoice=true
			break;
			case "B":
				console.log("you are gonna put your hands up and re-gain your strength")
				userHealth += userBP + roll(20)
				let nickMove3 = roll(3);
				let moveSwitchNick3 = nickMove3 - 1
					switch(nickMove3){
						
						case 0:
							console.log("He's punching")
							userHealth -= botsMove[0]
							console.log("your health is at " + userHealth)

						break;
						 
						case 1:
							console.log("He's going to try to evade and counter punch")
							 botNickEvadePoints = botsMove[1] / 23 * 100
							 rollingForChance = roll(100)
							if (botNickEvadePoints >= rollingForChance){
								console.log("he dodged now hes attacking this ones gonna hurt!");
								userHealth -= (nickAP + 2 + roll(6)) * 2;
								console.log("your health is at " + userHealth);
							}	

							else {
								console.log("He missied the counter punch and you glance him");
								nickHealth -= (userAP / 2 + roll(6)) * 2;
								console.log("nicks healht is at " + nickHealth);
							}

							break;

							case 2:
								console.log("He's doing a good job of blocking right now")
								nickHealth += botsMove[2]

							break;

							default:
								fightNickD()
							break;

					}
		    validMoveChoice=true
			
			break;
			default:
				fightNickD()
			break;
		
		}
	if (userHealth <= 0) {
		console.log("youve been knocked out")
		roundResult = "loss"
	}
  	else if (nickHealth <= 0) {
		console.log("Nick is out cold!")
		roundResult = "win"
	}
	else{
		fightNickD()
	}
	}
	
	
	return roundResult;
	

}
// gameStart();
let endResultNickFight = fightNickD();
roundEnd(endResultNickFight);