"use strict";
const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");
const number = console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
