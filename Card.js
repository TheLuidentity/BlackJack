var Card = function(cardname, suit, value) {		
    this.cardname = cardname;
    this.suit = suit;
    this.value = value;
    this.doubledown = false;
    this.img = document.createElement('img'); 
	this.img.src = "images/"+cardname+suit+".png";
 
}


