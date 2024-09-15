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
const Input = document.getEle;
// Oppgave 6
// Oppgave 7
// Oppgave 8
