document.getElementById('searchBar').addEventListener('keyup', function(event) {
    let searchTerm = event.target.value.toLowerCase();
    let items = document.getElementById('namesList').getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        let itemText = items[i].textContent || items[i].innerText;
        items[i].style.display = itemText.toLowerCase().indexOf(searchTerm) > -1 ? "" : "none";
    }
});
