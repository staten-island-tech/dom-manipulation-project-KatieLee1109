const DOMSelectors = {
    name: document.getElementById("name"),
    name2: document.getElementById("name2"),
    email: document.getElementById("email"),
    button: document.getElementById("btn"),
    form: document.getElementById("form"),
    clear: document.querySelectorAll(".remove"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (submit) {
    submit.preventDefault();

    let title = DOMSelectors.name.value;
    let title2 = DOMSelectors.name2.value;
    let text = DOMSelectors.email.value;
    console.log(DOMSelectors);
    creation();
    clear();
    function creation() {
        DOMSelectors.button.insertAdjacentHTML(
            `afterend`,
            `<div class="click">
        <h2>your name is ${title} ${title2} and your email is ${text}.</h2>
        </div>`);
        DOMSelectors.title.value = "";
        DOMSelectors.title2.value = "";
        DOMSelectors.text.value = "";
        document.getElementById("form").reset();
    }
    function clear() {
        let clear = document.querySelectorAll(".clear");
        clear.forEach((button) => {
            button.addEventListener("click", function () {
                this.click.remove();
            });
        });
    }
})
