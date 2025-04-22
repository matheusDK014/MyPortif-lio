/*let currentLangIndex = 0;
const languages = ["en", "pt", "es"];

function updateProjectsLanguage(lang) {
    const container = document.querySelector(".Project-cards-container");
    container.innerHTML = "";

    window.content[lang].projects
        .map((project, index) => {
            const card = document.createElement("div");
            card.className = "cards";

            card.innerHTML = `
        <img class="icon-card${index}" src="${project.icon}" alt="">
        <div class="text-container-card">
          <h3 class="title-card"><strong>${project.title}</strong></h3>
          <p class="paragraph-card">${project.description}</p>
          <button class="button-card">LEARN MORE</button>
        </div>
      `;
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
updateTranslatedComponents("en"); */