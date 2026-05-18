export function cloneTemplate(templateId) {
    return document
        .getElementById(templateId)
        .content
        .cloneNode(true);
}

export function renderList({
    items,
    container,
    renderItem,
}) {
    const fragment =
        document.createDocumentFragment();

    items.forEach((item) => {
        fragment.appendChild(renderItem(item));
    });

    container.appendChild(fragment);
}