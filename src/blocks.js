// Второй блок
const block_2 = document.getElementById('block-2');
block_2.addEventListener('click', makeTransition)

let img2 = '';
const emojiItems = document.querySelectorAll('.emoji-item');
emojiItems.forEach(emoji=> {
    emoji.addEventListener('click', choseAnswer)
})

function makeTransition() {
    const content = document.querySelector('.white-box');
    document.getElementById('hover-bees').remove();
    content.style = 'visibility: visible';
    block_2.removeEventListener('click', makeTransition);
}

function choseAnswer(e) {
    img2 = e.target.textContent;
    emojiItems.forEach(emoji=> {
        emoji.removeEventListener('click', choseAnswer)
    })
}

const closeBtn = document.getElementById('close-bees');
closeBtn.addEventListener('click', ()=> {
    document.querySelector('.white-box').style = 'visibility: hidden'
    if (img2 == '❤️') {
        document.getElementById('block-2-background').src = '../images/5.jpg';
    } else if (img2 == '👍') {
        document.getElementById('block-2-background').src = '../images/6.jpg';
    } else if (img2 == '😛') {
        document.getElementById('block-2-background').src = '../images/7.jpg';
    } else if (img2 == '😱') {
        document.getElementById('block-2-background').src = '../images/8.jpg';
    } else if (img2 == '🤮') {
        document.getElementById('block-2-background').src = '../images/9.jpg';
    } else if (img2 == '☺️') {
        document.getElementById('block-2-background').src = '../images/10.jpg';
    }
})
