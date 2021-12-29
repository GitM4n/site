'use strict'
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}
/*
const pc = document.querySelector('._pc');
if (pc) {
    window.addEventListener('resize', () => {
        let mql = window.matchMedia("(max-width: 800px)");
        let nql = window.matchMedia("(min-width: 800px)");
        if (mql.matches) {
            document.getElementById('lastli').after(document.getElementById('contct'));
        } else if (nql.matches) {
            document.getElementById('head').after(document.getElementById('contct'));
        }
    });
}*/

const iconMenu = document.querySelector('.burger-icon');
if (iconMenu) {
    const menuList = document.querySelector('.head');
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');
    });
};



let mql = window.matchMedia("(max-width: 800px)");
if (mql.matches) {
    document.getElementById('firstli').before(document.getElementById('contct'));
} else {
    document.getElementById('headburger').after(document.getElementById('contct'));
}



window.addEventListener('resize', () => {
    if (mql.matches) {
        document.getElementById('firstli').before(document.getElementById('contct'));
    } else {
        document.getElementById('headburger').after(document.getElementById('contct'));
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('FormID');
    form.addEventListener("submit", formSubmit);

    async function formSubmit(e) {
        e.preventDefault();

        let error = formValid(form);
    }

    function formValid(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_phone')) {
                if (validatePhone(input) || input.value === "") {
                    formAddError(input);
                    error++;
                }

            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }


        }


    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function validatePhone(input) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);

    }

});