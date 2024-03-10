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
function send(){
    email.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;

    // You can perform additional validation here before sending the data
    
    const formData = {
        name,
        email,
        loaction,
        message
    };  

    // Send the form data to your server (dummy URL for illustration)
    fetch('https://luckyzen69.github.io/blog-website/components/contact.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Optionally, handle the response from the server
        console.log(data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
    });

}