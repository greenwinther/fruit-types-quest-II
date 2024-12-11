import "./styles.css";
import {
  getFruit,
  getIcon,
  getColor,
  getCategoryByName,
  numberOfColoredFruits,
  numberOfCategoryFruits,
  getFruitsByCategory,
  getFruitsByColor,
  getFruits,
} from "./fruits/utils";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

console.log(getFruit("Apple"));
console.log(getFruit("Mango"));
console.log(getIcon("🍇"));
console.log(getIcon("🍙"));
console.log(getColor("Green"));
console.log(getColor("Magenta"));
console.log(getCategoryByName("Melon"));
console.log(getCategoryByName("Avocado"));
console.log(numberOfColoredFruits("Red"));
console.log(numberOfColoredFruits("Magenta"));
console.log(numberOfCategoryFruits("Berry"));
console.log(numberOfCategoryFruits("Banana"));
console.log(getFruitsByCategory("Pepo"));
console.log(getFruitsByColor("Red"));
console.log(getFruits("grape"));
console.log(getFruits("banana"));

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

document.getElementById("searchButton")?.addEventListener("click", () => {
  const inputElement = document.getElementById(
    "fruitInput"
  ) as HTMLInputElement;
  const resultElement = document.getElementById("result") as HTMLDivElement;

  const fruitName = inputElement.value.trim();
  const fruits = getFruits(fruitName);
  fruits.forEach((fruit) => {
    resultElement.innerHTML += `
        <p><strong>Name:</strong> ${fruit.name}</p>
        <p><strong>Icon:</strong> ${fruit.icon}</p>
        <p><strong>Color:</strong> ${fruit.color}</p>
        <p><strong>Category:</strong> ${fruit.category}</p>
        <p>---------------------------------------------</p>
      `;
  });
});

/* else {
    resultElement.innerHTML = `<p>Fruit not found.</p>`;
  }  */
