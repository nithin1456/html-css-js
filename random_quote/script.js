const quoteText = document.querySelector(".quote"),
authorname= document.querySelector(".author"),
quotebtn = document.querySelector(".genaratebtn"),
soundbtn = document.querySelector(".sound");


function randomQuote(){
    
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorname.innerText= result.author;

    });
   
}
soundbtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorname.innerText}`);
    speechSynthesis.speak(utterance);

});
quotebtn.addEventListener("click",randomQuote)