import { cloneTemplate, renderList } from "../../utils/main.js";
import { carouselItems } from "./data/carousel.js"
import { renderWeek } from "./main.js";

function addEventListeners() {
    const mainContainer = document.getElementById("weeks");
    const itemsContainer = document.querySelector(".weeks__carousel");
    const weekItem = document.querySelector(".weeks__week");
    if (!mainContainer || !itemsContainer || !weekItem) return;

    let isAnimating = false;
    const onItemsContainerClick = (e) => {
        if (isAnimating) return;

        const item = e.target.closest(".carousel__item");
        if (!item) return;

        const key = item.dataset.key;

        const items = itemsContainer.querySelectorAll(".carousel__item");
        items.forEach((el) => {
            el.classList.remove("active");
        });
        item.classList.add("active");

        isAnimating = true;
        weekItem.classList.add("animate");

        const timeout = setTimeout(() => {
            weekItem.classList.remove("animate");
            renderWeek(key);
            isAnimating = false;
            clearTimeout(timeout);
        }, 500);

        mainContainer.dataset.key = key;
        itemsContainer.dataset.key = key;
        return () => {
            if (timeout) clearTimeout(timeout);
        }
    }

    itemsContainer.addEventListener("click", onItemsContainerClick);

    return () => {
        itemsContainer.removeEventListener("click", onItemsContainerClick)
    }
}

function createCarouselItem({ date, title, text, key }, index) {
    const item = cloneTemplate("weeks-carousel-item-template");
    const itemContent = item.querySelector(".carousel__item");
    if (index === 0) itemContent.classList.add("active");
    itemContent.setAttribute("data-key", key);

    const weekElement = item.querySelector(".carousel__item__week");
    const dateElement = item.querySelector(".carousel__item__date");
    const titleElement = item.querySelector(".carousel__item__title");
    const textElement = item.querySelector(".carousel__item__text");
    const iconElement = item.querySelector(".carousel__item__icon");

    weekElement.textContent = `НЕДЕЛЯ ${index + 1}`;
    dateElement.textContent = date;
    titleElement.textContent = title;
    iconElement.src = `/media/weeks/carousel-icons/${index + 1}.png`;

    if (text) {
        textElement.textContent = text;
    } else {
        textElement.remove();
    }

    return item;
}

function init() {
    const carousel = document.getElementById("weeks-carousel");

    renderList({
        items: carouselItems,
        container: carousel,
        renderItem: createCarouselItem,
    });
}

init();
addEventListeners();