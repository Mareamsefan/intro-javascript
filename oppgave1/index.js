import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  const textArray = text.split(" ");
  let longestWordC = " ";
  console.log(textArray);
  textArray.forEach((word) => {
    if (word.length > longestWordC.length) {
      longestWordC = word;
      console.log(longestWordC);
    }
  });
  return longestWordC;
};

const result = document.createElement("h1");
result.textContent = longestWord();
result.style.color = "pink";
const body = document.getElementsByTagName("body")[0];
body.appendChild(result);
