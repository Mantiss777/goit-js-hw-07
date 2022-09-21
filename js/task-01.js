const listWithId = document.querySelector("ul#categories");
// console.log(listWithId);

// ====================================
const numCatItem = listWithId.children.length;
console.log("Number of categories:", numCatItem);
// ====================================
const firstCatName = listWithId.querySelector(".item").firstElementChild;
console.log("Category:", firstCatName.textContent);

const firstCatItem = firstCatName.nextElementSibling.children.length;
console.log("Elements:", firstCatItem);
// ====================================

const secondCatName = listWithId.querySelector(".item").nextElementSibling.firstElementChild;
console.log("Category:", secondCatName.textContent);

const secondCatItem = secondCatName.nextElementSibling.children.length;
console.log("Elements:", secondCatItem);
// ====================================

const thirdCatName = listWithId.querySelector(".item").nextElementSibling.nextElementSibling.firstElementChild;
console.log("Category:", thirdCatName.textContent);

const thirdCatItem = thirdCatName.nextElementSibling.children.length;
console.log("Elements:", thirdCatItem);

// ====================================
