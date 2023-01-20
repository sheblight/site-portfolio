const manager = (()=> {
    const pages = ["site", "bunni", "games", "art", "sound"];
    let activePage = "art";

    // Execute in main script
    const init = () => {
        const preloadContainer = document.querySelector(".preloader");
        const navMenu = document.querySelector(".nav-buttons");
        // load in side menu buttons
        pages.forEach(page => {
            let btn = document.createElement("a");
            btn.textContent = page;
            navMenu.appendChild(btn);
        });

        // load in art assets, given the current page is art
        const sectionArt = document.querySelector("section.art");
        const preloadCount = preloadContainer.children.length;
        for (let i=0; i<preloadCount; i++) {
            sectionArt.appendChild(preloadContainer.children[i].cloneNode(true));
        }
        
    };
    
    // Load page
    const loadPage = page => {
        if (!pages.includes(page)) {
            console.warn(`Attempted to load a non-existent page: ${page}`);
            return;
        }
        activePage = page;
    };

    return { init, loadPage };
})();

manager.init();