var Hand = function(betamount){

    this.acecounter = false;
    this.cards = [];
    this.value = 0;
    this.bet = betamount;

}

Hand.prototype.calcValue = function(){
    this.value = 0;
    for(i=0; i<this.cards.length; i++){
        this.value = this.value + this.cards[i].value;
    }


    if(this.value>21){

        for(j=0; j<this.cards.length; j++){
        if(this.cards[j].cardname == "Ace "){
            this.acecounter = true;
            this.cards[j].value = 1;
                this.value = 0; 
                for(k=0; k<this.cards.length; k++){
                this.value = this.value + this.cards[k].value;
                }

                    if(gameboard.playerphase != true){
                    $("#scores").html("Dealer has: " + dealer.hand[0].value);    
                    }else{
                    $("#scores").html("Dealer is showing: " + dealer.hand[0].cards[1].value);
                    }
                    $("#scores2").html("Player is showing: " + player.hands[0].value);
                        if(this.value>21){
                        continue;    
                        }else{
                        return;    
                        } 
            }
        }
                    // if((this.cards.length == 2) && (this.cards[0].cardname == "Ace ") && (this.cards[1].cardname == "Ace ")){
                    // this.cards[0].value = 1;
                    // this.cards[1].value = 11;
                    // }

            this.value = 0; 
            for(k=0; k<this.cards.length; k++){
            this.value = this.value + this.cards[k].value;
            }


    }



        if(gameboard.playerphase == false){
        $("#scores").html("Dealer has: " + dealer.hand[0].value);    
        }else{
        $("#scores").html("Dealer is showing: " + dealer.hand[0].cards[1].value);
        }
            $("#scores2").html("Player is showing: " + player.hands[0].value);
          
}

Hand.prototype.recieveCard = function(deck){


    this.cards.push(deck.cardlist[0]);
    deck.cardlist.splice(0, 1)[0];


}    



Hand.prototype.checkSplit = function(){
    if(this.cards[0].value == this.cards[1].value || ((this.cards[0].cardname == "Ace ") && (this.cards[1].cardname == "Ace "))){

            console.log("do you want to split?");
            console.log(this.cards.length);
            $("#splitbutton").hide();
            $("#splitbutton").show();
            $("#messagebox").html("Split?");
            $("#messagebox").css('color', 'white');
            $("#messagebox").css({fontSize: 25});
        }
}

Hand.prototype.split = function(deck){

    if((this.cards[0].cardname == "Ace ") && (this.cards[1].cardname == "Ace ")){
    this.cards[0].value = 11;
    this.cards[1].value = 11;    
    }

    if(gameboard.players.length == 1){
     
    }

newhand = new Hand;



    newhand.cards.push(this.cards[1]);
    this.cards.splice(1, 1)[0];
    newhand.cards.push(deck.cardlist[0]);
    deck.cardlist.splice(0, 1)[0];


    this.cards.push(deck.cardlist[0]);
    deck.cardlist.splice(0, 1)[0];

    newhand.bet = this.bet;
    player.money = player.money - this.bet;

    if((this.cards[0].cardname == "Ace ") && (this.cards[1].cardname != "Ace ")){
    this.cards[0].value = 11;
    }


    return newhand;
}


