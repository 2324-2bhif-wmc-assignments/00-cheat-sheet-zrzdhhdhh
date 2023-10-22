document.addEventListener("DOMContentLoaded", function () {
    const tocLinks = document.querySelectorAll("#table-of-contents a");

    tocLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 50; // Adjust the offset as needed

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: "smooth",
                });
            }
        });
    });
});
