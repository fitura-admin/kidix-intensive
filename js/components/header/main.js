const MIN_SCROLL = 80;

export function initStickyHeader() {
    let prevScrollY = 0;
    const header = document.getElementById("header");

    function onScroll() {
        const currentScrollY = window.scrollY;
        if (!header) return;

        if (currentScrollY <= 80) {
            header.classList.remove("header--hidden");
            prevScrollY = 0;
            return;
        }

        if (prevScrollY > currentScrollY) {
            header.classList.remove("header--hidden");
        } else if (currentScrollY < prevScrollY) {
            header.classList.add("header--hidden");
        }

        prevScrollY = currentScrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
    };
}