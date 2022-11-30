const DOMSelectors = {
    name: document.getElementById("name"),
    name2: document.getElementById("name2"),
    email: document.getElementById("email"),
    button: document.getElementById("btn"),
    form: document.getElementById("form"),
    clear: document.querySelectorAll(".remove"),
    scrub: document.querySelector(".scrub")
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
        DOMSelectors.scrub.insertAdjacentHTML(
            `beforeend`,
            `<div class="click">
        <h2>your name is ${title} ${title2} and your email is ${text}.</h2>
        <button class="clear">Clear</button>
        </div>
      `);
        DOMSelectors.name.value = "";
        DOMSelectors.name2.value = "";
        DOMSelectors.email.value = "";
        document.getElementById("form").reset();
    }
    function clear() {
        let clear = document.querySelectorAll(".clear");
        clear.forEach((clear) => {
            clear.addEventListener("click", (e) => {
                e.target.parentElement.remove();
            });
        });
    }
})
