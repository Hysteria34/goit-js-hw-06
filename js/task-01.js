const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
    const categoriesTitle = element.querySelector('h2');
    const categoriesLi = element.querySelectorAll('li');

    console.log(`Category: ${categoriesTitle.textContent}`);
    console.log(`Category: ${categoriesLi.length}`);
});
