let btn__show = document.getElementById('btn__show');

btn__show.addEventListener('click', () => {
    let userInput = document.getElementById('userInput');
    let userId = userInput.value;
    if (userId.length < 1) {
        alert('Введите ID или имя пользователя');
    } else {

        let getUserId = document.createElement('script');
        getUserId.src = 'https://api.vk.com/method/users.get?user_ids=' + userId + '&fields=screen_name&callback=callbackUser';
        document.getElementsByTagName('head')[0].appendChild(getUserId);
    }

});

document.addEventListener('click', function(e) {
    let next = e.target.parentNode.nextElementSibling;
    let wrap = e.target.parentNode;
    let check = document.querySelector('.photo-section.active');
    let nextSlide = document.querySelector('.photo-list-item.active .next__slide');
    let previousSlide = document.querySelector('.photo-list-item.active .previous__slide');
    let photoItem = document.querySelectorAll('.photo-section');
    // window.addEventListener('keydown', function(e) {
    //     if (e.keyCode == 27) {
    //         wrap.classList.remove('active');
    //         e.target.parentNode.childNodes[5].classList.remove('active');
    //     }
    // });
    for (let i = 0; i < photoItem.length; i++) {
        if (e.target == photoItem[i]) {
            photoItem[i].parentNode.classList.add('active');
        }
    }
    if (e.target == document.querySelector('.photo-list-item.active')) {
        wrap.classList.remove('active');
        e.target.classList.remove('active');
        e.target.childNodes[5].classList.remove('active');
    }
    if (e.target == document.querySelector('.photo-list-item.active .photo-section')) {
        e.target.classList.add('active');
        if (e.target == check) {
            e.target.classList.add('next');
        }
    }
    if (e.target == previousSlide) {
        if (wrap.previousElementSibling == null) {
            clearList();
            wrap.childNodes[5].classList.remove('active');
        } else {
            wrap.classList.remove('active');
            wrap.childNodes[5].classList.remove('active');
            wrap.previousElementSibling.classList.add('active');
            wrap.previousElementSibling.childNodes[5].classList.add('active');
        }
    }
    if (e.target == nextSlide) {
        if (wrap.nextElementSibling == null) {
            clearList();
            wrap.childNodes[5].classList.remove('active');
        } else {
            wrap.classList.remove('active');
            wrap.childNodes[5].classList.remove('active');
            wrap.nextElementSibling.classList.add('active');
            wrap.nextElementSibling.childNodes[5].classList.add('active');
        }
    }
    if (e.target == document.querySelector('.photo-list-item.active .photo-section.active.next')) {
        if (next == null) {
            clearList();
        } else {
            let imgActive = next.childNodes[5];
            clearList();
            next.classList.add('active');
            imgActive.classList.add('active');
        }
    }

    function clearList() {
        wrap.classList.remove('active');
        e.target.classList.remove('active');
        e.target.classList.remove('next');
    }
});
