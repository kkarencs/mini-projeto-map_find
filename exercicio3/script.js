import { foods } from "../data.js";

const foodList = document.getElementById("food-list");
const selectedFoods = document.getElementById("selected-foods");
const totalCaloriesEl = document.getElementById("total-calories");

let selectedItems = [];

function renderFoods() {
  foodList.innerHTML = "";
  foods.forEach((food, index) => {
    const foodItem = document.createElement("div");
    foodItem.className = "food-item";
    foodItem.textContent = `${food.name} (${food.calories} cal)`;
    foodItem.addEventListener("click", () => addFood(index));
    foodList.appendChild(foodItem);
  });
}

function addFood(index) {
  const food = foods[index];
  selectedItems.push(food);
  updateSelectedFoods();
  updateTotalCalories();
}

function removeFood(index) {
  selectedItems.splice(index, 1); 
  updateSelectedFoods();
  updateTotalCalories();
}

function updateSelectedFoods() {
  selectedFoods.innerHTML = "";
  selectedItems.forEach((food, index) => {
    const foodElement = document.createElement("div");
    foodElement.className = "selected-item";
    foodElement.innerHTML = `<p>${food.name} (${food.calories} cal)</p>`;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", () => removeFood(index));
    foodElement.appendChild(removeButton);

    selectedFoods.appendChild(foodElement);
  });
}

function updateTotalCalories() {
  const totalCalories = selectedItems.reduce((total, food) => total + food.calories, 0);
  totalCaloriesEl.textContent = totalCalories;
}

// Inicializar
renderFoods();
