import { cloneTemplate, renderList } from "../../utils/main.js";

const heroItems = ["Лето 2026", "с 20 июня", "5–9 лет",]

function createHeroItem(item) {
    const navItem = cloneTemplate(
        "hero-item-template"
    );

    const text = navItem.querySelector("p");

    text.textContent = item;

    return navItem;
}

export function initHeroItems() {
    const container = document.getElementById("hero-items");

    renderList({
        items: heroItems,
        container: container,
        renderItem: createHeroItem
    })
}

initHeroItems()