let itensOfLocalStorage = JSON.parse(localStorage.getItem('guests')) || []

window.addEventListener('load', () => {
    guests = itensOfLocalStorage
    if(guests.length>0){
        guestList.classList.add('activated');
        guests.forEach((e)=>{
            addGuestInHtml(e)
            btnDel = document.querySelectorAll('.btn-del')
            btnOfRemove(btnDel)
        });
    }

})

function equalityLocalStorageAndGuests(){
    itensOfLocalStorage = localStorage.setItem('guests', JSON.stringify(guests))
}
