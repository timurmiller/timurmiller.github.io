// Второй блок
const block_2 = document.getElementById('block-2');
block_2.addEventListener('click', makeTransition)

let img2 = '';
const emojiItems = document.querySelectorAll('.emoji-item');
const beesHeader = document.getElementById('bees-header');
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
    if (img2 == '❤️') {
        document.getElementById('block-2-background').src = '../images/5.jpg';
        beesHeader.innerHTML = 'Похоже вы любите пчел'
    } else if (img2 == '👍') {
        document.getElementById('block-2-background').src = '../images/6.jpg';
        beesHeader.innerHTML = 'Вы хорошо относитесь к пчелам'
    } else if (img2 == '😛') {
        document.getElementById('block-2-background').src = '../images/7.jpg';
        beesHeader.innerHTML = 'Нейтральное отношение к пчелам'
    } else if (img2 == '😱') {
        document.getElementById('block-2-background').src = '../images/8.jpg';
        beesHeader.innerHTML = 'Кажется, вы боитесь пчел'
    } else if (img2 == '🤮') {
        document.getElementById('block-2-background').src = '../images/9.jpg';
        beesHeader.innerHTML = 'Пчелы вызывают у вас ненависть и отвращение'
    } else if (img2 == '☺️') {
        document.getElementById('block-2-background').src = '../images/9.jpg';
        beesHeader.innerHTML = 'Похоже у вас хорошее чувство юмора'
    }

    emojiItems.forEach(emoji=> {
        emoji.removeEventListener('click', choseAnswer)
    })
}

const closeBtn = document.getElementById('close-bees');
closeBtn.addEventListener('click', ()=> {
    document.querySelector('.white-box').style = 'visibility: hidden'
})

