// Второй блок
const block_2 = document.getElementById('block-2');
block_2.addEventListener('click', (e)=> {
    block_2.classList.toggle('scaled');
    console.log(block_2.firstElementChild.firstElementChild.firstElementChild)
    
    e.preventDefault();
})

