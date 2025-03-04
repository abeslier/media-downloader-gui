const urlInput = document.getElementById("urlInput");
const downloadButton = document.getElementById("downloadButton");

downloadButton.addEventListener("click", async function () {
    const mediaUrl = urlInput.value.trim();

    if (!mediaUrl) {
        urlInput.classList.add("error");
    } else {
        urlInput.classList.remove("error");
    }

    const _response = await fetch("/api/download", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        //keepalive: true,
        body: JSON.stringify({ mediaUrl }),
    });
});
