const cards = document.querySelectorAll(".stack-card");

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

        const rect = card.getBoundingClientRect();

        const progress = Math.min(
            Math.max(
                (window.innerHeight - rect.top) / window.innerHeight,
                0
            ),
            1
        );

        const scale = 1 - progress * 0.05;

        card.style.transform = `scale(${scale})`;

    });

});