let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeItem(item) {
  const remove = shoppingList.indexOf(item);
  if (remove !== -1) {
    shoppingList.splice(remove, 1);
  }
}

addItem("Fish");
addItem("Dog");
addItem("Horse");
addItem("M1 Abraham Tank");
addItem("Nato Standard Mag 9.22mm");
addItem("cat");

function displayShoppingList() {
  console.log("My Shopping List:");
 for (let i = 0; i < shoppingList.length; i++) {
      console.log((i + 1) + ". " + shoppingList[i]);
    }
  }
  
removeItem("Nato Standard Mag 9.22mm");
removeItem("M1 Abraham Tank");

displayShoppingList();