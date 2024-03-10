import {data} from "./data.js"

document.addEventListener('DOMContentLoaded', () => {
    displayData(data);
});

function displayData(data) {
    const dataContainer = document.querySelector(".data-details");

    const htmlContent = data.map(item => `
     
    <div class="details"  >
    <div>
    <h2 class="item">${item.heading}</h2>
    <p class="item">${item.content}</p>
    
    </div>
    <div>
   
    <img src="${item.img}" alt="image" >
    </div>
    </div>
`).join('');
    
    dataContainer.innerHTML = htmlContent; 

}