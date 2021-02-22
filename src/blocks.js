'use strict';

const modalHeader = document.getElementById('modal-header-text');
const modalBody = document.getElementById('modal-body-text');
const closeBtn = document.getElementById('close-modal');
const shareBlock = document.getElementById('share');

// Закрыть и очистить модальное окно + проверка на открытые плашки
closeBtn.addEventListener('click', ()=> {
    modalBody.innerHTML = '';
    modalHeader.innerHTML = '';
    if (canShare()) {
        shareBlock.className = 'd-flex';
    };
})   


// Открытые плашки
const share = {
    block_1: false,
    block_2: false,
    block_3: false,
    block_4: false,
    block_5: false,
    block_6: false
}


// Проверка на открытые плашки, если все открыты показать кнопки шеринга 
function canShare() {
    for (let item in share) {
        if (share[item] == false) {
            return false
        }
    }
    return true;
}
    

// Первый блок
(function() {
    const block_1 = document.getElementById('block-1');
    block_1.addEventListener('click', makeTransition)
    
    let img1 = '';
    const emojiItems = document.querySelectorAll('.emoji-block-1');
    
    emojiItems.forEach(emoji=> {
        emoji.addEventListener('click', choseAnswer)
    })
    
    function makeTransition() {
        document.getElementById('block-1-hover').remove();
        document.querySelector('.white-box-1').style = 'visibility: visible';
        block_1.removeEventListener('click', makeTransition);
    }
    
    function choseAnswer(e) {
        img1 = e.target.textContent;
        share.block_1 = true
        const ulist = document.createElement('ul');
        const listItem1 = document.createElement('li');
        const listItem2 = document.createElement('li');
        const listItem3 = document.createElement('li');

        listItem1.textContent = 'А ты знал, что в развитых странах богатые люди ездят на велосипедах чаще, чем бедные в 2,5 раза.';
        listItem2.textContent = 'Велосипедисты сокращают потребление бензина на миллиард литров в год. Энергия, которую затрачивает велосипедист на 1000 км, равняется энергии одного литра бензина.';
        listItem3.textContent = 'Cадясь на велосипед, человек становится самым эффективным существом на Земле в плане соотношения усилия и того количества движения, которое это усилие создаёт. Никакое другое живое существо на планете не тратит так мало энергии для своего передвижения. И это если рассматривать только езду по ровной поверхности. Когда же вы едете на байке под горку, энергия притяжения земли ещё больше снижает потребность в мышечных затратах, сводя их к минимуму'
        ulist.appendChild(listItem1);
        ulist.appendChild(listItem2);
        ulist.appendChild(listItem3);
    

        modalBody.appendChild(ulist);
        if (img1 == '🚗') {
            document.getElementById('block-1-background').src = '../images/1.jpg';
            modalHeader.innerHTML = 'Автомобили для вас в приоритете'
        } else if (img1 == '🚲') {
            document.getElementById('block-1-background').src = '../images/2.jpg';
            modalHeader.innerHTML = 'Вы любите велосипед'
        } else if (img1 == '🚎') {
            document.getElementById('block-1-background').src = '../images/3.jpg';
            modalHeader.innerHTML = 'Похоже вы поклонник общественного транспорта'
        } else if (img1 == '🚀') {
            document.getElementById('block-1-background').src = '../images/4.jpg';
            modalHeader.innerHTML = 'Не думаете о выбросах углекислого газа совсем!'
        }
    
        emojiItems.forEach(emoji=> {
            emoji.removeEventListener('click', choseAnswer)
        })
        document.querySelector('.white-box-1').style = 'visibility: hidden'
    }
})();



// Второй блок
(function() {
    const block_2 = document.getElementById('block-2');
    block_2.addEventListener('click', makeTransition)
    
    let img2 = '';
    const emojiItems = document.querySelectorAll('.emoji-block-2');

    emojiItems.forEach(emoji=> {
        emoji.addEventListener('click', choseAnswer)
    })
    
    function makeTransition() {
        document.getElementById('block-2-hover').remove();
        document.querySelector('.white-box-2').style = 'visibility: visible';
        block_2.removeEventListener('click', makeTransition);
    }
    
    function choseAnswer(e) {
        img2 = e.target.textContent;
        share.block_2 = true
        modalBody.innerHTML = 'А вы знали что каждый день количество пчел во всем мире становится меньше на 120 миллионов? Такими темпами все пчелы исчезнут через 277 лет. Пчелы являются ключевым звеном в опылении растений, фруктов, овощей, то есть их размножении. Без пчел не будет фруктов и овощей, к которым мы привыкли. То есть вообще никаких. Это действительно будет сильнейшее бедствие для нашей планеты. Берегите пчел!';
        if (img2 == '❤️') {
            document.getElementById('block-2-background').src = '../images/5.jpg';
            modalHeader.innerHTML = 'Похоже вы любите пчел'
        } else if (img2 == '👍') {
            document.getElementById('block-2-background').src = '../images/6.jpg';
            modalHeader.innerHTML = 'Вы хорошо относитесь к пчелам'
        } else if (img2 == '😛') {
            document.getElementById('block-2-background').src = '../images/7.jpg';
            modalHeader.innerHTML = 'Нейтральное отношение к пчелам'
        } else if (img2 == '😱') {
            document.getElementById('block-2-background').src = '../images/8.jpg';
            modalHeader.innerHTML = 'Кажется, вы боитесь пчел'
        } else if (img2 == '🤮') {
            document.getElementById('block-2-background').src = '../images/9.jpg';
            modalHeader.innerHTML = 'Пчелы вызывают у вас ненависть и отвращение'
        } else if (img2 == '☺️') {
            document.getElementById('block-2-background').src = '../images/9.jpg';
            modalHeader.innerHTML = 'Похоже у вас хорошее чувство юмора'
        }
    
        emojiItems.forEach(emoji=> {
            emoji.removeEventListener('click', choseAnswer)
        })
        document.querySelector('.white-box-2').style = 'visibility: hidden'
    }    
})();


// Третий блок
(function() {
    const block_3 = document.getElementById('block-3');
    block_3.addEventListener('click', makeTransition)
    
    let img3 = '';
    const emojiItems = document.querySelectorAll('.emoji-block-3');

    emojiItems.forEach(emoji=> {
        emoji.addEventListener('click', choseAnswer)
    })
    
    function makeTransition() {
        document.getElementById('block-3-hover').remove();
        document.querySelector('.white-box-3').style = 'visibility: visible';
        block_3.removeEventListener('click', makeTransition);
    }
    
    function choseAnswer(e) {
        img3 = e.target.textContent;
        share.block_3 = true
        modalBody.innerHTML = 'В среднем за жизнь дерево поглощает порядка тонны углекислого газа, а для одного листа А4 требуется 20-30 грамм древесины! Более 80% процентов всех вырубленных лесов возобновляются, частично самостоятельно, частично с человеческой помощью. Тем не менее, каждый год на планете становится примерно на 95-97 миллионов деревьев меньше.';
        if (img3 == '❤️') {
            document.getElementById('block-3-background').src = '../images/11.jpg';
            modalHeader.innerHTML = 'Вы очень хорошо относитесь к деревьям'
        } else if (img3 == '🙏') {
            document.getElementById('block-3-background').src = '../images/12.jpg';
            modalHeader.innerHTML = 'Вы определенно за деревья в городе'
        } else if (img3 == '🌲') {
            document.getElementById('block-3-background').src = '../images/13.jpg';
            modalHeader.innerHTML = 'У вас нейтральное отношение к деревьям'
        } else if (img3 == '❄️') {
            document.getElementById('block-3-background').src = '../images/14.jpg';
            modalHeader.innerHTML = 'Похоже у вас не очень хорошее отношение к деревьям'
        } else if (img3 == '🔥') {
            document.getElementById('block-3-background').src = '../images/15.jpg';
            modalHeader.innerHTML = 'Что ж вы совсем не любите деревья?'
        } 

        emojiItems.forEach(emoji=> {
            emoji.removeEventListener('click', choseAnswer)
        })
        document.querySelector('.white-box-3').style = 'visibility: hidden'
    }    
})();

// Четвертый блок
(function() {
    const block_4 = document.getElementById('block-4');
    block_4.addEventListener('click', makeTransition)
    
    let img4 = '';
    const emojiItems = document.querySelectorAll('.emoji-block-4');

    emojiItems.forEach(emoji=> {
        emoji.addEventListener('click', choseAnswer)
    })
    
    function makeTransition() {
        document.getElementById('block-4-hover').remove();
        document.querySelector('.white-box-4').style = 'visibility: visible';
        block_4.removeEventListener('click', makeTransition);
    }
    
    function choseAnswer(e) {
        img4 = e.target.textContent;
        share.block_4 = true
        modalBody.innerHTML = 'В мире производится более 300 миллионов тонн пластика в год, но только 20−25% пластика идёт на вторичную переработку. На текущий момент уже около 40 стран мира ввело ряд ограничений на использование пластика, запретив, например, пластиковые пакеты и одноразовую посуду. Им питаются тысячи видов рыб, принимая его за планктон. Этими рыбами питаются птицы… Таким образом, пластик уже встроен в пищевую цепочку снизу доверху – ведь мы тоже едим эту самую рыбу. А содержащиеся в ней пластиковые элементы чрезвычайно вредны, порой даже токсичны.';
        if (img4 == '👍') {
            document.getElementById('block-4-background').src = '../images/16.jpg';
            modalHeader.innerHTML = 'Вы мало едите рыбы и в вас пока немного пластиковых калорий'
        } else if (img4 == '👍👍') {
            document.getElementById('block-4-background').src = '../images/17.jpg';
            modalHeader.innerHTML = 'Ты уже достаточно потребил пластиковых калорий'
        } else if (img4 == '👍👍👍') {
            document.getElementById('block-4-background').src = '../images/18.jpg';
            modalHeader.innerHTML = 'Да ты микропластиковый король, он у тебя в каждой клетке'
        }

        emojiItems.forEach(emoji=> {
            emoji.removeEventListener('click', choseAnswer)
        })
        document.querySelector('.white-box-4').style = 'visibility: hidden'
    }    
})();


// Пятый блок
(function() {
    const block_5 = document.getElementById('block-5');
    block_5.addEventListener('click', makeTransition)
    
    let img5 = '';
    const emojiItems = document.querySelectorAll('.emoji-block-5');

    emojiItems.forEach(emoji=> {
        emoji.addEventListener('click', choseAnswer)
    })
    
    function makeTransition() {
        document.getElementById('block-5-hover').remove();
        document.querySelector('.white-box-5').style = 'visibility: visible';
        block_5.removeEventListener('click', makeTransition);
    }
    
    function choseAnswer(e) {
        img5 = e.target.textContent;
        share.block_5 = true
        modalBody.innerHTML = 'Знаете ли вы, что на один смыв требуется в среднем 8 литров питьевой воды? Весьма поразительно, что, в то время как  мы тратим нашу воду таким образом, почти 800 миллионов человек на Земле имеют недостаток в питьевой воде. Звучит невероятно? По данным The Water Project до 783 миллионов человек не имеют доступа к чистой и безопасной воде. 1 из 9 человек во всем мире не может утолить жажду, потому что  испытывает  недостаток в питьевой воде. Уважайте водное законодательство, так чтобы наши внуки могли получать удовольствие и пить льющуюся из водопроводного крана чистую воду.';
        if (img5 == '💦') {
            document.getElementById('block-5-background').src = '../images/24.jpg';
            modalHeader.innerHTML = 'Похоже вы совсем не экономите воду'
        } else if (img5 == '💧') {
            document.getElementById('block-5-background').src = '../images/25.jpg';
            modalHeader.innerHTML = 'Вы плохо экономите воду'
        } else if (img5 == '🐳') {
            document.getElementById('block-5-background').src = '../images/21.jpg';
            modalHeader.innerHTML = 'Отношение к экономии воды - нейтральное'
        } else if (img5 == '🐠') {
            document.getElementById('block-5-background').src = '../images/23.jpg';
            modalHeader.innerHTML = 'Вы достаточно экономный человек!'
        } else if (img5 == '🌎') {
            document.getElementById('block-5-background').src = '../images/26.jpg';
            modalHeader.innerHTML = 'Похоже вы действительно очень любите экологию и очень экономны'
        }

        emojiItems.forEach(emoji=> {
            emoji.removeEventListener('click', choseAnswer)
        })
        document.querySelector('.white-box-5').style = 'visibility: hidden'
    }   
})();


// Шестой блок
(function() {
    const block_6 = document.getElementById('block-6');
    block_6.addEventListener('click', makeTransition)
    
    let img6 = '';
    const emojiItems = document.querySelectorAll('.emoji-block-6');

    emojiItems.forEach(emoji=> {
        emoji.addEventListener('click', choseAnswer)
    })
    
    function makeTransition() {
        document.getElementById('block-6-hover').remove();
        document.querySelector('.white-box-6').style = 'visibility: visible';
        block_6.removeEventListener('click', makeTransition);
    }
    
    function choseAnswer(e) {
        img6 = e.target.alt;
        share.block_6 = true
        modalBody.innerHTML = 'Порой логика некоторых людей дает сбой и им приходится не думая голосовать за деградантов, которые чудом и обманом попали к власти. Но в наших силах все кардинально изменить.';
        if (img6 == 'elon') {
            document.getElementById('block-6-background').src = '../images/28.jpg';
            modalHeader.innerHTML = 'Вы бы купили себе электромобиль Тесла - правильный выбор и экономное решение, но и не отказались бы полететь в космос - а это уж серьезные выбросы в атмосферу'
        } else if (img6 == 'greta') {
            document.getElementById('block-6-background').src = '../images/27.jpg';
            modalHeader.innerHTML = 'Вы за возобновляемую энергию и сильно беспокоитесь за глобальное потепление. Грета Тунберг - ваш герой.'
        } else if (img6 == 'putin') {
            document.getElementById('block-6-background').src = '../images/29.jpg';
            modalHeader.innerHTML = 'Вам похоже безразлична судьба планеты (как и нашей страны), в глобальное потепление не верите. Путин - ваш герой.'
        } 

        emojiItems.forEach(emoji=> {
            emoji.removeEventListener('click', choseAnswer)
        })
        document.querySelector('.white-box-6').style = 'visibility: hidden'
    }    
})();









