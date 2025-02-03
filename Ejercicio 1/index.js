document.addEventListener("DOMContentLoaded", () => {
    fetch("Biblioteca.json")
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("gallery");

            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    
                    <h2>${item.titulo}</h2>
                    <img src="${item.portada}" alt="${item.titulo}">
                    <div class="author"><strong>Autor:</strong> ${item.autor}</div>
                    <p><strong>Género:</strong> ${item.genero}</p>
                    <p><strong>Año:</strong> ${item.año}</p>
                `;
                gallery.appendChild(card);
            });
        })
        .catch(error => console.error("Error cargando datos:", error));
});
