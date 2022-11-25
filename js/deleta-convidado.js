var guestTable = document.querySelector('.guestTable');
var guest= document.querySelectorAll('.guest')

guestTable.addEventListener('dblclick',(event)=>{

    event.target.parentElement.remove()
    
})