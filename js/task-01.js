

    const numberOfItem = document.querySelectorAll("ul#categories li.item");
    // console.log(numberOfItem);

    console.log(`Number of categories: `, numberOfItem.length);

    numberOfItem.forEach(function (i) {
        
    if (i < numberOfItem.length) {
       
        const headerText = numberOfItem[i].firstElementChild.textContent;
        console.log(`Category: ${headerText}`);

        const ElementsEl = numberOfItem[i].lastElementChild;
        const numberOfElementsEl = ElementsEl.querySelectorAll("li");

        console.log(`Elements: `, numberOfElementsEl[i].lastElementChild.length);
     }
    });
