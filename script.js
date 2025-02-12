document.addEventListener('DOMContentLoaded', (event) => {
    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = 'cat cheers.jpeg'; // Replace with the path to your image
        img.alt = 'Valentine Image';
        document.body.appendChild(img);
    });
});