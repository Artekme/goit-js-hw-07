const numberOfUl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfUl.length}`);
for (const item of numberOfUl) {
    const h2TitleText = item.querySelector("h2").textContent;
     console.log(`Category: ${h2TitleText}`);
     const numberOfLi = item.querySelectorAll("li");
     console.log(`Elements: ${numberOfLi.length}`);
};

