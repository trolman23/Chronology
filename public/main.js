const editor = document.querySelector(".editor");
const preview = document.querySelector(".preview");
const converter = new showdown.Converter();

editor.addEventListener("keyup", evt => {
    const {value} = evt.target;
    const html = converter.makeHtml(value);
    preview.innerHTML = html;
});