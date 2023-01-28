var guestList = document.querySelector('.guestList');
var buttonAddGuest = document.querySelector('.addNewGuest__button')
var listName = document.querySelectorAll('.guestList__name')
var listPriority = document.querySelectorAll('.guestList__priority')

buttonAddGuest.addEventListener('click', (event) => {
    event.preventDefault();
    if(guestList.classList.value.includes('deactivated')){
        guestList.classList.add('activated')
    }

    createHtmlStructure();

    listName = document.querySelectorAll('.guestList__name');
    listPriority = document.querySelectorAll('.guestList__priority');

    newGuest = document.getElementById('name').value;
    newGuestPriority = document.getElementById('priority').value;

    addData(newGuest, newGuestPriority)
    document.querySelector('.addNewGuest').reset()

})
function createHtmlStructure() {
   guest=guestList.appendChild(document.createElement('div'))

    guest.classList.add('guest')

    addClass
        (guest.appendChild(document.createElement('p')),
            guest.appendChild(document.createElement('p')))

}
function addClass(name, priority) {
    name.classList.add('guestList__name');
    priority.classList.add('guestList__priority')
}
function addData(name, priority) {
    listName[listName.length - 1].textContent = name
    listPriority[listPriority.length - 1].textContent = priority
}

