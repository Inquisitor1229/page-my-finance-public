let hint_close = document.getElementById("hint-close"),
    ref_link = document.getElementById("ref-link"),
    ref_text = document.getElementById("ref-text");

hint_close.addEventListener("click", () => {
    let hint_content = document.getElementById("hint-content")
    hint_content.style.display = "none";
})
/*
ref_link.addEventListener("click", () => {
    let copyText = document.getElementById("ref-text");
    copyText.select();
    document.execCommand("copy");
})

 */