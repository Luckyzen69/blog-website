import {data} from "./data.js"

document.addEventListener('DOMContentLoaded', () => {
    displayData(data);
});

function displayData(data) {
    const dataContainer = document.querySelector(".recent");

    const htmlContent = data.map(item => `
    <div class="data" ">
        <img src="${item.img}" alt="image">
        <h2 class="item">${item.heading}</h2>
        <p class="item">${item.headline}</p>
    </div>
`).join('');

    dataContainer.innerHTML = htmlContent;
}



