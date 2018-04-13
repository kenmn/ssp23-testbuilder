/*detectNetwork*/
/*
 Given a credit card number, this function should return a string with the 
 name of a network, like 'MasterCard' or 'American Express'
 Example: detectNetwork('343456789012345') should return 'American Express'

 How can you tell one card network from another? Easy! 
 There are two indicators:
   1. The first few numbers (called the prefix)
   2. The number of digits in the number (called the length)
*/
/*
 Note: `cardNumber` will always be a string
  1.The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  2.The American Express network always starts with a 34 or 37 and is 15 digits long
  3.The Visa network always starts with a 4 and  is 13/16/19 digits long
  4.The MasterCard network always starts with a 51/52/53/54/55 and is 16 digits long
  5.The Discover network always starts with a 6011 and is 16/19 digits long
  6.The Maestro network always starts with a 5018/5020/5038/6304 and is 12 to 19 digits long
  7.The China UnionPay always starts with a 624-626/6282-6288/622126-622925 and is 16 to 19 digits long
  8.The Switch always starts with a 4903/4905/4911/4936/6333/6759/564182/633110 and is 16/18/19 digits long
*/


var detectNetwork = function(cardNumber) {
  //1.Diner's Club
  if ((cardNumber.substring(0, 2) === '38' || cardNumber.substring(0, 2) === '39') && cardNumber.length === 14){
  	return 'Diner\'s Club';
  }
  
  //2.American Express
  if ((cardNumber.substring(0, 2) === '34' || cardNumber.substring(0, 2) === '37') && cardNumber.length === 15){
    return 'American Express';
  }
  
  //8.Switch
  if ((cardNumber.substring(0, 4) === '4903' || cardNumber.substring(0, 4) === '4905' || cardNumber.substring(0, 4) === '4911' 
  	|| cardNumber.substring(0, 4) === '4936' || cardNumber.substring(0, 4) === '6333' || cardNumber.substring(0, 4) === '6759' 
  	|| cardNumber.substring(0, 6) === '564182' || cardNumber.substring(0, 6) === '633110') && (cardNumber.length === 16 
  	|| cardNumber.length === 18 || cardNumber.length === 19)) {
  		return 'Switch';
  	}

  //3.Visa
  if ((cardNumber.substring(0, 1) === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 )){
    return 'Visa';
  }
  
  //4.MasterCard
  if ((parseInt(cardNumber.substring(0, 2)) >= 51 && parseInt(cardNumber.substring(0, 2)) <= 55 ) && cardNumber.length === 16){
  	return 'MasterCard';
  }

  //5.Discover
  if ((cardNumber.substring(0, 4) === '6011' || (parseInt(cardNumber.substring(0, 3)) >= 644 && parseInt(cardNumber.substring(0, 3)) <= 649) 
  	|| cardNumber.substring(0, 2) === "65") && (cardNumber.length === 16 || cardNumber.length === 19)){
  	return 'Discover';
  }
  
  //6.Maestro
  if ((cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' || cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304') 
  	&& (cardNumber.length >= 12 && cardNumber.length <= 19)){
  	return 'Maestro';
  }

  //7.China UnionPay
  if (((parseInt(cardNumber.substring(0, 6)) >= 622126 && parseInt(cardNumber.substring(0, 6)) <= 622925) || 
  	(parseInt(cardNumber.substring(0, 3)) >= 624 && parseInt(cardNumber.substring(0, 3)) <= 626) || 
  	(parseInt(cardNumber.substring(0, 4)) >= 6282 && parseInt(cardNumber.substring(0, 4)) <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)){
  	return 'China UnionPay';
  }
  

  return 'No card network found!';
};

console.log(detectNetwork('38345678901234'));
//console.log(detectNetwork('39345678901234'));
//console.log(detectNetwork('343456789012345'));
//console.log(detectNetwork('373456789012345'));

//detectNetwork('38345678901234')
//detectNetwork('39345678901234')
//detectNetwork('343456789012345')
//detectNetwork('373456789012345')


