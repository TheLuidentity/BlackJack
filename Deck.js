
var Deck = function() {
    this.cardname = ["Ace ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "jack ", "queen ", "king "];
    this.suit = ["spades ", "hearts ", "clubs ", "diamonds "];
    this.value = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    this.cardlist = [];

    
}


Deck.prototype.initializeDeck = function(){
var i, k;
    this.cardlist.length = 0;
    for (i = 0; i < this.cardname.length; i++) {
        for (k = 0; k < this.suit.length; k++) {
            this.cardlist.push(new Card(this.cardname[i], this.suit[k], this.value[i]));
        }
    }
return this.cardlist;    
}


Deck.prototype.addingdeck = function(){
    var tempdeck = new Deck();  
    tempdeck.initializeDeck();
    this.cardlist = this.cardlist.concat(tempdeck.cardlist);
    this.shuffleDeck(this.cardlist);
}


Deck.prototype.minusdeck = function(){
    if(this.cardlist.length > 52){
    var temp = this.cardlist.splice(0, 52);
    }else{
        console.log("YOU CANT!");
    }
}

Deck.prototype.shuffleDeck = function() {
    var i = this.cardlist.length,
        j = 0,
        temp,
        length = this.cardlist.length;
 
    while (i--) {
        j = Math.floor(Math.random() * length);
        temp = this.cardlist[i];
        this.cardlist[i] = this.cardlist[j];
        this.cardlist[j] = temp;
    }
}

Deck.prototype.riffshuffle = function() {

halfdeck = this.cardlist.splice(0, Math.floor(this.cardlist.length / 2));

for(i=0; i<halfdeck.length; i++){
this.cardlist.splice((i*2), 0, halfdeck[i]);

    }
    }

Deck.prototype.reverseriffshuffle = function() {

halfdeck = this.cardlist.splice(0, Math.floor(this.cardlist.length / 2));
halfdeck.reverse();
for(i=0; i<halfdeck.length; i++){
this.cardlist.splice((i*2), 0, halfdeck[i]);

    }
    }

Deck.prototype.pileshuffle = function() {

var removed = this.cardlist.splice(this.cardlist.length/2);
var removed2 = this.cardlist.splice(this.cardlist.length/2);
var removed3 = removed.splice(removed.length/2);

this.cardlist = this.cardlist.concat(removed3); 
this.cardlist = this.cardlist.concat(removed2);    
this.cardlist = this.cardlist.concat(removed);       
    }


