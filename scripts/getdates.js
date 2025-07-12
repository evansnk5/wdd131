// select the DOM elements for output
const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");



// //use the date object to get the last modified date
// const lastModifiedDate = new Date(document.lastModified);
// // set the text content of the span to the current year
// yearSpan.textContent = lastModifiedDate.getFullYear();
// // set the text content of the lastModified element to the last modified date
// lastModified.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()}`;

const today = new Date();
yearSpan.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;