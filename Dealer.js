var Dealer = function(){
    this.hand = [];
 }



Dealer.prototype.createHand = function(){
        var hand = new Hand();
        this.hand[0] = hand;

}




Dealer.prototype.dealerphasehit = function(){
dealer.hand[0].calcValue();	
gameboard.playerphase = false;
        if(this.hand[0].value > 21){ 
	        $("#messagebox").html("Dealer Busts!");
	        $("#messagebox").css('color', 'white');
	        $("#messagebox").css({fontSize: 25});
	        $("#hitButton").hide();
	        $("#standButton").hide();
	        $("#rebetButton").show();
	      	gameboard.payoutfunc();
		}
     
		if((this.hand[0].value > 16) && (this.hand[0].value < 22) && (this.hand[0].value < player.hands[player.splitmode].value )){ 
	        
	        $("#messagebox").html("Player wins!");
	        $("#messagebox").css('color', 'white');
	        $("#messagebox").css({fontSize: 25});
	        $("#hitButton").hide();
	        $("#standButton").hide();
	        $("#rebetButton").show();
	     	gameboard.payoutfunc();
		}

		if((this.hand[0].value > 16) && (this.hand[0].value < 22) && (this.hand[0].value > player.hands[player.splitmode].value )){ 
	        
	        $("#messagebox").html("     ");
	        $("#messagebox").css('color', 'white');
	        $("#messagebox").css({fontSize: 25});
	        $("#hitButton").hide();
	        $("#standButton").hide();
	        $("#rebetButton").show();
	     	gameboard.payoutfunc();
	     	gameboard.showscore();
	}

	if((this.hand[0].value > 16) && (this.hand[0].value < 22) && (this.hand[0].value == player.hands[player.splitmode].value )){ 
	        
	        $("#messagebox").html("PUSH!");
	        $("#messagebox").css('color', 'white');
	        $("#messagebox").css({fontSize: 25});
	        $("#hitButton").hide();
	        $("#standButton").hide();
	        $("#rebetButton").show();
	     	gameboard.payoutfunc();
	}

	if(this.hand[0].value < 17){ 
	        
	        $("#messagebox").html("Dealer hits!");
	        $("#messagebox").css('color', 'white');
	        $("#messagebox").css({fontSize: 25});
	        $("#hitButton").hide();
	        $("#standButton").hide();
	        $("#rebetButton").hide();
	        setTimeout(function() {
     		dealer.hand[0].recieveCard(deck);

            dealer.hand[0].calcValue();

            dealer.dealerphasehit(0);
            gameboard.drawCards();
            gameboard.showscore();
			}, 2500)    


	}


}

