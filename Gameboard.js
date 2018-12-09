var Gameboard = function(){

	this.name = "blackjack";
	this.players = [];
	this.payout = 0;
	this.playernumber = 0;
	this.playerphase = true;
    this.field = $('<div />',
             { id: "wipe-container",
                class: "wipe-container",               
             }).appendTo($(".flex-container"));

}



Gameboard.prototype.createPlayer = function(){
player = new Player();
hand = new Hand();
	player.hands.push(hand);
    player.hands[0].recieveCard(deck);
    player.hands[0].recieveCard(deck);

	this.players.push(player);    
}

Gameboard.prototype.addPlayer = function(){
newplayer = new Player();
newhand = new Hand();
	gameboard.players.push(newplayer);
	gameboard.players[gameboard.players.length-1].hands.push(newhand);
    gameboard.players[gameboard.players.length-1].hands[0].recieveCard(deck);
    gameboard.players[gameboard.players.length-1].hands[0].recieveCard(deck);
}

Gameboard.prototype.createDealer = function(){
dealer = new Dealer();
hand = new Hand();
dealer.hand.push(hand);
    dealer.hand[0].recieveCard(deck);
    dealer.hand[0].recieveCard(deck);

}

Gameboard.prototype.createDeck = function(){
deck = new Deck();
deck.initializeDeck();
}

Gameboard.prototype.payoutfunc = function(){


	for(i=0; i<gameboard.players.length; i++){
	console.log(i);	
		for(j=0; j<gameboard.players[i].hands.length; j++){	
		console.log(j);
			if((gameboard.players[i].hands[j].value > 22) && (dealer.hand[0].value > 21)){
			gameboard.players[i].money = gameboard.players[i].money;
			}else if((gameboard.players[i].hands[j].value > 22) && (dealer.hand[0].value < 22)){	
			gameboard.players[i].money = gameboard.players[i].money;	
			}else if((gameboard.players[i].hands[j].value < 22) && (dealer.hand[0].value > 21)){
			gameboard.players[i].money = gameboard.players[i].money + gameboard.players[i].hands[j].bet*2;
			}else if((gameboard.players[i].hands[j].value < 22) && (gameboard.players[i].hands[j].value > dealer.hand[0].value)){
			gameboard.players[i].money = gameboard.players[i].money + gameboard.players[i].hands[j].bet*2;
			}else if((gameboard.players[i].hands[j].value < 22) && (gameboard.players[i].hands[j].value == dealer.hand[0].value)){
			gameboard.players[i].money = gameboard.players[i].money + gameboard.players[i].hands[j].bet;	
			}
		}
	}
}

Gameboard.prototype.cleanPayoutfunc = function(){
	for(i=0; i<gameboard.players.length; i++){
	console.log(i);	
		for(j=0; j<gameboard.players[j].hands.length; j++){	
		console.log(j);	
		gameboard.players[i].money = gameboard.players[i].money + gameboard.players[i].hands[j].bet;	
		}
	}
}	

Gameboard.prototype.deal = function(startingbet, startingbet2){

	if(gameboard.players.length == 1){
    gameboard.players[0].hands[0].bet = startingbet;


    
    gameboard.players[0].hands[0].calcValue();
    dealer.hand[0].calcValue();
    // player.drawCards();
    gameboard.players[0].hands[0].checkSplit();
    gameboard.players[0].playerphasehit();
	}else if(gameboard.players.length > 1){


	 gameboard.players[0].hands[0].bet = startingbet;


    
     gameboard.players[0].hands[0].calcValue();
    dealer.hand[0].calcValue();
     gameboard.players[0].hands[0].checkSplit();
     gameboard.players[0].playerphasehit();


     gameboard.players[1].hands[0].bet = startingbet2;
     gameboard.players[1].hands[0].calcValue();


    gameboard.drawCards();
    gameboard.showscore();
 	}

}

Gameboard.prototype.showscore = function(){
	if(gameboard.players.length == 1){
		$("#scores2").html("Player 1 is showing: " + gameboard.players[0].hands[gameboard.players[gameboard.playernumber].splitmode].value);
		$("#scores23").hide();
	}else if(gameboard.players.length > 1){
		$("#scores2").html("Player 1 is showing: " + gameboard.players[0].hands[gameboard.players[0].splitmode].value);
		$("#scores23").html("Player 2 is showing: " + gameboard.players[1].hands[gameboard.players[gameboard.playernumber].splitmode].value);

	}
}

Gameboard.prototype.drawRedarrow = function(){
//draw blinking red arrow next to player # with buttons undeer 

//if player is in splidemode, draw arrow in another position with buttons under

gameboard.players[gameboard.playernumber]

								var redarrow = $('<img />',
                                 { id: "redarrow",
                                    src: "images/redarrow.png" ,
                                     class: "redarrowlayout",
                                }).appendTo($(".flex-container"));
                                 $("#redarrow").css({  height: '55px', width: '80px'});

                                function blink() {
                                    $("#redarrow").fadeTo(100, 0.1).fadeTo(200, 1.0);
                                    $("#redarrow").css({top: 450 + 150*gameboard.playernumber, left: 125 + (gameboard.players[gameboard.playernumber].splitmode*230), position:'absolute'});
                                }
 
                                setInterval(function(){blink()}, 420);
                                                          
                                
}

Gameboard.prototype.drawCards = function(){
    $("#wipe-container").empty();
    //player cards

    for(j = 0; j<gameboard.players.length; j++){

    if(gameboard.players[j].hands.length == 1){
        for(i=0; i<gameboard.players[j].hands[0].cards.length; i++){
            var tempcard = $('<img />',
                     { id: "p" + "0" + j + i,
                       src: gameboard.players[j].hands[0].cards[i].img.src, 
                        class: "dcardlayout",
                       
                     }).appendTo($(".wipe-container"));

        $("#"+ "p" + "0" + j + i).css({top: 400 + j*180, left: 7+ i*105, position:'absolute'});
            if(gameboard.players[j].hands[0].cards[i].doubledown == true){
                $("#"+ "p" + "0" + j + i).css({'transform':'rotate(90deg)'});

            }

        }

    	}else if(gameboard.players[j].hands.length > 1){

        for(k=0; k<gameboard.players[j].hands.length;k++){
                for(i=0; i<gameboard.players[j].hands[k].cards.length; i++){
                var tempcard = $('<img />',
                         { id: "ps" + j + k + i,
                           src: gameboard.players[j].hands[k].cards[i].img.src, 
                            class: "dcardlayout",
                           
                         }).appendTo($(".wipe-container"));

                $("#"+ "ps" + j + k + i).css({top: 420 + j*177 + i*25, left: 7+ k*230, position:'absolute'});
                $("#"+ "ps" + j + k + i).height('135px');
                $("#"+ "ps" + j + k + i).width('90px');



                    if(gameboard.players[j].hands[k].cards[i].doubledown == true){
                    $("#"+ "ps" + j + k + i).css({'transform':'rotate(90deg)'});

                    }
                }

            }
                
    	}	

	}


    

            //dealer cards
            if(gameboard.playerphase == true){
            var dcont = $('<div />',
                         { id: "d container", 
                            class: "containerx",               
                         }).appendTo($(".wipe-container"));

                var dcont1 = $('<div />',
                             { id: "flipcard", 
                                class: "cardx",               
                             }).appendTo($(".containerx"));

                var dcont2 = $('<div />',
                             { id: "flipfront", 
                                class: "front",               
                             }).appendTo($(".cardx"));
                			$("#flipfront").css('background-image', 'url("images/back1.png")');	

                var dcont3 = $('<div />',
                             { id: "flipback", 
                                class: "back",               
                             }).appendTo($(".cardx"));


                var dcont4 = $('<img />',
                             { id: "backofcard",
                               src: dealer.hand[0].cards[0].img.src, 
                             }).appendTo($(".back"));
                $("#backofcard").hide();
                $("#backofcard").slideDown(300);
                $(".containerx").css({top: 175, left: 7, position:'absolute'});
                }else{
                        var tempcard = $('<img />',
                                 { id: "d" + "0" + 0,
                                   src: dealer.hand[0].cards[0].img.src, 
                                    class: "dcardlayout",
                                   
                                 }).appendTo($(".wipe-container"));
                        $("#d00").css({top: 175, left: 7, position:'absolute'});             
                }

            for(i=1; i<dealer.hand[0].cards.length; i++){
                        var tempcard = $('<img />',
                                 { id: "d" + "0" + i,
                                   src: dealer.hand[0].cards[i].img.src, 
                                    class: "dcardlayout",
                                   
                                 }).appendTo($(".wipe-container"));

                    $("#"+ "d" + "0" + i).css({top: 175, left: 7+ i*105, position:'absolute'});
                    // $("#"+ "p" + "0" + i).hide();

                    // $("#"+ "p" + "0" + i).delay(200).slideDown(250);


                    }

}


Gameboard.prototype.howMany = function(){

//create player buttons

		var temp = $('<div />',
		             { id: "1p1",
		                class: "splitbutton2",
		             }).appendTo($(".flex-container"));
		$("#1p1").css('background-image', 'url("images/1player1.jpg")');
		$("#1p1").css({top: 300, left: 100, position:'absolute'});
		$("#1p1").css({  height: '58px', width: '200px'});

		$("#1p1").click(function(){
		gameboard.initialize(1);
		$("#1p1").remove();
		$("#1p2").remove();
		});

		var temp = $('<div />',
		             { id: "1p2",
		                class: "splitbutton3",
		               
		             }).appendTo($(".flex-container"));
		$("#1p2").css('background-image', 'url("images/1player2.jpg")');
		$("#1p2").css({top: 400, left: 100, position:'absolute'});
		$("#1p2").css({  height: '58px', width: '200px'});
		$("#1p2").click(function(){
		Gameboard.prototype.addPlayer();
		gameboard.initialize(2);
		$("#1p1").remove();
		$("#1p2").remove();
		});




}


Gameboard.prototype.selectPlayer = function(currentplayer){

        $("#playerselect").remove();

		var temp = $('<div />',
		             { id: "playerselect",
		                class: "playerselect",
		               
		             }).appendTo($(".flex-container"));
		$("#playerselect").parent().css({position: 'relative'});

		$("#playerselect").css({top: (395 + 177*currentplayer), left: 2, position:'absolute'});



		



}



Gameboard.prototype.animateSplit = function(){

                $("#"+ "p" + "0" + "0" + "0").css({position:'absolute'});
                $("#"+ "p" + "0" + "0" + "0").animate({
                        height: '135px',
                        width: '90px'
                    });
                $("#"+ "p" + "0" + "0" + "0").animate({left: '30px'}, "slow");

                $("#"+ "p" + "0" + "0" + "0").animate({top: '480px'}, "slow");


                $("#"+ "p" + "0" + "0" + "1").css({position:'absolute'});
                $("#"+ "p" + "0" + "0" + "1").animate({
                        height: '135px',
                        width: '90px'
                    });
                $("#"+ "p" + "0" + "0" + "1").animate({left: '250px'}, "slow");
                $("#"+ "p" + "0" + "0" + "1").animate({top: '480px'}, "slow");

}

Gameboard.prototype.initialize = function(numberofplayers){

//create 3 add money buttons and return starting bet for hand

		startingbet = 0;

		var temp = $('<div />',
		             { id: "bet25",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#bet25").parent().css({position: 'relative'});
		$("#bet25").html("bet$25");
		$("#bet25").css({top: 650, left: 100, position:'absolute'});
		$("#bet25").click(function(){
		    startingbet = startingbet + 25;
		    player.money = player.money - 25;
		});

		var temp = $('<div />',
		             { id: "bet50",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#bet50").parent().css({position: 'relative'});
		$("#bet50").html("bet$50");
		$("#bet50").css({top: 650, left: 200, position:'absolute'});
		$("#bet50").click(function(){
		    startingbet = startingbet + 50;
		    player.money = player.money - 50;
		});


		var temp = $('<div />',
		             { id: "bet100",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#bet100").parent().css({position: 'relative'});
		$("#bet100").html("bet $100");
		$("#bet100").css({top: 650, left: 300, position:'absolute'});
		$("#bet100").click(function(){
		    startingbet = startingbet + 100;
		    player.money = player.money - 100;


		});

		var temp = $('<div />',
		             { id: "clear",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#clear").parent().css({position: 'relative'});
		$("#clear").html("Clear bet");
		$("#clear").css({top: 650, left: 400, position:'absolute'});
		$("#clear").click(function(){
		    player.money = player.money + startingbet;
		    startingbet = 0;

		});


		var temp = $('<div />',
		             { id: "betamount",
		                class: "betamount",
		               
		             }).appendTo($(".flex-container"));
		$("#betamount").parent().css({position: 'relative'});
		$("#betamount").css({top: 550, left: 145, position:'absolute'});




		var  t5 = setInterval(function() {

		$("#betamount").html("Bet: " + startingbet);
		$("#betamount").css('color', 'red');
		$("#betamount").css({
		    fontSize: 30
		});

		}, 100);



		var monies = $('<div />',
             { id: "monies",
                class: "pscore",
               
        }).appendTo($(".flex-container"));

				
//if 2 players

				if(numberofplayers == 2){
					startingbet2 = 0;
						var monies2 = $('<div />',
				             { id: "monies2",
				                class: "pscore",
				               
				             }).appendTo($(".flex-container"));
						$("#monies2").css({top: 90, left: 550, position:'absolute'});

						var temp = $('<div />',
				             { id: "betamount2",
				                class: "betamount",
				               
				             }).appendTo($(".flex-container"));
						$("#betamount2").parent().css({position: 'relative'});
						$("#betamount2").css({top: 750, left: 145, position:'absolute'});

						var tt = setInterval(function() {

						$("#monies2").html("Player 2: $" + gameboard.players[1].money);
						$("#monies2").css('color', 'red');
						$("#monies2").css({
						    fontSize: 45
						});

						}, 100);



						var  t55 = setInterval(function() {

						$("#betamount2").html("Bet: " + startingbet2);
						$("#betamount2").css('color', 'red');
						$("#betamount2").css({
						    fontSize: 30
						});

						}, 100);


					var temp = $('<div />',
		             { id: "bet252",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
					$("#bet252").parent().css({position: 'relative'});
					$("#bet252").html("bet$25");
					$("#bet252").css({top: 850, left: 100, position:'absolute'});
					$("#bet252").click(function(){
					    startingbet2 = startingbet2 + 25;
					    gameboard.players[1].money.money = gameboard.players[1].money - 25;
					});

					var temp = $('<div />',
					             { id: "bet502",
					                class: "addk",
					               
					             }).appendTo($(".flex-container"));
					$("#bet502").parent().css({position: 'relative'});
					$("#bet502").html("bet$50");
					$("#bet502").css({top: 850, left: 200, position:'absolute'});
					$("#bet502").click(function(){
					    startingbet2 = startingbet2 + 50;
					    gameboard.players[1].money = gameboard.players[1].money - 50;
					});


					var temp = $('<div />',
					             { id: "bet1002",
					                class: "addk",
					               
					             }).appendTo($(".flex-container"));
					$("#bet1002").parent().css({position: 'relative'});
					$("#bet1002").html("bet $100");
					$("#bet1002").css({top: 850, left: 300, position:'absolute'});
					$("#bet1002").click(function(){
					    startingbet2 = startingbet2 + 100;
					    gameboard.players[1].money = gameboard.players[1].money - 100;


					});

					var temp = $('<div />',
		             { id: "clear2",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
					$("#clear2").parent().css({position: 'relative'});
					$("#clear2").html("Clear bet");
					$("#clear2").css({top: 850, left: 400, position:'absolute'});
					$("#clear2").click(function(){
					    gameboard.players[1].money = gameboard.players[1].money + startingbet2;
					    startingbet2 = 0;

					});


				}






		var t = setInterval(function() {

		$("#monies").html("  Player: $" + player.money);
		$("#monies").css('color', 'red');
		$("#monies").css({
		    fontSize: 45
		});

		}, 100);


		

		var t2 = setInterval(function() {

		$("#deckbox").html("# of cards left: " + deck.cardlist.length);
		$("#deckbox").css('color', 'white');
		$("#deckbox").css({
		    fontSize: 25
		});

		}, 100);

		var temp = $('<div />',
		             { id: "riffshuffle",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#riffshuffle").parent().css({position: 'relative'});
		$("#riffshuffle").html("Riff");
		$("#riffshuffle").css({top: 820, left: 670, position:'absolute'});
		$("#riffshuffle").click(function(){
		deck.riffshuffle();    
		});


		var temp = $('<div />',
		             { id: "pileshuffle",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#pileshuffle").parent().css({position: 'relative'});
		$("#pileshuffle").html("Pile");
		$("#pileshuffle").css({top: 820, left: 760, position:'absolute'});
		$("#pileshuffle").click(function(){
		deck.reverseriffshuffle();    
		});

		var temp = $('<div />',
		             { id: "reverseriffshuffle",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#reverseriffshuffle").parent().css({position: 'relative'});
		$("#reverseriffshuffle").html("Reverse Riff");
		$("#reverseriffshuffle").css({top: 820, left: 850, position:'absolute'});
		$("#reverseriffshuffle").click(function(){
		deck.pileshuffle();   
		});


		//deal button that returns starting bet into deal

		var dealbutton = $('<div />',
		             { id: "dealbutton",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#dealbutton").parent().css({position: 'relative'});
		$("#dealbutton").css({top: 450, left: 200, position:'absolute'});
		$("#dealbutton").html("Deal ");
		$("#dealbutton").click(function(){

		    if(numberofplayers == 1){
		        if(startingbet > 1){
		        $(this).hide();
		                gameboard.deal(startingbet);
		            $("#betamount").css({position:'absolute'});
		            $("#betamount").animate({
		                    height: '40px',
		                    width: '120px'
		                });
		            $("#betamount").animate({left: '570px'}, "slow");

		            $("#betamount").animate({top: '95px'}, "slow");
		        $("#bet25").hide( "slow" );;
		        $("#bet50").hide( "slow" );;
		        $("#bet100").hide( "slow" );;
		        $("#clear").hide( "slow" );;
		        $("#dealbutton").hide( "slow" );;
		        gameboard.drawCards();

		        return(false);
		        }
		    }else if((numberofplayers == 2) && (startingbet != 0) && (startingbet2 !=0)){
		    	$(this).hide();
		                gameboard.deal(startingbet, startingbet2);
		            $("#betamount").css({position:'absolute'});
		            $("#betamount").animate({
		                    height: '40px',
		                    width: '120px'
		                });
		            $("#betamount").animate({left: '570px'}, "slow");

		            $("#betamount").animate({top: '155px'}, "slow");
		            $("#betamount2").css({position:'absolute'});
		            $("#betamount2").animate({
		                    height: '40px',
		                    width: '120px'
		                });
		            $("#betamount2").animate({left: '570px'}, "slow");

		            $("#betamount2").animate({top: '205px'}, "slow");

		        $("#bet25").hide( "slow" );;
		        $("#bet50").hide( "slow" );;
		        $("#bet100").hide( "slow" );;
		        $("#clear").hide( "slow" );;
		        $("#bet252").hide( "slow" );;
		        $("#bet502").hide( "slow" );;
		        $("#bet1002").hide( "slow" );;
		        $("#clear2").hide( "slow" );;
		        $("#dealbutton").hide( "slow" );;
		        // $("#scores23").html("Player is showing: " + gameboard.players[1].hands[0].value);
		        gameboard.drawCards();
		        gameboard.selectPlayer(0);
		        return(false);
		        
		    }	

		});



		var adad = $('<div />',
		             { id: "adad",
		                class: "addk",
		               
		             }).appendTo($(".flex-container"));
		$("#adad").parent().css({position: 'relative'});
		$("#adad").html("Add Deck");
		$("#adad").click(function(){
		    deck.addingdeck();
		});




		var mdmd = $('<div />',
		             { id: "mdmd",
		                class: "mindk",
		               
		             }).appendTo($(".flex-container"));
		$("#mdmd").parent().css({position: 'relative'});
		$("#mdmd").html("Minus Deck");
		$("#mdmd").click(function(){
		    deck.minusdeck();
		});







		var deckbox3 = $('<div />',
             { id: "deckbox3",
                class: "deckbox3",
               
             }).appendTo($(".flex-container"));


		var messagebox = $('<div />',
		             { id: "messagebox",
		                class: "pscore",
		               
		             }).appendTo($(".flex-container"));
		$("#messagebox").css({top: 550, left: 724, position:'absolute'});
		$("#messagebox").css({  height: '40px', width: '195px'});

        $("#deckbox3").html("Shuffles:");
        $("#deckbox3").css('color', 'white');
        $("#deckbox3").css({
            fontSize: 25
        });



		var scores2 = $('<div />',
             { id: "scores2",
                class: "pscore3",               
             }).appendTo($(".flex-container"));


	    $("#scores2").css('color', 'white');
	    $("#scores2").css({
	    fontSize: 25
	    });

	    var scores23 = $('<div />',
             { id: "scores23",
                class: "pscore3",               
             }).appendTo($(".flex-container"));

		$("#scores23").css({top: 120, left: 32, position:'absolute'});   
	    $("#scores23").css('color', 'white');
	    $("#scores23").css({
	    fontSize: 25
	    });


	    var scores = $('<div />',
             { id: "scores",
                class: "pscore2",               
             }).appendTo($(".flex-container"));


	var deckbox = $('<div />',
             { id: "deckbox",
                class: "deckbox",
               
             }).appendTo($(".flex-container"));

	var deckbox2 = $('<div />',
             { id: "deckbox2",
                class: "deckbox2",
               
             }).appendTo($(".flex-container"));








    $("#scores").css('color', 'white');
    $("#scores").css({
    fontSize: 25
    });


	    

		var hitButton = $('<div />',
		             { id: "hitButton",
		                class: "hitButton",
		               
		             }).appendTo($(".flex-container"));
					$("#hitButton").css('background-image', 'url("images/hit.png")');
		            $("#hitButton").css({top: 600, left: 724, position:'absolute'});
		            $("#hitButton").click(function(){
		            	$("#splitbutton").hide();
		            	$("#doubledown").hide();
		                gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].recieveCard(deck);
		                gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].calcValue();
		                gameboard.players[gameboard.playernumber].playerphasehit();
		                gameboard.drawCards();
		                gameboard.showscore();

		                
		                
		                
		              
		            });
		            $("#hitButton").hide();


		var standButton = $('<div />',
		             { id: "standButton",
		                class: "standButton",
		               
		             }).appendTo($(".flex-container"));
					$("#standButton").css('background-image', 'url("images/stand1.png")');
		            $("#standButton").css({top: 600, left: 784, position:'absolute'});
		            $("#standButton").click(function(){
		            	$("#splitbutton").hide();
		            	$("#doubledown").hide();
		if(((gameboard.players[gameboard.playernumber].splitmode == gameboard.players[gameboard.playernumber].hands.length-1) && (gameboard.players.length == 1)) || ((gameboard.players.length-1 == gameboard.playernumber) && (gameboard.players[gameboard.playernumber].splitmode == gameboard.players[gameboard.playernumber].hands.length-1))){
				            gameboard.playerphase = false;
				            $('.cardx').toggleClass('flipped');  				
				            dealer.hand[0].calcValue();

				            dealer.dealerphasehit();

				            gameboard.showscore();
				            $("#doubledown").hide();
        }else if((gameboard.players.length > 1) && (gameboard.playernumber < gameboard.players.length-1) && (gameboard.players[gameboard.playernumber].splitmode == gameboard.players[gameboard.playernumber].hands.length-1)){
        					gameboard.selectPlayer(1);
        					gameboard.playernumber++;
        					gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].calcValue();
        					$("#doubledown").show();
        					console.log("woooorks");
        					gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].checkSplit();
        					gameboard.showscore();
        					gameboard.players[gameboard.playernumber].playerphasehit();
				            $("#redarrow").remove(); 
				            }else{ 
				            	gameboard.players[gameboard.playernumber].splitmode++;
				            	console.log(player.splitmode);
					            gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].checkSplit(); 
					            gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].calcValue();
					            gameboard.showscore();
					            $("#doubledown").show();
					            gameboard.players[gameboard.playernumber].playerphasehit();

					                  					               
				            }

		            });

		            $("#standButton").hide();
		            

		var rebetButton = $('<div />',
		             { id: "rebetButton",
		                class: "rebetButton",
		               
		             }).appendTo($(".flex-container"));
					$("#rebetButton").css('background-image', 'url("images/rebet.jpg")');
		            $("#rebetButton").css({top: 650, left: 744, position:'absolute'});
		            $("#rebetButton").click(function(){
		            
		            

		            	//deduct money
		            	if(gameboard.players.length == 1){
		                gameboard.players[0].money = gameboard.players[0].money - startingbet;
		            	}else if(gameboard.players.length > 1){
		            	gameboard.players[0].money = gameboard.players[0].money - startingbet;
		        		gameboard.players[1].money = gameboard.players[1].money - startingbet2;	
		        		}
		            
		            //wipe everything
		            $("#wipe-container").empty();
		            for(i=0; i<gameboard.players.length; i++){
		            gameboard.players[i].hands = [];
		            gameboard.players[i].splitmode = 0;			        
		            console.log(i);

		           
		            if(gameboard.players.length > 1){
		            gameboard.playernumber = 0;
		            gameboard.selectPlayer(0);		            
		        	}		         
		            
		             //new hands
		            gameboard.playerphase = true;
		            	hand = new Hand();
							gameboard.players[i].hands.push(hand);
						    gameboard.players[i].hands[0].recieveCard(deck);
						    gameboard.players[i].hands[0].recieveCard(deck);
		            }

		            
		            //new dealer set up
		           	   dealer.hand = [];
		            $("#rebetButton").hide(); 
						
						hand = new Hand();
						dealer.hand.push(hand);
					    dealer.hand[0].recieveCard(deck);
					    dealer.hand[0].recieveCard(deck);

					//deal bet amount for new hand  + draw
		            
					if(gameboard.players.length == 1){
		                gameboard.deal(startingbet) 
		            	}else if(gameboard.players.length > 1){
		            	gameboard.deal(startingbet, startingbet2); 
		        		}
		            
		            gameboard.drawCards();         




		            $("#redarrow").remove(); 
		            $("#scores2").show();
		            function Once(){
		            $('.cardx').toggleClass('flipped');
		    
		            Once = undefined;
		            }
		            dealer.dealt = 0;
		            });
					
		            $("#rebetButton").hide();

		var doubledown = $('<div />',
		             { id: "doubledown",
		                class: "doubledown",
		               
		             }).appendTo($(".flex-container"));
					$("#doubledown").css('background-image', 'url("images/doubledown.png")');
		            $("#doubledown").css({bottom: 15, left: 222, position:'absolute'});
		            
		            $(document).ready(function() {
		            $("#doubledown").click(function(){

		            if(((gameboard.players[gameboard.playernumber].hands.length-1) == gameboard.players[gameboard.playernumber].splitmode) && ( gameboard.players.length > 1) && (gameboard.playernumber < (gameboard.players.length-1))){	
		            gameboard.players[gameboard.playernumber].doubledown(deck);
		            gameboard.playernumber++;    
                	gameboard.selectPlayer(gameboard.playernumber);      
                	gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].checkSplit(); 	
                	$("#redarrow").remove(); 
		            gameboard.drawCards();
		            gameboard.showscore();
		            }else if(gameboard.players[gameboard.playernumber].splitmode == gameboard.players[gameboard.playernumber].hands.length-1){

		           	 

		            
		            console.log("this should execute");
		            gameboard.players[gameboard.playernumber].doubledown(deck);
		            gameboard.drawCards();
		            gameboard.showscore();
		            $("#doubledown").hide();
		                if(gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].value > 21){   
		                	$('.cardx').toggleClass('flipped'); 
		                        $("#messagebox").html("Player Busts!");
		                        $("#messagebox").css('color', 'white');
		                        $("#messagebox").css({fontSize: 25});
		                        gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].bet = 0;
		                        $("#hitButton").hide();
		                        $("#standButton").hide();
		                        $("#rebetButton").show();

		                        return;
		                }
		                   
		                $('.cardx').toggleClass('flipped'); 
		                dealer.dealerphasehit(player);         
		                return;

		            }else{

		            gameboard.players[gameboard.playernumber].doubledown(deck);
		            gameboard.drawCards();
		            gameboard.showscore();
		            gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].calcValue();

		        	}
		            });
		            });
		            $("#doubledown").hide();

		var splitbutton = $('<div />',
		             { id: "splitbutton",
		                class: "splitbutton",
		               
		             }).appendTo($(".flex-container"));
					$("#splitbutton").css('background-image', 'url("images/splitbutton.png")');
		            $("#splitbutton").css({bottom: 15, left: 322, position:'absolute'});

		            $("#splitbutton").click(function(){
		            gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].split(deck);
		            gameboard.players[gameboard.playernumber].hands.push(newhand);
		            gameboard.drawCards();
		            gameboard.drawRedarrow();
		            gameboard.players[gameboard.playernumber].money = gameboard.players[gameboard.playernumber].money - gameboard.players[gameboard.playernumber].hands[0].bet;	
		                        


		            $("#splitbutton").hide();

				            if((gameboard.players[gameboard.playernumber].hands[player.splitmode].cards[0].cardname == "Ace ") && (gameboard.players[gameboard.playernumber].hands[player.splitmode].cards[1].cardname != "Ace ")){
						    player.hands[player.splitmode].cards[0].value = 11;
						    }

		            gameboard.players[gameboard.playernumber].hands[player.splitmode].calcValue();
		            gameboard.players[gameboard.playernumber].hands[player.splitmode].checkSplit();
		            });
		            $("#splitbutton").hide();





}



	