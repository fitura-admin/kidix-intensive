import { cloneTemplate, renderList } from "../../utils/main.js";

const navLinks = [
    {
        text: "ФОРМУЛА",
        href: "#!"
    },
    {
        text: "ПРОСТРАНСТВО",
        href: "#!"
    },
    {
        text: "АБОНЕМЕНТЫ",
        href: "#!"
    },
    {
        text: "РАСПИСАНИЕ",
        href: "#schedule"
    },
    {
        text: "КОНТАКТЫ",
        href: "#!"
    },
]

function createNavItem({ text, href }) {
    const navItem = cloneTemplate(
        "nav-item-template"
    );

    const anchor = navItem.querySelector("a");

    anchor.textContent = text;
    anchor.href = href;

    return navItem;
}

export function initHeaderNav() {
    const nav = document.getElementById("header-nav");

    renderList({
        items: navLinks,
        container: nav,
        renderItem: createNavItem
    })
}

initHeaderNav()