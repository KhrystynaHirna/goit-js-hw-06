

const numberOfItem = document.querySelectorAll("ul#categories li.item");
// console.log(numberOfItem);

console.log(`Number of categories: `, numberOfItem.length);


for (let i = 0; i < numberOfItem; i += 1) {
    const headerText = numberOfItem[i].firstElementChild.textContent;
    console.log(`Category: ${headerText}`);

}

// const ElementsEl = numberOfItem[i].lastElementChild;
// const numberOfElementsEl = ElementsEl.querySelectorAll("li");

// numberOfItem.forEach(function (i) {
   
//     // if (Elements < numberOfItem.length) {
       
        
//         console.log(`Elements: `, numberOfElementsEl[i].lastElementChild.length);
    // });
