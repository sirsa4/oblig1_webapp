// TODO: Bruk ge(tElementById til å hente HTML-elementene med #id
const main = document.querySelector("#main");
const sortPtag = document.getElementById("desc");
const guessUl = document.getElementById("guess");
const numbersUL = document.getElementById("numbers");

// TODO: Bruk querySelector til å hente knappen
const btn = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbersList = [5, 1, 2, 4];
//tempList is used to render back old numbers when user fails to sort numbers correctly
const tempList = [];
// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
const printNumbers = (numList,random) => {
  //flag to control if li-tags will have random number or static ones
  const rand = random;
  const list = numList.map((num) => {
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    let li = document.createElement("li");
    /*
    if there is a need to generate new numbers, which is when user managed to guess correctly, then generate new numbers and add/push the numbers tempList array. TempList array is used when user failed to guess correctly. This way old list can be generated again and again untill user manages to guess correctly
    */
    rand? li.innerHTML = randomNumber : li.innerHTML = num;
    rand? tempList.push(randomNumber) : tempList;
    numbersUL.append(li);
  });
  //console.log(random);
};
printNumbers(numbersList,true);

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
const inputFunction = () => {
  const input = document.createElement("input");
  input.type = "text";
  main.append(input);
};
inputFunction();
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
const userInput = document.querySelector("input");
const lis = document.querySelectorAll("#numbers li");

//turning array items to Number data type was difficult since by default Array.from() returns string data. 
//with chatGPT, i learned adding a 2nd argument(data type) to from() method in Array class solved the issue.
//i wanted array items from both userinput array and sortedArray to be Number datatype to be sure there was no bug in the comparrison
const getUserInput = () => {
  return Array.from(userInput.value, Number);
};

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig eav bruker
const handleSort = () => {
  let userInputList = getUserInput();

  const getUnsortedNumbers = Array.from(lis).map((num) =>
    parseInt(num.innerHTML)
  );
  //sorted array with sort(). we learned this in class in liveoppgaver: oppgave 1.1
  let sortedNumbers = getUnsortedNumbers.sort((a, b) => a - b);
  sortedNumbers.forEach((num, index) => {
    /* console.log(sortedNumbers.indexOf(num), " - ", userInputList.indexOf(num));
     */
    //condition to check if user input and numbers numbersUL are same order.
    //there is a bug that this works correct only once.
    //from 2nd around, duplicates make sure first answer is always correct.
    if (sortedNumbers.indexOf(num) === userInputList.indexOf(num)) {
      numbersUL.innerHTML = " ";
     // numbersUL.innerHTML = `Very nice! you guess correctly: ${sortedNumbers} `;
      printNumbers(sortedNumbers,true);

     console.log(sortedNumbers);
      //tempList.push();
      
    } else {
      numbersUL.innerHTML = `Wroooong. Try again. Your numbers: [${userInputList}] are not same as are not correct!`;

      setTimeout(() => {
        numbersUL.innerHTML = " ";
        printNumbers(tempList,false);
      }, 3000);
    }
  });
  sortedNumbers = "";
  userInputList = "";
};
// TODO: Lag en funksjon som "lager UI" -- Ikke helt nødvendig, men praktisk å ha

// TODO: Lytt til 'click'-event og trigg funksjonen som sjekker om man har gjort riktig ved klikk
//
btn.addEventListener("click", handleSort);
