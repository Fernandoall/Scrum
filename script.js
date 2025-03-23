document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => document.body.style.opacity = 1, 200);

    const links = document.querySelectorAll("nav ul li a, .btn");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let destino = this.getAttribute("href");

            document.body.style.opacity = 0;
            setTimeout(() => window.location.href = destino, 300);
        });
    });

    // Ajuste para o botão 'Próximo' funcionar corretamente
    const nextButton = document.querySelector(".btn");
    if (nextButton) {
        const nextPages = [
            "index.html",
            "fundamentos.html", 
            "eventosDoScrum.html", 
            "pratica.html", 
            "vantagensDesafiosEConclusão.html"
        ];

        let currentPageIndex = nextPages.findIndex(page => page === window.location.pathname.split("/").pop());

        if (currentPageIndex >= 0 && currentPageIndex < nextPages.length - 1) {
            nextButton.href = nextPages[currentPageIndex + 1];
        } else {
            nextButton.href = nextPages[0]; // volta ao começo se chegar ao final
        }
    }
});
