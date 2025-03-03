document.getElementById("downloadButton").addEventListener(
    "click",
    function () {
        const urlInput = document.getElementById("urlInput");

        if (!urlInput.value.trim()) {
            urlInput.classList.add("error");
        } else {
            urlInput.classList.remove("error");
        }
    },
);
