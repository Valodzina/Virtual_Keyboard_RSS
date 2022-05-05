// ES6 features in my code :
// 1. let, const
// 2. Multi-line strings
// 3. Arrow Functions

let virtual = document.createElement('div');
virtual.innerHTML = `<div>
<div class="row">
    <div class="button simple Backquote">
        <p>\`</p>
    </div>
    <div class="button simple Digit1">
        <p>1</p>
    </div>
    <div class="button simple Digit2">
        <p>2</p>
    </div>
    <div class="button simple Digit3">
        <p>3</p>
    </div>
    <div class="button simple Digit4">
        <p>4</p>
    </div>
    <div class="button simple Digit5">
        <p>5</p>
    </div>
    <div class="button simple Digit6">
        <p>6</p>
    </div>
    <div class="button simple Digit7">
        <p>7</p>
    </div>
    <div class="button simple Digit8">
        <p>8</p>
    </div>
    <div class="button simple Digit9">
        <p>9</p>
    </div>
    <div class="button simple Digit0">
        <p>0</p>
    </div>
    <div class="button simple Minus">
        <p>-</p>
    </div>
    <div class="button simple Equal">
        <p>=</p>
    </div>
    <div class="button Backspace">
        <p>Backspace</p>
    </div>


</div>
<div class="row">

    <div class="button Tab">
        <p>Tab</p>
    </div>
    <div class="button simple KeyQ">
        <p>q</p>
    </div>
    <div class="button simple KeyW">
        <p>w</p>
    </div>
    <div class="button simple KeyE">
        <p>e</p>
    </div>
    <div class="button simple KeyR">
        <p>r</p>
    </div>
    <div class="button simple KeyT">
        <p>t</p>
    </div>
    <div class="button simple KeyY">
        <p>y</p>
    </div>
    <div class="button simple KeyU">
        <p>u</p>
    </div>
    <div class="button simple KeyI">
        <p>i</p>
    </div>
    <div class="button simple KeyO">
        <p>o</p>
    </div>
    <div class="button simple KeyP">
        <p>p</p>
    </div>
    <div class="button simple BracketLeft">
        <p>[</p>
    </div>
    <div class="button simple BracketRight">
        <p>]</p>
    </div>
    <div class="button simple Backslash">
        <p>\\</p>
    </div>

</div>
<div class="row">
    <div class="button CapsLock">
        <p>CapsLock</p>
    </div>
    <div class="button simple KeyA">
        <p>a</p>
    </div>
    <div class="button simple KeyS">
        <p>s</p>
    </div>
    <div class="button simple KeyD">
        <p>d</p>
    </div>
    <div class="button simple KeyF">
        <p>f</p>
    </div>
    <div class="button simple KeyG">
        <p>g</p>
    </div>
    <div class="button simple KeyH">
        <p>h</p>
    </div>
    <div class="button simple KeyJ">
        <p>j</p>
    </div>
    <div class="button simple KeyK">
        <p>k</p>
    </div>
    <div class="button simple KeyL">
        <p>l</p>
    </div>
    <div class="button simple Semicolon">
        <p>;</p>
    </div>
    <div class="button simple Quote">
        <p>'</p>
    </div>
    <div class="button Enter">
        <p>Enter</p>
    </div>


</div>
<div class="row">
    <div class="button ShiftLeft">
        <p>Shift</p>
    </div>
    <div class="button simple KeyZ">
        <p>z</p>
    </div>
    <div class="button simple KeyX">
        <p>x</p>
    </div>
    <div class="button simple KeyC">
        <p>c</p>
    </div>
    <div class="button simple KeyV">
        <p>v</p>
    </div>
    <div class="button simple KeyB">
        <p>b</p>
    </div>
    <div class="button simple KeyN">
        <p>n</p>
    </div>
    <div class="button simple KeyM">
        <p>m</p>
    </div>
    <div class="button simple Comma">
        <p>,</p>
    </div>
    <div class="button simple Period">
        <p>.</p>
    </div>
    <div class="button simple Slash">
        <p>/</p>
    </div>
    <div class="button ShiftRight">
        <p>Shift</p>
    </div>


</div>

<div class="row">
    <div class="button ControlLeft">
        <p>ctrl</p>
    </div>
    <div class="button MetaLeft">
        <p>win</p>
    </div>
    <div class="button AltLeft">
        <p>Alt</p>
    </div>
    <div class="button Space">
        <p>space</p>
    </div>
    <div class="button AltRight">
        <p>Alt</p>
    </div>

    <div class="button ControlRight">
        <p>ctrl</p>
    </div>
    <div class="button ArrowLeft">
        <p>left</p>
    </div>
    <div class="group">
        <div class="button ArrowUp">
            <p>up</p>
        </div>
        <div class="button ArrowDown">
            <p>down</p>
        </div>
    </div>
    <div class="button ArrowRight">
        <p>right</p>
    </div>

</div>
<form action="">
    <textarea id="area" name="area" readonly="true"></textarea>
</form>
<p class="info">to change the language: alt+shift</p>
<p class="info">made in Windows10</p>
</div>`

document.body.prepend(virtual)

const buttons = document.querySelectorAll('.button');
let textarea = document.forms[0].elements.area;
let language = "en";
const RUAlphabet = 'ёйцукенгшщзхъфывапролджэячсмитьбю.'
const ENAlphabet = "`qwertyuiop[]asdfghjkl;'zxcvbnm,./"

let CapsIsActive = false;
let AltShiftPressed = false;
console.log(sessionStorage.getItem('lang'))
if (sessionStorage.getItem('lang') !== null) {
    if (sessionStorage.getItem('lang') == 'ru') {
        language = 'en';
        changeLanguage();

    } else if (sessionStorage.getItem('lang') == 'en') {
        language = 'ru';
        changeLanguage();

    }
}

if (buttons.length > 0) {
    buttons.forEach(btn => {
        btn.addEventListener("mousedown", function(e) {



            if (!btn.classList.contains('CapsLock')) {
                btn.classList.add('active');
            }


            if (btn.classList.contains('simple')) {
                textarea.value = textarea.value + btn.querySelector('p').textContent;
            }



            if (btn.classList.contains('Space')) {
                textarea.value = textarea.value + " ";
            }
            if (btn.classList.contains('Backspace')) {
                textarea.value = textarea.value.slice(0, textarea.value.length - 1);
            }
            if (btn.classList.contains('Tab')) {

                textarea.value = textarea.value + "\t";
            }
            if (btn.classList.contains('Enter')) {

                textarea.value = textarea.value + "\n";
            }
            if (btn.classList.contains('CapsLock')) {
                CapsLockLetters();
                document.querySelector('.CapsLock').classList.toggle('active')
                CapsIsActive = !CapsIsActive;

            }


            if (btn.classList.contains('ShiftLeft')) {

                CapsLockLetters();
                hideDigits()
            }
            if (btn.classList.contains('ShiftRight')) {

                CapsLockLetters();
                hideDigits()
            }

            if (btn.classList.contains('ArrowLeft')) {

                textarea.value = textarea.value + "←";

            }
            if (btn.classList.contains('ArrowUp')) {

                textarea.value = textarea.value + "↑";

            }
            if (btn.classList.contains('ArrowRight')) {

                textarea.value = textarea.value + "→";

            }
            if (btn.classList.contains('ArrowDown')) {

                textarea.value = textarea.value + "↓";

            }

        });
        btn.addEventListener('mouseup', function(e) {
            if (!btn.classList.contains('CapsLock')) {
                setTimeout(function() {
                    btn.classList.remove('active');

                }, 300);
            }

            if (btn.classList.contains('ShiftLeft') || btn.classList.contains('ShiftRight')) {
                CapsLockLetters();
                returnDigits();
            }

        });
    });


}

document.addEventListener('keydown', function(event) {
    console.log(event.code);
    if (event.code !== 'CapsLock') {
        if (document.querySelector('.' + event.code) !== null)
            document.querySelector('.' + event.code).classList.add('active')
    }

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains(event.code) && buttons[i].classList.contains('simple')) {
            textarea.value = textarea.value + buttons[i].querySelector('p').textContent;
        }
    }


    if (event.code == 'Space') {
        textarea.value = textarea.value + " ";
    }
    if (event.code == 'Backspace') {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }
    if (event.code == 'Tab') {
        event.preventDefault();
        textarea.value = textarea.value + "\t";
    }
    if (event.code == 'Enter') {
        event.preventDefault();
        textarea.value = textarea.value + "\n";
    }
    if (event.code == 'CapsLock') {
        event.preventDefault();
        CapsLockLetters();
        document.querySelector('.CapsLock').classList.toggle('active')
        CapsIsActive = !CapsIsActive;

    }

    if ((event.code == 'ShiftRight' || event.code == 'ShiftLeft') && (event.altKey)) {
        console.log(language);
        changeLanguage();
        AltShiftPressed = true;

    } else {
        if (event.code == 'ShiftLeft') {
            event.preventDefault();
            CapsLockLetters();
            hideDigits()
        }
        if (event.code == 'ShiftRight') {
            event.preventDefault();
            CapsLockLetters();
            hideDigits()
        }

    }
    if (event.code == 'MetaLeft' || event.code == 'AltLeft' || event.code == 'AltRight') {
        event.preventDefault();

    }
    if (event.code == 'ArrowLeft') {
        event.preventDefault();
        textarea.value = textarea.value + "←";

    }
    if (event.code == 'ArrowUp') {
        event.preventDefault();
        textarea.value = textarea.value + "↑";

    }
    if (event.code == 'ArrowRight') {
        event.preventDefault();
        textarea.value = textarea.value + "→";

    }
    if (event.code == 'ArrowDown') {
        event.preventDefault();
        textarea.value = textarea.value + "↓";

    }

});



document.addEventListener('keyup', function(event) {
    if (event.code !== 'CapsLock') {
        if (document.querySelector('.' + event.code) !== null)
            document.querySelector('.' + event.code).classList.remove('active')
    }

    if (!AltShiftPressed && (event.code == 'ShiftLeft' || event.code == 'ShiftRight')) {
        CapsLockLetters();
        returnDigits();
    } else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        AltShiftPressed = false;
    }


});


function CapsLockLetters() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('simple')) {
            if (buttons[i].querySelector('p').textContent == buttons[i].querySelector('p').textContent.toLowerCase()) {
                buttons[i].querySelector('p').textContent = buttons[i].querySelector('p').textContent.toUpperCase()

            } else {
                buttons[i].querySelector('p').textContent = buttons[i].querySelector('p').textContent.toLowerCase()

            }

        }
    }
}
const quotsEN = ')!@#$%^&*(';
const quotsRU = ')!"№;%:?*(';


function returnDigits() {
    for (let i = 0; i < 10; i++) {
        document.querySelector('.Digit' + i).querySelector('p').textContent = i;
    }
    document.querySelector('.Minus').querySelector('p').textContent = '-';
    document.querySelector('.Equal').querySelector('p').textContent = '=';
    document.querySelector('.Backslash').querySelector('p').textContent = '\\';
    if (language == 'en') {

        document.querySelector('.Backquote').querySelector('p').textContent = '`';
        document.querySelector('.BracketLeft').querySelector('p').textContent = '[';
        document.querySelector('.BracketRight').querySelector('p').textContent = ']';
        document.querySelector('.Semicolon').querySelector('p').textContent = ';';
        document.querySelector('.Quote').querySelector('p').textContent = '\'';
        document.querySelector('.Comma').querySelector('p').textContent = ',';
        document.querySelector('.Period').querySelector('p').textContent = '.';
        document.querySelector('.Slash').querySelector('p').textContent = '/';
    } else {

        document.querySelector('.Slash').querySelector('p').textContent = '.';

    }

}

function hideDigits() {
    if (language == 'en') {
        for (let i = 0; i < 10; i++) {
            document.querySelector('.Digit' + i).querySelector('p').textContent = quotsEN[i];
        }
        document.querySelector('.Minus').querySelector('p').textContent = '_';
        document.querySelector('.Equal').querySelector('p').textContent = '+';
        document.querySelector('.Backquote').querySelector('p').textContent = '~';
        document.querySelector('.BracketLeft').querySelector('p').textContent = '{';
        document.querySelector('.BracketRight').querySelector('p').textContent = '}';
        document.querySelector('.Backslash').querySelector('p').textContent = '|';
        document.querySelector('.Semicolon').querySelector('p').textContent = ':';
        document.querySelector('.Quote').querySelector('p').textContent = '"';
        document.querySelector('.Comma').querySelector('p').textContent = '<';
        document.querySelector('.Period').querySelector('p').textContent = '>';
        document.querySelector('.Slash').querySelector('p').textContent = '?';
    } else {
        for (let i = 0; i < 10; i++) {
            document.querySelector('.Digit' + i).querySelector('p').textContent = quotsRU[i];
        }
        document.querySelector('.Minus').querySelector('p').textContent = '_';
        document.querySelector('.Equal').querySelector('p').textContent = '+';
        document.querySelector('.Backslash').querySelector('p').textContent = '/';
        document.querySelector('.Slash').querySelector('p').textContent = ',';

    }

}





function changeLanguage() {

    if (language == 'en') {
        let i = 0;
        document.querySelector('.Backquote').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyQ').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyW').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyE').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyR').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyT').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyY').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyU').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyI').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyO').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyP').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.BracketLeft').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.BracketRight').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyA').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyS').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyD').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyF').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyG').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyH').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyJ').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyK').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyL').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.Semicolon').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.Quote').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyZ').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyX').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyC').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyV').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyB').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyN').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.KeyM').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.Comma').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.Period').querySelector('p').textContent = RUAlphabet[i++];
        document.querySelector('.Slash').querySelector('p').textContent = RUAlphabet[i++];

        language = 'ru';
        sessionStorage.setItem('lang', 'ru')
    } else {

        let i = 0;
        document.querySelector('.Backquote').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyQ').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyW').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyE').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyR').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyT').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyY').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyU').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyI').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyO').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyP').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.BracketLeft').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.BracketRight').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyA').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyS').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyD').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyF').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyG').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyH').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyJ').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyK').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyL').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.Semicolon').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.Quote').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyZ').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyX').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyC').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyV').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyB').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyN').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.KeyM').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.Comma').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.Period').querySelector('p').textContent = ENAlphabet[i++];
        document.querySelector('.Slash').querySelector('p').textContent = ENAlphabet[i++];


        language = 'en';
        sessionStorage.setItem('lang', 'en')
    }
    if (CapsIsActive) {
        CapsLockLetters()
    }


}