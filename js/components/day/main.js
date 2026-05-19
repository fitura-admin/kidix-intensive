import { cloneTemplate, renderList } from "../../utils/main.js";

const dayList = [
    {
        time: "9:00 - 9:55",
        title: "Акробатика",
        text: "Спортивно-игровой\nблок: разминка,\nбазовые элементы, уверенность в теле",
        index: 1,
    },
    {
        time: "10:00 - 10:45",
        title: "Нейрофитнес",
        text: "Внимание, память, межполушарное \nвзаимодействие - \nчерез игру и \nдвижение",
        index: 2,
    },
    {
        time: "10:45 - 11:00",
        title: "Перекус",
        text: "Свой перекус из дома. Отдых, разговоры,\nсмена темпа",
        index: 3,
    },
    {
        time: "11:00 - 11:30",
        title: "Эмоциональный\nинтеллект",
        text: "Эмоции, саморегуляция, дружба - в формате обсуждений и игр",
        index: 4,
    },
    {
        time: "11:30 - 12:00",
        title: "Зона ниндзя",
        text: "Игровая полоса\nприпятствий - \nсила, ловкость,\nсмелость",
        index: 5,
    },
    {
        time: "12:00 - 13:00",
        title: "Спортивно-\nигровое занятие",
        text: "Командные эстафеты, соревнования\nи большая игра дня",
        index: 6,
    },
];


function createDayItem({ time, title, text, index }) {
    const item = cloneTemplate("day-item-template");

    const container = item.querySelector(".day__item");
    const timeElement = item.querySelector(".day__item__time");
    const titleElement = item.querySelector("h3");
    const textElement = item.querySelector("#day-item-text");

    timeElement.textContent = time;
    titleElement.textContent = title;
    textElement.textContent = text;

    container.style.setProperty(
        "--bg",
        `url("../../../media/day/${index}.png")`
    );
    container.style.setProperty(
        "--bg-media",
        `url("../../../media/day/${index}-media.png")`
    );

    return item;
}


export function initDaySection() {
    const day = document.getElementById("day-items");

    renderList({
        items: dayList,
        container: day,
        renderItem: createDayItem
    });
};


initDaySection();