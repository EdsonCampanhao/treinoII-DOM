let contador = 0
const formu = document.querySelector('.addNewGuest');
let btnDel=





formu.addEventListener('submit', (event) => {
    event.preventDefault()
    let btnDel = document.querySelectorAll('.btn-del');
    console.log(btnDel);
    btnOfRemove(btnDel);
}
)

function btnOfRemove(btnDel) {
    btnDel.forEach(element => {

        element.addEventListener('click', () => {
            removeGuestObject(element);
            removeGuestOfList(element);
            equalityLocalStorageAndGuests();
        });
    });
}

function removeGuestOfList(guest) {
    guest.parentNode.remove()
}
function removeGuestObject(guest) {
    for (i = 0; i < guests.length; i++) {
        if (guest.dataset.name == guests[i].name) {
            guests.splice([i], 1)
        }
    }
}
