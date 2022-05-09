import '../css/normalize.css'
import '../css/style.css'

const { symbolStatesEnum, keysIn1Row, keysIn2Row, keysIn3Row, keysIn4Row, keysIn5Row } = require('./const.js');


function createDOM() {
    function createElement(tagName, classArray, text) {
        const elem = document.createElement(tagName);

        classArray.forEach((classStr) => elem.classList.add(classStr));

        if (text !== undefined) elem.innerHTML = text;

        return elem;
    }

    function createDiv(classArray, text) {
        return createElement('div', classArray, text);
    }

    function createSpan(classArray, text) {
        return createElement('span', classArray, text);
    }

    function createKeyboard() {

        function createRow(keyArray) {
            function createKey(key) {


                function createRus(lang) {
                    const span = createSpan(['rus']);
                    const caseDownSpan = createSpan(['caseDown'], key.rus.caseDown);
                    const caseUpSpan = createSpan(['caseUp', 'hidden'], key.rus.caseUp);
                    const capsSpan = createSpan(['caps', 'hidden'], key.rus.caps);
                    const shiftCapsSpan = createSpan(
                        ['shiftCaps', 'hidden'],
                        key.rus.shiftCaps,
                    );

                    if (lang !== 'rus') {
                        span.classList.add('hidden');
                        caseDownSpan.classList.add('hidden');
                    }

                    span.append(caseDownSpan);
                    span.append(caseUpSpan);
                    span.append(capsSpan);
                    span.append(shiftCapsSpan);

                    return span;
                }

                function createEng(lang) {
                    const span = createSpan(['eng']);
                    const caseDownSpan = createSpan(['caseDown'], key.eng.caseDown);
                    const caseUpSpan = createSpan(['caseUp', 'hidden'], key.eng.caseUp);
                    const capsSpan = createSpan(['caps', 'hidden'], key.eng.caps);
                    const shiftCapsSpan = createSpan(
                        ['shiftCaps', 'hidden'],
                        key.eng.shiftCaps,
                    );

                    if (lang !== 'eng') {
                        span.classList.add('hidden');
                        caseDownSpan.classList.add('hidden');
                    }


                    span.append(caseDownSpan);
                    span.append(caseUpSpan);
                    span.append(capsSpan);
                    span.append(shiftCapsSpan);

                    return span;
                }

                const lang = localStorage.getItem('lang') == null ?
                    'rus' :
                    localStorage.getItem('lang');

                const divKeyboardKey = createDiv(['key', key.key]);

                divKeyboardKey.append(createRus(lang));
                divKeyboardKey.append(createEng(lang));

                return divKeyboardKey;
            }

            const divKeyboardRow = createDiv(['kb-row']);

            for (let index = 0; index < keyArray.length; index += 1) {
                const key = createKey(keyArray[index]);
                divKeyboardRow.append(key);
            }

            return divKeyboardRow;
        }

        const kb = createDiv(['kb']);
        kb.id = 'kb';

        kb.append(createRow(keysIn1Row));
        kb.append(createRow(keysIn2Row));
        kb.append(createRow(keysIn3Row));
        kb.append(createRow(keysIn4Row));
        kb.append(createRow(keysIn5Row));

        return kb;
    }

    const divContent = createDiv(['content']);
    const txtarea = createElement('textarea', ['textarea']);
    txtarea.name = 'textarea';
    txtarea.id = 'textarea';
    txtarea.cols = '50';
    txtarea.rows = '10';

    const kb = createKeyboard();
    const pLanguage = createElement(
        'p', ['language'],
        'Для переключения языка комбинация: левыe ctrl + shift',
    );

    divContent.append(txtarea);
    divContent.append(kb);
    divContent.append(pLanguage);

    document.body.append(divContent);
}

function insertTextToTextarea(el, addText) {
    if (el.qselectionStart === el.selectionEnd) {
        el.setRangeText(addText, el.selectionStart, el.selectionEnd, 'end');
    } else {
        el.setRangeText(addText, el.selectionStart, el.selectionEnd, 'end');
    }
}

function deleteClick(textElement) {
    function getCaret(el) {
        if (el.selectionStart) {
            if (el.selectionStart === el.selectionEnd) {
                el.setRangeText('', el.selectionStart, el.selectionEnd + 1, 'start');
            } else {
                el.setRangeText('', el.selectionStart, el.selectionEnd, 'start');
            }
        } else if (document.selection) {
            el.focus();
        }
    }

    getCaret(textElement);
}

function backspaceClick(textElement) {
    function getCaret(el) {
        if (el.selectionStart) {
            if (el.selectionStart === el.selectionEnd) {
                el.setRangeText('', el.selectionStart - 1, el.selectionEnd, 'start');
            } else {
                el.setRangeText('', el.selectionStart, el.selectionEnd, 'start');
            }
        } else if (document.selection) {
            el.focus();
        }
    }

    getCaret(textElement);
}

function isActiveCapsLock() {
    return document.querySelector('div.CapsLock').classList.contains('active');
}

function isActiveShift() {
    return (
        document.querySelector('div.ShiftLeft').classList.contains('active') ||
        document.querySelector('div.ShiftRight').classList.contains('active')
    );
}

function isEnglish() {
    const key = document.querySelector('.kb .key');
    return !key.querySelector('span.eng').classList.contains('hidden');
}

function getActiveLanguageSpans() {
    return isEnglish() ?
        document.querySelectorAll('span.eng') :
        document.querySelectorAll('span.rus');
}

function getActiveState() {
    const activeLanguageSpan = getActiveLanguageSpans()[0];

    const caseDownSpan = activeLanguageSpan
        .querySelector('span.caseDown')
        .classList.contains('hidden') ?
        undefined :
        symbolStatesEnum.caseDown;
    const caseUpSpan = activeLanguageSpan
        .querySelector('span.caseUp')
        .classList.contains('hidden') ?
        undefined :
        symbolStatesEnum.caseUp;
    const capsSpan = activeLanguageSpan
        .querySelector('span.caps')
        .classList.contains('hidden') ?
        undefined :
        symbolStatesEnum.caps;
    const shiftCapsSpan = activeLanguageSpan
        .querySelector('span.shiftCaps')
        .classList.contains('hidden') ?
        undefined :
        symbolStatesEnum.shiftCaps;

    if (caseDownSpan !== undefined) {
        return caseDownSpan;
    }
    if (caseUpSpan !== undefined) {
        return caseUpSpan;
    }
    if (capsSpan !== undefined) {
        return capsSpan;
    }
    if (shiftCapsSpan !== undefined) {
        return shiftCapsSpan;
    }

    return undefined;
}

function changeSymbolStateTo(symbolState) {
    const currentState = getActiveState();

    if (JSON.stringify(currentState) === JSON.stringify(symbolState)) {
        return;
    }

    const activeSpans = getActiveLanguageSpans();

    activeSpans.forEach((langSpan) => {
        langSpan.querySelector(currentState.selector).classList.add('hidden');
        langSpan
            .querySelector(symbolState.selector)
            .classList.remove('hidden');
    });
}


function capsLockActivate() {
    if (isActiveShift()) {
        changeSymbolStateTo(symbolStatesEnum.shiftCaps);
    } else {
        changeSymbolStateTo(symbolStatesEnum.caps);
    }
}

function capsLockDeactivate() {
    if (isActiveShift()) {
        changeSymbolStateTo(symbolStatesEnum.caseUp);
    } else {
        changeSymbolStateTo(symbolStatesEnum.caseDown);
    }
}

function shiftActivate() {
    if (isActiveCapsLock()) {
        changeSymbolStateTo(symbolStatesEnum.shiftCaps);
    } else {
        changeSymbolStateTo(symbolStatesEnum.caseUp);
    }
}

function shiftDeactivate() {
    if (isActiveCapsLock()) {
        changeSymbolStateTo(symbolStatesEnum.caps);
    } else {
        changeSymbolStateTo(symbolStatesEnum.caseDown);
    }
}

function getAllActiveAndInactiveLanguageSpans() {
    function getInactiveLanguageSpans() {
        return isEnglish() ?
            document.querySelectorAll('span.rus') :
            document.querySelectorAll('span.eng');
    }

    const activeSpans = getActiveLanguageSpans();
    const inactiveSpan = getInactiveLanguageSpans();

    return { activeSpans, inactiveSpan };
}

function changeLanguage() {
    const allLangSpans = getAllActiveAndInactiveLanguageSpans();
    const symbolState = getActiveState();

    allLangSpans.activeSpans.forEach((item) => {
        item.classList.add('hidden');
        item.querySelector(symbolState.selector).classList.add('hidden');
    });

    allLangSpans.inactiveSpan.forEach((item) => {
        item.classList.remove('hidden');
        item.querySelector(symbolState.selector).classList.remove('hidden');
    });

    if (isEnglish()) {
        localStorage.setItem('lang', 'eng');
    } else {
        localStorage.setItem('lang', 'rus');
    }
}

createDOM();

const kb = document.getElementById('kb');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keydown', (e) => {
    e.preventDefault();
});

kb.addEventListener('mousedown', (e) => {
    const { target } = e;
    const key = target.closest('.key');

    if (key !== null) {
        if (!key.classList.contains('CapsLock')) {
            key.classList.add('active');
        }

        if (key.innerText === 'Shift') {
            shiftActivate();
        } else if (key.classList.contains('CapsLock')) {
            if (isActiveCapsLock()) {
                key.classList.remove('active');
                capsLockDeactivate();
            } else {
                key.classList.add('active');
                capsLockActivate();
            }
        } else if (key.classList.contains('Enter')) {
            insertTextToTextarea(textarea, '\n');
        } else if (key.classList.contains('Tab')) {
            insertTextToTextarea(textarea, '\t');
        } else if (key.classList.contains('Backspace')) {
            backspaceClick(textarea);
        } else if (key.classList.contains('Delete')) {
            deleteClick(textarea);
        } else if (key.classList.contains('Space')) {
            insertTextToTextarea(textarea, ' ');
        } else if (key.innerText === 'Ctrl' || key.innerText === 'Alt' || key.innerText === 'Win') {
            // EMPTY
        } else {
            insertTextToTextarea(textarea, key.innerText);
        }
    }
});

kb.addEventListener('mouseup', (e) => {
    const { target } = e;
    const key = target.closest('.key');

    if (key !== null && !key.classList.contains('CapsLock')) {
        key.classList.remove('active');

        if (key.innerText === 'Shift') {
            shiftDeactivate();
        }
    }

    textarea.focus();
});

kb.addEventListener('mouseout', (e) => {
    const { target } = e;
    const key = target.closest('.key');

    if (key !== null && !key.classList.contains('CapsLock') && key.innerText !== 'Shift') {
        key.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.kb .key.${e.code}`);
    const isKeyExist = !!key;

    if (isKeyExist) {
        if (e.altKey && e.ctrlKey) {
            changeLanguage();
        }

        if (e.code !== 'CapsLock') {
            key.classList.add('active');
        }

        if (e.key === 'Shift') {
            shiftActivate();
        } else if (e.code === 'CapsLock') {
            if (isActiveCapsLock()) {
                key.classList.remove('active');
                capsLockDeactivate();
            } else {
                key.classList.add('active');
                capsLockActivate();
            }
        } else if (e.code === 'Enter') {
            insertTextToTextarea(textarea, '\n');
        } else if (e.code === 'Tab') {
            insertTextToTextarea(textarea, '\t');
        } else if (e.code === 'Backspace') {
            backspaceClick(textarea);
        } else if (e.code === 'Delete') {
            deleteClick(textarea);
        } else if (e.code === 'Space') {
            insertTextToTextarea(textarea, e.key);
        } else if (e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta') {
            textarea.focus();
        } else {
            insertTextToTextarea(textarea, key.innerText);
        }
    }
});

document.addEventListener('keyup', (e) => {
    const key = document.querySelector(
        `.kb .key.active.${e.code}`,
    );

    if (key !== undefined && e.code !== 'CapsLock') {
        key.classList.remove('active');

        if (e.key === 'Shift') {
            shiftDeactivate();
        }
    }

    textarea.focus();
});