

    const numberOfCategories = document.querySelectorAll("ul#categories li.item");
    console.log(`Number of categories: `, numberOfCategories.length);


    numberOfCategories.forEach(function (category) {
        
    console.log(`Category: `, category.firstElementChild.textContent);
    console.log(`Elements: `, category.lastElementChild.childElementCount);
        
    });
