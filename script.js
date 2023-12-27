document.addEventListener('DOMContentLoaded', () => {
    // Data stored as a single string, each pair separated by a newline
    const rawData = `Alice:https://example.com/alice
Bob:https://example.com/bob
alle:https://yapper.com
Charlie:https://example.com/charlie`; // Add more "name:link" pairs separated by newlines

    // Split the rawData into an array of "name:link" pairs
    const data = rawData.split('\n');

    const searchBox = document.getElementById('search-box');
    const resultsContainer = document.getElementById('results-container');

    searchBox.addEventListener('input', () => {
        const searchText = searchBox.value.toLowerCase();
        const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
        displayResults(filteredData);
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(item => {
            const [name, link] = item.split(':'); // Split the string into name and link
            const linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.textContent = name;
            linkElement.target = "_blank";
            resultsContainer.appendChild(linkElement);
            resultsContainer.appendChild(document.createElement('br'));
        });
    }

    displayResults(data); // Display all data initially
});
