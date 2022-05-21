const editor = document.querySelector(".editor");
const preview = document.querySelector(".preview");
const converter = new showdown.Converter();

const render = (value) => {
    const html = converter.makeHtml(value);
    preview.innerHTML = html; 
}
window.sessionStorage.setItem('md', editor.value)
editor.addEventListener("keyup", evt => {
    const {value} = evt.target;
    window.sessionStorage.setItem('md', value);
    render(value);
});

const storedMd = window.sessionStorage.getItem('md');

if(storedMd) {
    editor.value = storedMd;
    render(editor.value);
}