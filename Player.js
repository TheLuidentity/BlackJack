var Player = function(){
    this.hands = [];
    this.money = 1000;
    this.splitmode = 0;

}

    
Player.prototype.createHand = function(betAmount){
    var hand = new Hand();
    hand.bet = betAmount;
    this.hands.push(hand);

};




Player.prototype.playerphasehit = function(){
    
   

//value of cards    

    if((this.hands[this.splitmode].value > 21)){ 
      //go to next hand
        this.hands[this.splitmode].bet = 0;




                if((this.splitmode == gameboard.players[gameboard.playernumber].hands.length-1) && (gameboard.players.length == 1)) {
                    //end split mode and go back to normal
                    $("#messagebox").html("Player Busts!");
                    $("#messagebox").css('color', 'white');
                    $("#messagebox").css({fontSize: 25});
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").show();
                            $("#splitbutton").hide();
                            $("#splithitButton").hide();

                            $('.cardx').toggleClass('flipped') 
                            return;
                }else if((this.splitmode == gameboard.players[gameboard.playernumber].hands.length-1) && (gameboard.players.length > 1) && (gameboard.playernumber == gameboard.players.length-1)){  
                    if(gameboard.playernumber == gameboard.players.length-1){
                            gameboard.playerphase = false;
                            $('.cardx').toggleClass('flipped');                 
                            dealer.hand[0].calcValue();
                            console.log("its the equation");
                            for(i=0; i<gameboard.players.length; i++){
                                for(j=0; j<gameboard.players[i].hands.length; j++){
                                    if(gameboard.players[i].hands[j].value <= 21){
                                    console.log("dealer should still hit");    
                                    dealer.dealerphasehit();
                                    return;
                                    }
                                }
                            }
                            
                            $("#splitbutton").hide();
                            $("#doubledown").hide();
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").show();
                            gameboard.showscore();
                            return;    
                    }     
                      //go back to normal
                    $("#messagebox").html("Player Busts!");
                    $("#messagebox").css('color', 'white');
                    $("#messagebox").css({fontSize: 25});
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").show();
                            $("#splitbutton").hide();
                            $("#splithitButton").hide();
                            gameboard.showscore();

                            $('.cardx').toggleClass('flipped') 
                            return;

                }else if((this.splitmode == gameboard.players[gameboard.playernumber].hands.length-1) && (gameboard.players.length > 1)){ 
                $("#redarrow").remove();                         
                gameboard.playernumber++;
                gameboard.selectPlayer(gameboard.playernumber);
                gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].calcValue();
                gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].checkSplit(); 
                gameboard.players[gameboard.playernumber].playerphasehit();
                gameboard.showscore();
                    
                

                }    

        //go to next split hand
        if(this.hands.length > 1){
            this.splitmode++;
            this.hands[this.splitmode].checkSplit(); 
            gameboard.showscore();
      


        }            
    }

    if((this.hands[this.splitmode].value == 21) && (dealer.hand[0].value == 21)){
 //go to next hand

        this.hands[this.splitmode].bet = 0;



                if(this.splitmode == this.hands.length-1){
                    //end split mode and go back to normal
                    $("#messagebox").html("DOUBLE BLACKJACK!");
                    $("#messagebox").css('color', 'white');
                    $("#messagebox").css({fontSize: 25});
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").show();
                            $("#splitbutton").hide();
                            gameboard.showscore();
                            ('.cardx').toggleClass('flipped');
                            return;
                 }        


        //go to next split hand
        if(this.hands.length > 1){
        this.splitmode++;
        this.hands[this.splitmode].checkSplit();  
        gameboard.showscore();
        
        }
    }

    if((this.hands[this.splitmode].value == 21) && (dealer.hand[0].value != 21)){
    //go to next hand


        this.hands[this.splitmode].bet = 0;


                    if((this.splitmode == this.hands.length-1) && (gameboard.players.length > 1) && (gameboard.playernumber == gameboard.players.length-1)){  
                    if(gameboard.playernumber == gameboard.players.length-1){
                            gameboard.playerphase = false;
                            $('.cardx').toggleClass('flipped');                 
                            dealer.hand[0].calcValue();

                            dealer.dealerphasehit();

                            $("#splitbutton").hide();
                            $("#doubledown").hide();
                            return;    
                    }
                    }


                if((this.splitmode == this.hands.length-1) && (gameboard.players.length > 1)){         
                gameboard.playernumber++;
                $("#redarrow").remove();    
                gameboard.selectPlayer(gameboard.playernumber);
                console.log("selectplayer should work");    
                gameboard.selectPlayer(1);  
                gameboard.drawCards();
                gameboard.players[gameboard.playernumber].hands[gameboard.players[gameboard.playernumber].splitmode].checkSplit(); 
                gameboard.players[gameboard.playernumber].playerphasehit(); 
                gameboard.showscore();
                return;
                }    


                if((this.splitmode == this.hands.length-1) && (this.hands[this.splitmode].cards.length == 2)){
                    //end split mode and go back to normal
                            $("#messagebox").html("Player has 21!");
                            $("#messagebox").css('color', 'white');
                            $("#messagebox").css({fontSize: 25});
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").show();
                            $("#splitbutton").hide();
                                console.log("test1");
                            gameboard.showscore();
                            $('.cardx').toggleClass('flipped')
                            return;
                 }        

                 if((this.splitmode == this.hands.length-1) && (this.hands[this.splitmode].cards.length > 2)){
                            $("#messagebox").html("Player has 21!");
                            $("#messagebox").css('color', 'white');
                            $("#messagebox").css({fontSize: 25});
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#splitbutton").hide();
                            console.log("test12");
                            gameboard.showscore();
                            $('.cardx').toggleClass('flipped');     
                            dealer.dealerphasehit();
                            return;
                 }


        //go to next split hand
        if(this.hands.length > 1){
            this.splitmode++;
            this.hands[this.splitmode].checkSplit();  
            gameboard.showscore(); 
                // this.playerphaseSplithit(handnum);

             
        }            
    }

    if((this.hands[this.splitmode].value != 21) && (dealer.hand[0].value == 21)){
        //go to next hand


                if(this.splitmode == this.hands.length-1){
                    //end split mode and go back to normal
                            $('.cardx').toggleClass('flipped');
                            $("#messagebox").html("Dealer BLACKJACK!");
                            $("#messagebox").css('color', 'white');
                            $("#messagebox").css({fontSize: 25});
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").show();
                            $("#splitbutton").hide();
                            console.log("should flip"); 
                            
                            return;
                          
                 }        


        //go to next split hand
        if(this.hands.length > 1){
            this.splitmode++;
            this.hands[this.splitmode].checkSplit(); 

       
        }                
    }

    if((this.hands[this.splitmode].value < 21) && (dealer.hand[0].value != 21)){ 
 //go to next hand

        $("#hitButton").show();
        $("#standButton").show();
        $("#rebetButton").hide();
        $("#doubledown").show();  
                    $("#messagebox").html("  ");
                    $("#messagebox").css('color', 'white');
                    $("#messagebox").css({fontSize: 25});



        }
}       


Player.prototype.doubledown = function(deck){


    //deck[0].doubledown = true;
    this.hands[this.splitmode].recieveCard(deck);
    this.hands[this.splitmode].cards[2].doubledown = true;
    this.hands[this.splitmode].calcValue();
    this.money = this.money - this.hands[this.splitmode].bet;
    this.hands[this.splitmode].bet = (this.hands[this.splitmode].bet * 2)

            if(this.splitmode == this.hands.length-1){
                    //end split mode and go back to normal
                            $("#messagebox").html("Double down!");
                            $("#messagebox").css('color', 'white');
                            $("#messagebox").css({fontSize: 25});
                            gameboard.showscore();

                            if((gameboard.players.length > 1) && (gameboard.playernumber == (gameboard.players.length-1))){
                            $("#hitButton").hide();
                            $("#standButton").hide();
                            $("#rebetButton").hide();
                            $("#splitbutton").hide();
                            gameboard.showscore();    
                            return;    

                            }

                            
                          
                 }        


    if(this.hands.length > 1){
            this.splitmode++; 
    }    

//dealer phase starts

}

Player.prototype.hit = function(deck){
    this.hands[this.splitmode].recieveCard(deck);
    this.hands[this.splitmode].calcValue();  
}


    








