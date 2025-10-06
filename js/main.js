// grab elements
const form = document.querySelector("#recipeForm");
const statusMsg = document.querySelector("#statusMsg");
const info = document.querySelector("#info");

const recipeName = document.querySelector("#recipeName");
const photo = document.querySelector("#photo");
const ingredientsList = document.querySelector("#ingredients");
const stepsList = document.querySelector("#steps");

const nutritionItem = document.querySelector("#nutritionItem");
const calories = document.querySelector("#calories");
const protein = document.querySelector("#protein");
const carbs = document.querySelector("#carbs");
const fat = document.querySelector("#fat");

// when form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dish = document.querySelector("#dish").value.trim();
  if (!dish) {
    statusMsg.textContent = "Please enter a dish name.";
    return;
  }

  info.hidden = true;
  statusMsg.textContent = "Fetching recipe info...";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals ? data.meals[0] : null;
      if (!meal) {
        statusMsg.textContent = "Recipe not found.";
        return;
      }

      // display data to the dom
      recipeName.textContent = meal.strMeal;
      photo.src = meal.strMealThumb || "";
      photo.alt = meal.strMeal;

      // ingredients list
      ingredientsList.innerHTML = "";
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient && ingredient.trim()) {
          const li = document.createElement("li");
          li.textContent = ingredient.trim();
          ingredientsList.appendChild(li);
        }
      }

      // instructions list
      const steps = (meal.strInstructions || "")
        .split(".")
        .map(step => step.trim())
        .filter(step => step.length > 0);

      stepsList.innerHTML = "";
      const ol = document.createElement("ol");
      for (let step of steps) {
        const li = document.createElement("li");
        li.textContent = step + ".";
        ol.appendChild(li);
      }
      stepsList.appendChild(ol);

      info.hidden = false;
      statusMsg.textContent = "Fetching nutrition info...";


      const mainIngredient = (meal.strIngredient1 || dish).trim();
      const nutritionUrl =
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${mainIngredient}&search_simple=1&action=process&json=1&page_size=1`;

      fetch(nutritionUrl)
        .then(r => r.json())
        .then(n => {
          const product = n.products && n.products[0];
          const nut = (product && product.nutriments) || {};

          nutritionItem.textContent = mainIngredient;
          calories.textContent = nut["energy-kcal_100g"]
            ? `${nut["energy-kcal_100g"]} kcal`
            : "—";
          protein.textContent = nut["proteins_100g"]
            ? `${nut["proteins_100g"]} g`
            : "—";
          carbs.textContent = nut["carbohydrates_100g"]
            ? `${nut["carbohydrates_100g"]} g`
            : "—";
          fat.textContent = nut["fat_100g"]
            ? `${nut["fat_100g"]} g`
            : "—";

          statusMsg.textContent = "";
        })
        .catch(() => {
          statusMsg.textContent = "Could not load nutrition info.";
        });
    })
    .catch(() => {
      statusMsg.textContent = "Error loading recipe.";
    });
});