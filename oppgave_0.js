// Oppgave 1
//get relevant html elements first
const removeText = document.querySelector("#remove");
const removeBtn = document.querySelector("#remove-btn");

//function that removes the text
const removeFunction = ()=>{
    removeText.innerHTML = "";
}

//event listener which triggers when remove button is clicked on
removeBtn.addEventListener("click",removeFunction); 

// Oppgave 2
//Here we also get relevant html elements we need to manipulate
const changeText = document.querySelector("#change");
const changeBtn = document.querySelector("#change-btn");

//function which handles changing of text
const changeTextFunction = ()=>{
    changeText.textContent = "Text is now changed to something else";
} 

//event listener which triggers when change button is clicked on and runs the changeTextFunction which in end changes the text
changeBtn.addEventListener("click",changeTextFunction);

// Oppgave 3
//Here we are also getting the releveant html elements first.
const textInput = document.querySelector("#input");
const textParagraph = document.querySelector("#input-text");

//function which handles getting text from user input
const HandleInput = (e)=>{
    //console.log(e.target.value);
    textParagraph.innerHTML = e.target.value;
}

//event listner which gets user input from keyboard
textInput.addEventListener("keypress",HandleInput);
// Oppgave 4
const myList = ["item one", "item two", "item three"];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
