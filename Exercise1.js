var card1 ;
var card2 ;
var card3 ;

card1 = prompt("Enter the 1st card...");
card2 = prompt("Enter the 2nd card...");
card3 = prompt("Enter the 3rd card...");

var card1Int = parseInt(card1);
var card2Int = parseInt(card2);
var card3Int = parseInt(card3);

var cardTotal = ( card1Int + card2Int + card3Int);

if (cardTotal == 21 )
{
    alert("BLACKJACK!");
}
else if (cardTotal > 21)
{
    alert("BUST!")
}
else if (cardTotal < 21)
{
    alert("The total number of cards is " + cardTotal);
}