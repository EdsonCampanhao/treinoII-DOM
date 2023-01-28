const guestList = document.querySelector('.guestList');
const buttonAddGuest = document.querySelector('.addNewGuest__button')
const guests = []

buttonAddGuest.addEventListener('click', (event) => {
    event.preventDefault();
    if (guestList.classList.value.includes('deactivated')) {
        guestList.classList.add('activated')
    }
    createGuest();
    addGuestInHtml(newGuest);
    btnDell=document.querySelectorAll('.btn-dell')
    document.querySelector('.addNewGuest').reset()
})
function createGuest() {
    newGuest = {
        'name': document.getElementById('name').value,
        'priority': document.getElementById('priority').value
    }
    guests.push(newGuest)

    return newGuest
}
function addGuestInHtml(guest){

    guestList.innerHTML+=
    `<div class='guest'>
        <p class='guestList__name'>${newGuest.name}</p>
        <p class='guestList__priority'>${newGuest.priority}</p>
        <img src='./img/cross-circle.png' class='btn-dell'></img>
    </div>`
}
function addClass(name, priority) {
    name.classList.add('guestList__name');
    priority.classList.add('guestList__priority')
}


