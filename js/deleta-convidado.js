var guestList = document.querySelector('.guestList');
var guest= document.querySelectorAll('.guest')

guestList.addEventListener('dblclick',(event)=>{

    event.target.parentElement.remove()
    
})