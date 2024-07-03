document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon a');
    const dropdown = document.querySelector('.menu-icon .dropdown');

    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon a');
    const dropdown = document.querySelector('.menu-icon .dropdown');
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const closeSearch = document.getElementById('close-search');
    
    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', function(e) {
        if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    searchIcon.addEventListener('click', function(e) {
        e.preventDefault();
        searchContainer.classList.remove('hidden');
        searchInput.focus();
    });

    closeSearch.addEventListener('click', function() {
        searchContainer.classList.add('hidden');
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-description');
        searchResults.innerHTML = '';
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                const productImg = product.parentElement.querySelector('img').src;
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('search-result-item');
                const imgElement = document.createElement('img');
                imgElement.src = productImg;
                imgElement.alt = productName;
                imgElement.classList.add('search-result-img');
                const textElement = document.createElement('span');
                textElement.textContent = product.querySelector('h3').textContent;
                resultDiv.appendChild(imgElement);
                resultDiv.appendChild(textElement);
                searchResults.appendChild(resultDiv);
            }
        });
    });
    searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-description');
    searchResults.innerHTML = '';
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            const productImg = product.parentElement.querySelector('img').src;
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('search-result-item');
            const imgElement = document.createElement('img');
            imgElement.src = productImg;
            imgElement.alt = productName;
            imgElement.classList.add('search-result-img');
            const textElement = document.createElement('span');
            textElement.textContent = product.querySelector('h3').textContent;
            resultDiv.appendChild(imgElement);
            resultDiv.appendChild(textElement);

            // Add click event to scroll to the product
            resultDiv.addEventListener('click', () => {
                product.parentElement.scrollIntoView({ behavior: 'smooth' });
            });

            searchResults.appendChild(resultDiv);
        }
    }); 
});
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon a');
    const dropdown = document.querySelector('.menu-icon .dropdown');

    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});
