var guestTable = document.querySelector('.guestTable');
var buttonAddGuest = document.querySelector('.addNewGuest__button')
var listName = document.querySelectorAll('.guestTable__name')
var listPriority = document.querySelectorAll('.guestTable__priority')

buttonAddGuest.addEventListener('click', (event) => {
    event.preventDefault()

    createHtmlStructure();

    listName = document.querySelectorAll('.guestTable__name');
    listPriority = document.querySelectorAll('.guestTable__priority');

    newGuest = document.getElementById('name').value;
    newGuestPriority = document.getElementById('priority').value;

    addData(newGuest, newGuestPriority)
    document.querySelector('.addNewGuest').reset()

})
function createHtmlStructure() {
   guest=guestTable.appendChild(document.createElement('div'))
   console.log(guest)

    guest.classList.add('guest')

    addClass
        (guest.appendChild(document.createElement('p')),
            guest.appendChild(document.createElement('p')))

}
function addClass(name, priority) {
    name.classList.add('guestTable__name');
    priority.classList.add('guestTable__priority')
}
function addData(name, priority) {
    listName[listName.length - 1].textContent = name
    listPriority[listPriority.length - 1].textContent = priority
}

