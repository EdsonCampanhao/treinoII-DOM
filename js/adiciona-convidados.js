const guestList = document.querySelector('.guestList');
const buttonAddGuest = document.querySelector('.addNewGuest__button')
let guests = []

buttonAddGuest.addEventListener('click', (event) => {
   
    if (guestList.classList.value.includes('deactivated')) {
        guestList.classList.add('activated')
    }
    createGuest();
    addGuestInHtml(newGuest);
    document.querySelector('.addNewGuest').reset()
})
function createGuest() {
    newGuest = {
        'name': document.getElementById('name').value,
        'priority': document.getElementById('priority').value,
    }
    guests.push(newGuest)
    equalityLocalStorageAndGuests()

    return newGuest
}
function addGuestInHtml(guest){

    guestList.innerHTML+=
    `<div class='guest'>
        <p class='guestList__name'>${guest.name}</p>
        <p class='guestList__priority'>${guest.priority}</p>
        <img src='./img/cross-circle.png' class='btn-del' data-name='${guest.name}'></img>
    </div>`
}
function addClass(name, priority) {
    name.classList.add('guestList__name');
    priority.classList.add('guestList__priority')
}


