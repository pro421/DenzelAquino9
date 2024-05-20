let Dislikes = [];

function addItem(item) {
  Dislikes.push(item);
}

function removeItem(item) {
  const remove = Dislikes.indexOf(item);
  if (remove !== -1) {
    Dislikes.splice(remove, 1);
  }
}

addItem("Long Discussions");
addItem("Mongose(thefoodthingy)");
addItem("Lag");
addItem("M1 Abraham Tank");
addItem("Nato Standard Mag 9.22mm");
addItem("When my dogs go barking loud at night");

function displayDislikes() {
  console.log("Dislikes:");
 for (let i = 0; i < Dislikes.length; i++) {
      console.log((i + 1) + ". " + Dislikes[i]);
    }
  }
  
removeItem("Nato Standard Mag 9.22mm");
removeItem("M1 Abraham Tank");

displayDislikes();