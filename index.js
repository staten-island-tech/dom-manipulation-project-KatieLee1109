const DOMSelectors = {
    name: document.getElementById("name"),
    name2: document.getElementById("name2"),
    email: document.getElementById("email"),
    button: document.getElementById("btn"),
    form: document.getElementById("form"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (submit) {
    submit.defaultPrevented();

    let title = DOMSelectors.name.value;
    let title2 = DOMSelectors.name2.value;
    let text = DOMSelectors.email.value;
    let button = DOMSelectors.btn.value;
    console.log(DOMSelectors);
    creation();
    clear();
    function creation() {
        DOMSelectors.button.insertAdjacentHTML(
            `afterend`,
            `<div class="info">
        <h2>your name is ${title} ${title2} and your email is ${text}.</h2>
        <button class="clear">Clear</button>
        </div>)`;