const quoteE1 = document.getElementById("quote");
const authorE1 = document.getElementById("author");
const API ="https://api.quotable.io/random";


async function quote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quoteE1.innerHTML =data.content;
    authorE1.innerHTML =data.author;
}
quote(API);