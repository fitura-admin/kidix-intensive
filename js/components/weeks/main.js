import { cloneTemplate } from "../../utils/main.js";
import { weeksList } from "./data/weeks.js";

export function renderWeek(key) {
    const weekContainer = document.querySelector(".weeks__week");
    if (!weekContainer) return;

    const weekData = weeksList.find((item) => item.key === key);
    if (!weekData) return;

    const weekIndex = weeksList.findIndex((item) => item.key === key);

    const weekElement = weekContainer.querySelector(".week__heading__week");
    const dateElement = weekContainer.querySelector(".week__heading__date");
    const extraElement = weekContainer.querySelector(".week__heading__extra");

    const titleElement = weekContainer.querySelector(".week__title");
    const subtitleElement = weekContainer.querySelector(".week__subtitle");
    const textElement = weekContainer.querySelector(".week__text__paragraph");

    const weekBgElement = weekContainer.querySelector(".week__bg");
    const source = document.getElementById("week-bg-source-1");
    const sourceMobile = document.getElementById("week-bg-source-2");

    source.srcset = `./media/weeks/card/${weekIndex + 1}.png`;
    sourceMobile.srcset = `./media/weeks/card/${weekIndex + 1}-media.png`;

    const stepsContainer = weekContainer.querySelector(".week__steps");

    // heading
    weekElement.textContent = `НЕДЕЛЯ ${weekIndex + 1}`;
    dateElement.textContent = weekData.date;


    // extra
    if (weekData.extra) {
        extraElement.textContent = weekData.extra;
        extraElement.style.display = "";
    } else {
        extraElement.style.display = "none";
    }

    // text content
    titleElement.innerHTML = weekData.title.replace(/\n/g, "<br>");

    if (weekData.subtitle) {
        subtitleElement.textContent = weekData.subtitle;
        subtitleElement.style.display = "";
    } else {
        subtitleElement.style.display = "none";
    }

    if (weekData.text) {
        textElement.innerHTML = weekData.text.replace(/\n/g, "<br>");
        textElement.style.display = "";
    } else {
        textElement.style.display = "none";
    }

    // steps
    stepsContainer.innerHTML = "";

    if (weekData.steps?.length) {
        weekData.steps.forEach((step, index) => {
            const template = cloneTemplate("week-card-step");
            const stepElement = template.querySelector(".week__step");

            const marker = template.querySelector(".week__step__marker");
            const icon = template.querySelector(".week__step__icon img");
            const title = template.querySelector(".week__step__title");
            const text = template.querySelector(".week__step__description");

            marker.textContent = index + 1;

            icon.src = `./media/weeks/card/icons/${weekIndex + 1}/${index + 1}.png`;

            if (step.title) {
                title.innerHTML = step.title.replace(/\n/g, "<br>");
            } else {
                title.style.display = "none";
            }

            if (step.text) {
                text.innerHTML = step.text.replace(/\n/g, "<br>");
            } else {
                text.style.display = "none";
            }

            stepsContainer.append(stepElement);
        });
    }
}

function initWeekContent() {
    const firstWeek = weeksList[0];

    if (!firstWeek) return;
    renderWeek(firstWeek.key);
}

initWeekContent();