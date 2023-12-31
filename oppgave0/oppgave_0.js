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

//first we the releveant html elements that need to be used
const ul = document.querySelector("#ul");
const listBtn = document.querySelector("#write-list");

//function which handles writing list as li-elment in ul-elment in html. This can be done different ways. Here is two examples.

//This function creates html string from looping the myList with map() and then using innerHTML attribute on ul-element. This way li-list is inserted as html dynamically with click.
const handleWritingList = (e)=>{
    const liList = myList.map(list=>{
        return `<li>${list} </li>`;
    });

    ul.innerHTML = liList;
}

//In this function we map through myList array, create li-element inside the map in each iteration and append it the ul-element. Issue is here that there would be duplicate li-elements created each time button is clicked. This behaviour can be stopped running removeEventListiner() on listBtn after map() though.
const handleWriteTwo = ()=>{

myList.map(list=>{

    let li = document.createElement("li");
    li.innerHTML = list;

    ul.appendChild(li); 
    

})

//remove eventlistener from listBtn to avoid creating duplicates with each click. Event stops working after first click
listBtn.removeEventListener("click",handleWriteTwo);

}

//click event which triggers when button is clicked to write the list
listBtn.addEventListener("click",handleWriteTwo);

// Oppgave 5
//First we are the relevant html-elements
const select = document.querySelector("#select");
const selectInput = document.querySelector("#text");
const selectBtn = document.querySelector("#create");
const placeholder = document.querySelector("#placeholder");

//function which handles creating a element from select options and appending the created to div with id "placeholder".
const handleCreateElement = () =>{
    //console.log(select.value);

    
    let element = document.createElement(select.value);

    element.innerHTML = selectInput.value;

    placeholder.appendChild(element);


}

selectBtn.addEventListener("click",handleCreateElement);

// Oppgave 6
//first we again get html elements that need to be worked with
//All li-element in ul can stored in variable as array items with Array.from() method.
//this way we can remove
const liList = Array.from(document.querySelectorAll("#list li"));
const ulList = document.querySelector("#list");
const removeListBtn = document.querySelector("#remove-li");

const handleRemoveList = ()=>{
    
    /*console.log("before: ");
    console.log(liList);
    */
    
    //remove last element from array
    liList.pop();

    //then clear all li-elments in ul-tag
    //this way we can rewrite again ul-tag the li-elements without the last element which was removed with pop() method above
    ulList.innerHTML = "";
    
    /*finally map through the li-list and insert new array in ul. This will missing -1 li-element with
    each button click untill nothing is left on list
    */
    liList.map(list=>{
        //found textcontent property storing li-text from console.log
       // console.log(list.textContent);
        let liElement = document.createElement("li");

        liElement.innerHTML = list.textContent;

        ulList.appendChild(liElement);
    });

    

    /*
    console.log("after");
    console.log(liList);
    */

}

removeListBtn.addEventListener("click",handleRemoveList);
// Oppgave 7
//as usual get html elements that need to be manipulated
const inputDisable = document.querySelector("#name");
const disableBtn = document.querySelector("#order");

/*
This function turns the button's border color to red and also disables the button so it can't be clicked on again
*/
const handleDisable = ()=>{
    //console.log(inputDisable.value);
    if(inputDisable.value.length > 4){
        disableBtn.style.borderColor = "red";
        disableBtn.setAttribute("disabled",true);
    }
}

disableBtn.addEventListener("click",handleDisable);

// Oppgave 8
//get relevant html-elements first
/*
source for odd and even: https://www.w3schools.com/cssref/tryit.php?filename=trycss3_nth-child_odd_even 
*/

//we can easily get odd and even with querySelectAll
const odd = document.querySelectorAll(".children li:nth-child(odd)");

const even = document.querySelectorAll(".children li:nth-child(even)");

const colorBtn = document.querySelector("#color");

const handleColorChange =()=>{

    for (let elem of odd) {
        elem.style.display = "inline-block";
        elem.style.border = "2px solid green";
        elem.style.color = "red";
        console.log(elem);
    }

    for (let elem of even) {
        elem.style.display = "inline-block";
        elem.style.border = "2px solid pink";
        elem.style.color = "pink";
        console.log(elem);
    }
}

colorBtn.addEventListener("click",handleColorChange);


