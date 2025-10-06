# 🍳 The Lazy Gourmet — Recipe + Nutrition Finder

A chill little app for food lovers who want to **search recipes, see ingredients, and check nutrition facts** without overcomplicating things.  
Find a dish, follow the steps, and cook it your way — easy, tasty, and stress-free.

[Link to project] (replace with your live demo link)  

![screenshot](img/cook.png "The Lazy Gourmet — Recipe + Nutrition Finder")

---

## How It’s Made:
**Tech used:** HTML, CSS, JavaScript  

The Lazy Gourmet combines two public APIs — **TheMealDB** and **OpenFoodFacts** — to deliver both **recipe instructions** and **nutritional info** in one place.  
The layout is designed like a **modern cookbook**, complete with a “Chef’s Note” ribbon and a cozy **kitchen background** for that home-cooked feel.

**HTML:**  
Structured into simple semantic sections (`form`, `article`, `section`) for clarity and easy data insertion.  

**CSS:**  
Culinary-themed styling using soft shadows, elegant serif fonts, and a warm accent color (`#a4512b`).  
Features a blurred parchment overlay and compact search bar for balanced spacing.

**JavaScript:**  
Fetches data from both APIs — recipe details first, then nutrition for the main ingredient.  
The DOM updates dynamically with ingredients, steps, and nutrition per 100g.  
Error handling keeps it friendly even if a dish isn’t found.

---

## Optimizations
- Add a “favorite recipes” section with localStorage.  
- Include measurement amounts for each ingredient.  
- Style the steps with fade-in animations.  
- Display related dishes or random recipe suggestions.  

---

## Lessons Learned
- How to **combine multiple APIs** into one clean output.  
- Creating a **realistic cookbook interface** with readable contrast over a photo background.  
- Keeping data-driven UIs responsive and aesthetic at the same time.  
- CSS design tweaks can totally shift the *mood* of a project (cozy > corporate every time).

---

Made with flavor and zero stress 🧈  
That’s me, Jazzi B.
