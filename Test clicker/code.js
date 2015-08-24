var clicks=0
var cash=0
var cashPerClick=1
var cashPerSecond=0
var cps1=0
var cps1Price=10
var test=false
var paused=false
setInterval(function(){cps()}, 1000)
$(document).ready(function(){
	$("#cashButton").click(function(){ //gives cash
		clicks++ //to track clicks (future use?)
		cash+=cashPerClick
		update()
	})
	$("#updateButton").click(function(){ //just in case
		update()
	})
	$("#cps1Button").click(function(){ //to buy a worker
		if (cash>=cps1Price||test){ //checks if the player has enough cash
			cash-=cps1Price //makes the player pay
			cps1Price*=1.1 //changes the price
			cps1++ //adds one worker
			rounding()
			update()
		}
	})
	$("#testing").click(function(){ //to be able to override the cost requirement for buying stuff
		if (test===false){
			test=true //override on
			$("#testing").text("O")
		}
		else{
			test=false //override off
			$("#testing").text("X")
		}
	})
	$("#pausing").click(function(){ //to pause cash gain
	if (paused===false){
		paused=true
		$("#pausing").text("O")
	}
	else{
		paused=false
		$("#pausing").text("X")
	}
})
})
function update(){ //to change every value that must be changed
	$("#cashCounter").text("Cash: "+cash.toFixed(2)+"$")
	$("#clickCounter").text("Clicks: "+clicks)
	cashPerSecond=cps1
	$("#cps").text("CPS: "+cashPerSecond)
	$("#cps1Button").text("Buy worker ("+cps1Price.toFixed(2)+"$)")
	$("#cps1Counter").text("Workers: "+cps1)
}
function cps(){ //to gain cash each second
	if (paused===false){
		cash+=cashPerSecond
		rounding()
		update()
	}
}
function rounding(){ //to deal with messy floating points
	clicks=Math.round(clicks)
	cash=Math.round(cash*100)/100
	cashPerClick=Math.round(cashPerClick*100)/100
	cashPerSecond=Math.round(cashPerSecond*100)/100
	cps1=Math.round(cps1)
	cps1Price=Math.round(cps1Price*100)/100
}