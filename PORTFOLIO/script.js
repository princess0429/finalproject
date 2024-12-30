function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => {
            document.getElementById("content").innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
