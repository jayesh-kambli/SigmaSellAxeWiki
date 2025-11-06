// Simple search functionality for documentation
(function() {
    const searchData = [
        { title: 'Home', url: 'index.html', content: 'SigmaSellAxe wiki home page overview features' },
        { title: 'Getting Started', url: 'getting-started.html', content: 'installation setup first time configuration' },
        { title: 'Configuration', url: 'configuration.html', content: 'config.yml settings sell axe durability logging debug economy integrations' },
        { title: 'Commands', url: 'commands.html', content: 'sigmasellaxe give items reload regenerate verifyConfig verifyDupe commands' },
        { title: 'Permissions', url: 'permissions.html', content: 'sigmasellaxe.use sigmasellaxe.items sigmasellaxe.give permissions luckperms' },
        { title: 'Features', url: 'features.html', content: 'container selling GUI sorting durability boost transaction logging' },
        { title: 'Integrations', url: 'integrations.html', content: 'ExcellentShop EconomyShopGUI Lands GriefPrevention WorldGuard Vault' },
        { title: 'API', url: 'api.html', content: 'developer API integration code examples ConfigManager EconomyHook ShopPluginManager' },
        { title: 'Troubleshooting', url: 'troubleshooting.html', content: 'debug issues problems solutions errors help support' }
    ];

    function initSearch() {
        const searchHTML = `
            <div class="search-container">
                <input type="text" class="search-box" id="searchBox" placeholder="Search documentation...">
                <div class="search-results" id="searchResults"></div>
            </div>
        `;

        const main = document.querySelector('main');
        if (main) {
            const content = main.querySelector('.content');
            if (content) {
                content.insertAdjacentHTML('afterbegin', searchHTML);
            }
        }

        const searchBox = document.getElementById('searchBox');
        const searchResults = document.getElementById('searchResults');

        if (searchBox && searchResults) {
            searchBox.addEventListener('input', function(e) {
                const query = e.target.value.toLowerCase().trim();
                
                if (query.length < 2) {
                    searchResults.classList.remove('active');
                    searchResults.innerHTML = '';
                    return;
                }

                const results = searchData.filter(item => {
                    return item.title.toLowerCase().includes(query) ||
                           item.content.toLowerCase().includes(query);
                });

                if (results.length === 0) {
                    searchResults.innerHTML = '<p>No results found.</p>';
                    searchResults.classList.add('active');
                    return;
                }

                let html = '';
                results.slice(0, 5).forEach(item => {
                    html += `
                        <div class="search-result-item" onclick="window.location.href='${item.url}'">
                            <h4>${item.title}</h4>
                            <p>${item.url}</p>
                        </div>
                    `;
                });

                searchResults.innerHTML = html;
                searchResults.classList.add('active');
            });

            // Close search on outside click
            document.addEventListener('click', function(e) {
                if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
                    searchResults.classList.remove('active');
                }
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();

