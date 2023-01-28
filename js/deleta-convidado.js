let btnDell=document.querySelectorAll('.btn-dell')
guests.forEach(Element=>console.log(Element))
btnDell.forEach(element=>
    element.addEventListener('click',()=>{
    element.parentNode.remove()
    console.log('alo')}
    )


)
