

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  //source for split: https://fullstækk.no/courses/intro-javascript/07-javascript-dom-demo
  const words = text.split(" ");
  //console.log(words);

  // TODO: Velg første ord så du har noe å sammenlikne med
  //This stores the first world from the array. 
  //This will be compared to next word in array
  //if next word is longer, then this variable will store the longest word instead and keep doing this untill end of array
  let firstWord = words[0];
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  //loop is running up length - 1. This is avoid undefined error which i was getting on return
  for (let i = 0; i < words.length - 1; i++) {

  /*
  We are compared firstWord to the next word in the array.
  if next word has lower length than the one before, then firstWord becomes the next word which has bigger length.
  Loop is running only once, so word with biggest length will stay being firstWord untill untill the end.
  */       
  if(firstWord.length < words[i + 1].length){
    firstWord = words[i + 1]; 
    

    }
    
    
  }
  return firstWord;
};

console.log(longestWord());
