let currentLangIndex = 0;
const languages = ["en", "pt", "es"];

function updateProjectsLanguage(lang) {
    const container = document.querySelector("#projects");
    container.innerHTML = "";

    window.content[lang].projects
        .map((project, index) => {
            const card = document.createElement("div");
            card.className = "card-container";
            const buttonLearnMore = window.content[lang].projectButton;    
            card.innerHTML = `
        <div class="main-cards">
            <img
              class="main-icon-${index}"
              src="${project.icon}"
              alt="Ícone de camiseta"
            />
            <div class="main-text-container-card">
              <h3 class="main-title-card">${project.title}</h3>
              <p class="main-paragraph-card">
                ${project.description}
              </p>
            </div>
          </div>
          <div class="main-learn-more">
            <a href= "${project.link}" class="main-link-card" target="_blank">${buttonLearnMore}</a>
        </div>
      `;
      console.log(card)
            return card;
        })
        .forEach((card) => container.appendChild(card));
}

function t(key, lang) {
    const keys = key.split(".");
    let nextObject = window.content[lang];

    for (let i = 0; i < keys.length; i++) {
        if (window.content[lang] === undefined) {
            return key;
        }

        nextObject = nextObject[keys[i]];
    }


    return nextObject;
};

function updateTranslatedComponents(lang) {
    const components = document.querySelectorAll("[data-translate]");

    components.forEach((component) => {
        const key = component.getAttribute("data-translate");
        const translatedText = t(key, lang);

        if (translatedText) {
            component.innerHTML = translatedText;
        }
    });
}

document.getElementById("language-toggle").addEventListener("click", () => {
    currentLangIndex = (currentLangIndex + 1) % languages.length;
    const newLang = languages[currentLangIndex];
    updateProjectsLanguage(newLang);
    updateTranslatedComponents(newLang);
});

updateProjectsLanguage("en");
updateTranslatedComponents("en");