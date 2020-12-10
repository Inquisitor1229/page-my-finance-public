let hint_close = document.getElementById("hint-close"),
    card_number_event_array = [document.getElementById("card-number-0"), document.getElementById("card-number-1")],
    card_number_value_array = ["•••• •••• •••• 4563", "•••• •••• •••• 1994"];

hint_close.addEventListener("click", () => {
    let hint_content = document.getElementById("hint-content")
    hint_content.style.display = "none";
})


for (let i = 0; i<=card_number_event_array.length-1; i++) {
    card_number_event_array[i].addEventListener("click", () => {
        let card_input =  document.getElementById("card-number-input");
        card_input.value = card_number_value_array[i];
    })
};

let panelItem = document.querySelectorAll('.operations__table-row'),
    active = document.getElementsByClassName('operations__table-row--active');
Array.from(panelItem).forEach(function(item, i, panelItem) {
    item.addEventListener('click', function(e) {
        this.classList.toggle('operations__table-row--active');
    });
});

let more_operations = document.getElementById("more-operations");

more_operations.addEventListener("click", () => {
    let more_rows = document.getElementById("more-rows")
    more_rows.style.display = "block";
    more_operations.style.display = "none";
})

let left_menu_button = document.getElementById("left-menu-button");

left_menu_button.addEventListener("click", () => {
    let left_menu = document.getElementById("left-menu");
    left_menu.style.display == "flex" ? left_menu.style.display = "none" : left_menu.style.display = "flex";
})

let left_menu_close = document.getElementById("left-menu-close");

left_menu_close.addEventListener("click", () => {
    let left_menu = document.getElementById("left-menu");
    left_menu.style.display = "none";
})