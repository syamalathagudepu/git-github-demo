// const Header=document.getElementById('maintitle');

// Header.textContent="Welcome to Javascript DOM";

// Header.style.color = "blue";

const h1 = document.getElementById("mainTitle");

// Do these changes:
// Expected changes:
// Text: "Welcome to JavaScript DOM"
h1.textContent = "Welcome to JavaScript DOM";

h1.style.color = "blue";

// Background color: lightyellow
h1.style.backgroundColor = 'lightyellow';

// Padding: 15px
h1.style.padding = '15px';

const paragraph = document.getElementsByTagName("p")
for (let i=0; i<paragraph.length; i++) {
    paragraph[i].style.color= "green";
    paragraph[i].style.fontSize = "20px"
    paragraph[i].style.border = "1px solid black";
    paragraph[i].style.padding ="10px";
}

const fruit=document.getElementsByClassName("fruit");

for (let i=0; i<fruit.length; i++) {
    fruit[i].style.backgroundColor = "lightblue";
fruit[i].style.margin = "5px";
fruit[i].style.padding = "8px";
fruit[i].style.fontWeight= "bold";
fruit[i].style.border = "2px solid green";
}


