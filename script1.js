document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content of file.txt using Fetch API
    fetch('file.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Render the content onto the HTML page
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = `<p>${data}</p>`;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
});
