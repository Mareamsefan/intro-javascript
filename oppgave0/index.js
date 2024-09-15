// Oppgave 1
const oppgave1 = document.getElementById("remove-btn");

oppgave1.addEventListener("click", () => {
  const textToRemove = document.getElementById("remove");

  if (textToRemove) {
    textToRemove.remove();
    console.log("Teksten er fjernet");
  }
  //Måtte legge til en if og else hvis ikke få rjeg en erorr hvor den pørver å hente
  // en slettet element
  else {
    console.log("Elementet med id 'remove' ble ikke funnet");
  }
});

//Oppgave 2
const oppgave2 = document.getElementById("change-btn");

oppgave2.addEventListener("click", () => {
  const textToChange = document.getElementById("change");
  textToChange.textContent = "MARI IS LEARNING JAVASCRIPT :) ";
  console.log("endringen ble utført");
});

// Oppgave 3
const oppgave3 = document.getElementById("input");

oppgave3.addEventListener("click", () => {
  const textToChange = document.getElementById("input-text");
  textToChange.textContent = oppgave3.value;
  console.log("endringen ble utført");
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const oppgave4 = document.getElementById("write-list");

oppgave4.addEventListener("click", () => {
  const container = document.getElementById("ul");

  container.innerHTML = "";

  myList.map((item) => {
    const listitem = document.createElement("li");
    listitem.textContent = item;
    container.appendChild(listitem);
  });
  console.log("listeelementene er lagt til :)");
});

// Oppgave 5
const container = document.getElementById("placeholder");
const button = document.getElementById("create");
const Input = document.getElementById("text");
const select = document.getElementById("select");

button.addEventListener("click", () => {
  if (select.value === "h2") {
    const H2 = document.createElement("h2");
    H2.textContent = Input.value;
    container.appendChild(H2);
    console.log("Nå har jeg laget en h2 :) ");
  } else if (select.value === "h3") {
    const H3 = document.createElement("h3");
    H3.textContent = Input.value;
    container.appendChild(H3);
    console.log("Nå har jeg laget en h3 :) ");
  } else if (select.value === "span") {
    const Span = document.createElement("p");
    Span.textContent = Input.value;
    container.appendChild(Span);
    console.log("Nå har jeg laget en span :) ");
  } else {
    const paragraph = document.createElement("p");
    paragraph.textContent = Input.value;
    container.appendChild(paragraph);
    console.log("Nå har jeg laget en p :) ");
  }
});

// Oppgave 6

const buttonRemove = document.getElementById("remove-li");
const list = document.getElementById("list");
buttonRemove.addEventListener("click", () => {
  const firstChild = list.firstElementChild;
  list.removeChild(firstChild);
  console.log("listeelementene er lagt til :)");
});

// Oppgave 7

const nameInput = document.getElementById("name");
const buttonOrder = document.getElementById("order");

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 4) {
    buttonOrder.style.border = " 5px solid red";
    buttonOrder.disabled = true;
  } else {
    buttonOrder.style.border = "";
    buttonOrder.disabled = false;
  }
});

// Oppgave 8
const liButton = document.getElementById("color");
liButton.addEventListener("click", () => {
  const ulElement = document.querySelector(".children");

  const children = ulElement.children;

  for (let i = 0; i < children.length; i++) {
    if (i % 2 === 0) {
      children[i].style.border = "5px solid green";
    } else {
      children[i].style.border = "5px solid pink";
    }
  }
});
