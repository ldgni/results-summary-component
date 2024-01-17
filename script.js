// Fetch data from data.json
async function fetchData() {
  try {
    const response = await fetch("data.json");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while fetching data.");
  }
}

// Update the DOM with the fetched data
function updateDOM(data) {
  // Select the list element from the DOM
  const list = document.querySelector(".summary__list");

  // Map over the data and create a list item for each entry
  const listItems = data
    .map(
      (item) => `
    <li class="list__item list__item--${item.category.toLowerCase()}" role="listitem">
      <div class="item__category">
        <img src="${item.icon}" alt="${item.category}">
        <p class="category__name">${item.category}</p>
      </div>
      <p class="item__score">
        <strong>${item.score}</strong><span class="score__total">/ 100</span>
      </p>
    </li>
  `
    )
    // Join the array of list items into a single string
    .join("");

  // Insert the list items into the DOM
  list.innerHTML = listItems;
}

// Use the functions
fetchData().then(updateDOM);
