

// Button to press to change the quote within the text as well as the name of the Author
const generateAdvice = document.querySelector(".advice-generator");

// Where the QUOTE will be displayed
const quote = document.getElementById("advice-text");//this is a locator , collecting the element


const number = document.getElementById("advice");
const author = document.getElementById("author");


let num = () =>{
    var randomNum = Math.floor(Math.random() * 44) + 1;
    number.innerHTML = randomNum;
    console.log(number);

}



const url = "https://api.quotable.io/random";

let getQuote = ()  =>{
    
    fetch(url)

    //FETCHING DATA FROM JSON 
    .then((data) => data.json())
    .then((item) => {
        console.log(item.content);
        console.log(item.author);
        
        console.log(item.length);
        // item.content from the JSON are taken and given to the variables and changed .
        quote.innerText = item.content;
        author.innerText = item.author;
        number.innerHTML = item.length;

    });
};

window.addEventListener("load", getQuote,num);


// Whenever the generateAdvice button is clicked , the getQuote function is applied.
generateAdvice.addEventListener('click',getQuote,num);


 
  


