import { foods } from "./data.js";

const foodFilter = document.getElementById("food-filter");
const foodGallery = document.getElementById("food-gallery");

function renderFoods(filteredFoods) {
  foodGallery.innerHTML = ""; 
  filteredFoods.forEach((food) => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    foodItem.innerHTML = `
      <img src="${food.image}" alt="${food.name}" class="food-image" />
      <span class="food-name">${food.name}</span>
      <span class="food-calories">${food.calories} kcal</span>
    `;
    foodGallery.appendChild(foodItem);
  });
}

function filterFoods(category) {
  if (category === "all") {
    renderFoods(foods);
  } else {
    const filteredFoods = foods.filter((food) => food.tipo === category);
    renderFoods(filteredFoods);
  }
}

foodFilter.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  filterFoods(selectedCategory);
});

renderFoods(foods);
