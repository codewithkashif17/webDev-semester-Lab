fetch("/Docs/html/html-lists.md")
    .then(response => {
        if (!response.ok) {
            throw new Error("Markdown file nahi mili.");
        }

        return response.text();
    })
    .then(markdown => {
        document.getElementById("docs").innerHTML =
            marked.parse(markdown);
    })
    .catch(error => {
        document.getElementById("docs").innerHTML =
            `<p style="color:red;">Error: ${error.message}</p>`;
    });
