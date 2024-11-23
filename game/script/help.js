document.addEventListener("DOMContentLoaded", () => {
    const helpButton = document.getElementById("helpButton");
    const helpModal = document.getElementById("helpModal");
    const closeModal = document.getElementById("closeModal");

    // Abre o modal
    helpButton.addEventListener("click", () => {
        helpModal.style.display = "flex";
    });

    // Fecha o modal
    closeModal.addEventListener("click", () => {
        helpModal.style.display = "none";
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", (event) => {
        if (event.target === helpModal) {
            helpModal.style.display = "none";
        }
    });
});
