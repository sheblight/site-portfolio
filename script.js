const page = (()=>{

});


const manager = (()=> {
    const pages = ["sites", "bunni", "games", "art", "sound"];
    let activePage = pages[0];

    // Execute in main script
    const init = () => {
        const preloadContainer = document.querySelector(".preloader");
        const navMenu = document.querySelector(".nav-buttons");
        
        // load in side menu buttons
        pages.forEach(page => {
            let btn = document.createElement("a");
            btn.textContent = page;
            navMenu.appendChild(btn);
            btn.onclick = ()=>{ loadPage(page); };
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
        const oldSection = document.querySelector("section." + activePage);
        const newSection = document.querySelector("section." + page);
        if (oldSection != null) {
            oldSection.classList.add("hidden");
        }
        if (newSection != null) {
            newSection.classList.remove("hidden");
        }
        
        activePage = page;
    };

    return { init, loadPage };
})();

manager.init();