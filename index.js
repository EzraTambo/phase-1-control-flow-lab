function scuberGreetingForFeet(string){
  // Write your code here!
 if (string<= '400' )
    return 'This one is on me!';

 

  else if (string > 2000 && string <= 2500) 
    return 'I will gladly take your thirty bucks.';
  if (string >2500)
    return 'No can do.';
}

function ternaryCheckCity(city){
  // Write your code here!
  
  if (city !== 'NYC') 
     return 'No go.';
   else  return 'Ok, sounds good.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
    }
}