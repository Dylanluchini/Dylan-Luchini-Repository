//Name: Dylan Luchini
//Date Created: 9/7/18
//Most Recent Revision: 9/15/18

function luckySevens () {
	var bet = document.getElementById("bet").value;
	var money = 0;
	var d1 = 0;
	var d2 = 0;
	var diceTotal= d1 + d2;
	var totalRolls = 0;
	var losses = 0;
	var money = bet;
	var moneyNow = [bet];
	var maxMoney = 0;
	
	
	
		while (money > 0) { 
			totalRolls++;
			d1 = Math.floor(Math.random() * 6) + 1;
			d2 = Math.floor(Math.random() * 6) + 1;
			diceTotal = d1+d2;
			
				if (diceTotal == 7) {
					money = money + 4;
					var last_element = moneyNow[moneyNow.length -1]; 
					var last_updated = last_element + 4; 
					moneyNow.push(last_updated);
				} else {
					money--;
					losses++;
					var last_element = moneyNow[moneyNow.length -1];
					var last_updated = last_element-1;
					moneyNow.push(last_updated);
					totalRolls = totalRolls++;
				}
		}
		while (bet <= 0) {
				alert ("Your inital bet must be at least $1.")
				textbox1.text  = string.Empty;
		}
		
		var totalMax = 0;
		
		totalMax = Math.max.apply(Math, moneyNow);
		numRolls = moneyNow.indexOf(totalMax);
		if (numRolls<1) {
			numRolls = 0;
		}
		
		document.getElementById("p1").innerHTML=("<center><br><br><table style='width: 100% height: 100%;'><th; class='th1'><p><strong>Results</strong></p></th><tr><th class='th2'><em>Starting Bet</em></th><th class='th2'>$" + bet + ".00</th></tr><tr><td><em>Total Rolls Before Out of Money</em></td><td>" + totalRolls +"</td></tr><tr><td><em>Highest Amount Held</em></td><td>"+ totalMax +"</td></tr><tr><td><em>Roll Count at Highest Amount Held</em></td><td>" + numRolls + "</td></tr><table></center>");
	
}
				