const DOMSelectors = {
    title: document.getElementById("name"),
    title2: document.getElementById("name2"),
    text: document.getElementById("email"),
    button: document.getElementById("btn"),
    form: document.getElementById("form"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (submit) {
    submit.defaultPrevented

}
)











