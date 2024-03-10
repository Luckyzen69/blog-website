import {data} from "./data.js"

document.addEventListener('DOMContentLoaded', () => {
    displayData(data);
});

function displayData(data) {
    const dataContainer = document.querySelector(".data-list");

    const htmlContent = data.map(item => `
     
    <div class="deta"  >
    <div onClick="detail(data)">
        <img src="${item.img}" alt="image">
        </div>
        <div>
        <h2 class="item">${item.heading}</h2>
        <p class="item">${item.headline}</p>
    </div>
    </div>
`).join('');
    
    dataContainer.innerHTML = htmlContent; 

}