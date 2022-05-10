const symbolStatesEnum = {
  caseDown: { value: 1, name: 'caseDown', selector: '.caseDown' },
  caseUp: { value: 2, name: 'caseUp', selector: '.caseUp' },
  caps: { value: 3, name: 'caps', selector: '.caps' },
  shiftCaps: { value: 4, name: 'shiftCaps', selector: '.shiftCaps' },
};

const keysIn1Row = [{
  key: 'Backquote',
  rus: {
    caseDown: 'ё',
    caseUp: 'Ё',
    caps: 'Ё',
    shiftCaps: 'ё',
  },
  eng: {
    caseDown: '`',
    caseUp: '~',
    caps: '`',
    shiftCaps: '~',
  },
},
{
  key: 'Digit1',
  rus: {
    caseDown: '1',
    caseUp: '!',
    caps: '1',
    shiftCaps: '!',
  },
  eng: {
    caseDown: '1',
    caseUp: '!',
    caps: '1',
    shiftCaps: '!',
  },
},
{
  key: 'Digit2',
  rus: {
    caseDown: '2',
    caseUp: '"',
    caps: '2',
    shiftCaps: '"',
  },
  eng: {
    caseDown: '2',
    caseUp: '@',
    caps: '2',
    shiftCaps: '@',
  },
},
{
  key: 'Digit3',
  rus: {
    caseDown: '3',
    caseUp: '№',
    caps: '3',
    shiftCaps: '№',
  },
  eng: {
    caseDown: '3',
    caseUp: '#',
    caps: '3',
    shiftCaps: '#',
  },
},
{
  key: 'Digit4',
  rus: {
    caseDown: '4',
    caseUp: ';',
    caps: '4',
    shiftCaps: ';',
  },
  eng: {
    caseDown: '4',
    caseUp: '$',
    caps: '4',
    shiftCaps: '$',
  },
},
{
  key: 'Digit5',
  rus: {
    caseDown: '5',
    caseUp: '%',
    caps: '5',
    shiftCaps: '%',
  },
  eng: {
    caseDown: '5',
    caseUp: '%',
    caps: '5',
    shiftCaps: '%',
  },
},
{
  key: 'Digit6',
  rus: {
    caseDown: '6',
    caseUp: ':',
    caps: '6',
    shiftCaps: ':',
  },
  eng: {
    caseDown: '6',
    caseUp: '^',
    caps: '6',
    shiftCaps: '^',
  },
},
{
  key: 'Digit7',
  rus: {
    caseDown: '7',
    caseUp: '?',
    caps: '7',
    shiftCaps: '?',
  },
  eng: {
    caseDown: '7',
    caseUp: '&',
    caps: '7',
    shiftCaps: '&',
  },
},
{
  key: 'Digit8',
  rus: {
    caseDown: '8',
    caseUp: '*',
    caps: '8',
    shiftCaps: '*',
  },
  eng: {
    caseDown: '8',
    caseUp: '*',
    caps: '8',
    shiftCaps: '*',
  },
},
{
  key: 'Digit9',
  rus: {
    caseDown: '9',
    caseUp: '(',
    caps: '9',
    shiftCaps: '(',
  },
  eng: {
    caseDown: '9',
    caseUp: '(',
    caps: '9',
    shiftCaps: '(',
  },
},
{
  key: 'Digit0',
  rus: {
    caseDown: '0',
    caseUp: ')',
    caps: '0',
    shiftCaps: ')',
  },
  eng: {
    caseDown: '0',
    caseUp: ')',
    caps: '0',
    shiftCaps: ')',
  },
},
{
  key: 'Minus',
  rus: {
    caseDown: '-',
    caseUp: '_',
    caps: '-',
    shiftCaps: '_',
  },
  eng: {
    caseDown: '-',
    caseUp: '_',
    caps: '-',
    shiftCaps: '_',
  },
},
{
  key: 'Equal',
  rus: {
    caseDown: '=',
    caseUp: '+',
    caps: '=',
    shiftCaps: '+',
  },
  eng: {
    caseDown: '=',
    caseUp: '+',
    caps: '=',
    shiftCaps: '+',
  },
},
{
  key: 'Backspace',
  rus: {
    caseDown: 'Backspace',
    caseUp: 'Backspace',
    caps: 'Backspace',
    shiftCaps: 'Backspace',
  },
  eng: {
    caseDown: 'Backspace',
    caseUp: 'Backspace',
    caps: 'Backspace',
    shiftCaps: 'Backspace',
  },
},
];
const keysIn2Row = [{
  key: 'Tab',
  rus: {
    caseDown: 'Tab',
    caseUp: 'Tab',
    caps: 'Tab',
    shiftCaps: 'Tab',
  },
  eng: {
    caseDown: 'Tab',
    caseUp: 'Tab',
    caps: 'Tab',
    shiftCaps: 'Tab',
  },
},
{
  key: 'KeyQ',
  rus: {
    caseDown: 'й',
    caseUp: 'Й',
    caps: 'Й',
    shiftCaps: 'й',
  },
  eng: {
    caseDown: 'q',
    caseUp: 'Q',
    caps: 'Q',
    shiftCaps: 'q',
  },
},
{
  key: 'KeyW',
  rus: {
    caseDown: 'ц',
    caseUp: 'Ц',
    caps: 'Ц',
    shiftCaps: 'ц',
  },
  eng: {
    caseDown: 'w',
    caseUp: 'W',
    caps: 'W',
    shiftCaps: 'w',
  },
},
{
  key: 'KeyE',
  rus: {
    caseDown: 'у',
    caseUp: 'У',
    caps: 'У',
    shiftCaps: 'у',
  },
  eng: {
    caseDown: 'e',
    caseUp: 'E',
    caps: 'E',
    shiftCaps: 'e',
  },
},
{
  key: 'KeyR',
  rus: {
    caseDown: 'к',
    caseUp: 'К',
    caps: 'К',
    shiftCaps: 'к',
  },
  eng: {
    caseDown: 'r',
    caseUp: 'R',
    caps: 'R',
    shiftCaps: 'r',
  },
},
{
  key: 'KeyT',
  rus: {
    caseDown: 'е',
    caseUp: 'Е',
    caps: 'Е',
    shiftCaps: 'е',
  },
  eng: {
    caseDown: 't',
    caseUp: 'T',
    caps: 'T',
    shiftCaps: 't',
  },
},
{
  key: 'KeyY',
  rus: {
    caseDown: 'н',
    caseUp: 'Н',
    caps: 'Н',
    shiftCaps: 'н',
  },
  eng: {
    caseDown: 'y',
    caseUp: 'Y',
    caps: 'Y',
    shiftCaps: 'y',
  },
},
{
  key: 'KeyU',
  rus: {
    caseDown: 'г',
    caseUp: 'Г',
    caps: 'Г',
    shiftCaps: 'г',
  },
  eng: {
    caseDown: 'u',
    caseUp: 'U',
    caps: 'U',
    shiftCaps: 'u',
  },
},
{
  key: 'KeyI',
  rus: {
    caseDown: 'ш',
    caseUp: 'Ш',
    caps: 'Ш',
    shiftCaps: 'ш',
  },
  eng: {
    caseDown: 'i',
    caseUp: 'I',
    caps: 'I',
    shiftCaps: 'i',
  },
},
{
  key: 'KeyO',
  rus: {
    caseDown: 'щ',
    caseUp: 'Щ',
    caps: 'Щ',
    shiftCaps: 'щ',
  },
  eng: {
    caseDown: 'o',
    caseUp: 'O',
    caps: 'O',
    shiftCaps: 'o',
  },
},
{
  key: 'KeyP',
  rus: {
    caseDown: 'з',
    caseUp: 'З',
    caps: 'З',
    shiftCaps: 'з',
  },
  eng: {
    caseDown: 'p',
    caseUp: 'P',
    caps: 'P',
    shiftCaps: 'p',
  },
},
{
  key: 'BracketLeft',
  rus: {
    caseDown: 'х',
    caseUp: 'Х',
    caps: 'Х',
    shiftCaps: 'х',
  },
  eng: {
    caseDown: '[',
    caseUp: '{',
    caps: '[',
    shiftCaps: '{',
  },
},
{
  key: 'BracketRight',
  rus: {
    caseDown: 'ъ',
    caseUp: 'Ъ',
    caps: 'Ъ',
    shiftCaps: 'ъ',
  },
  eng: {
    caseDown: ']',
    caseUp: '}',
    caps: ']',
    shiftCaps: '}',
  },
},
{
  key: 'Backslash',
  rus: {
    caseDown: '\\',
    caseUp: '/',
    caps: '\\',
    shiftCaps: '/',
  },
  eng: {
    caseDown: '\\',
    caseUp: '|',
    caps: '\\',
    shiftCaps: '|',
  },
},
{
  key: 'Delete',
  rus: {
    caseDown: 'Del',
    caseUp: 'Del',
    caps: 'Del',
    shiftCaps: 'Del',
  },
  eng: {
    caseDown: 'Del',
    caseUp: 'Del',
    caps: 'Del',
    shiftCaps: 'Del',
  },
},
];
const keysIn3Row = [{
  key: 'CapsLock',
  rus: {
    caseDown: 'CapsLock',
    caseUp: 'CapsLock',
    caps: 'CapsLock',
    shiftCaps: 'CapsLock',
  },
  eng: {
    caseDown: 'CapsLock',
    caseUp: 'CapsLock',
    caps: 'CapsLock',
    shiftCaps: 'CapsLock',
  },
},
{
  key: 'KeyA',
  rus: {
    caseDown: 'ф',
    caseUp: 'Ф',
    caps: 'Ф',
    shiftCaps: 'ф',
  },
  eng: {
    caseDown: 'a',
    caseUp: 'A',
    caps: 'A',
    shiftCaps: 'a',
  },
},
{
  key: 'KeyS',
  rus: {
    caseDown: 'ы',
    caseUp: 'Ы',
    caps: 'Ы',
    shiftCaps: 'ы',
  },
  eng: {
    caseDown: 's',
    caseUp: 'S',
    caps: 'S',
    shiftCaps: 's',
  },
},
{
  key: 'KeyD',
  rus: {
    caseDown: 'в',
    caseUp: 'В',
    caps: 'В',
    shiftCaps: 'в',
  },
  eng: {
    caseDown: 'd',
    caseUp: 'D',
    caps: 'D',
    shiftCaps: 'd',
  },
},
{
  key: 'KeyF',
  rus: {
    caseDown: 'а',
    caseUp: 'А',
    caps: 'А',
    shiftCaps: 'а',
  },
  eng: {
    caseDown: 'f',
    caseUp: 'F',
    caps: 'F',
    shiftCaps: 'f',
  },
},
{
  key: 'KeyG',
  rus: {
    caseDown: 'п',
    caseUp: 'П',
    caps: 'П',
    shiftCaps: 'п',
  },
  eng: {
    caseDown: 'g',
    caseUp: 'G',
    caps: 'G',
    shiftCaps: 'g',
  },
},
{
  key: 'KeyH',
  rus: {
    caseDown: 'р',
    caseUp: 'Р',
    caps: 'Р',
    shiftCaps: 'р',
  },
  eng: {
    caseDown: 'h',
    caseUp: 'H',
    caps: 'H',
    shiftCaps: 'h',
  },
},
{
  key: 'KeyJ',
  rus: {
    caseDown: 'о',
    caseUp: 'О',
    caps: 'О',
    shiftCaps: 'о',
  },
  eng: {
    caseDown: 'j',
    caseUp: 'J',
    caps: 'J',
    shiftCaps: 'j',
  },
},
{
  key: 'KeyK',
  rus: {
    caseDown: 'л',
    caseUp: 'Л',
    caps: 'Л',
    shiftCaps: 'л',
  },
  eng: {
    caseDown: 'k',
    caseUp: 'K',
    caps: 'K',
    shiftCaps: 'k',
  },
},
{
  key: 'KeyL',
  rus: {
    caseDown: 'д',
    caseUp: 'Д',
    caps: 'Д',
    shiftCaps: 'д',
  },
  eng: {
    caseDown: 'l',
    caseUp: 'L',
    caps: 'L',
    shiftCaps: 'l',
  },
},
{
  key: 'Semicolon',
  rus: {
    caseDown: 'ж',
    caseUp: 'Ж',
    caps: 'Ж',
    shiftCaps: 'ж',
  },
  eng: {
    caseDown: ';',
    caseUp: ':',
    caps: ';',
    shiftCaps: ':',
  },
},
{
  key: 'Quote',
  rus: {
    caseDown: 'э',
    caseUp: 'Э',
    caps: 'Э',
    shiftCaps: 'э',
  },
  eng: {
    caseDown: "'",
    caseUp: '"',
    caps: "'",
    shiftCaps: '"',
  },
},
{
  key: 'Enter',
  rus: {
    caseDown: 'Enter',
    caseUp: 'Enter',
    caps: 'Enter',
    shiftCaps: 'Enter',
  },
  eng: {
    caseDown: 'Enter',
    caseUp: 'Enter',
    caps: 'Enter',
    shiftCaps: 'Enter',
  },
},
];
const keysIn4Row = [{
  key: 'ShiftLeft',
  rus: {
    caseDown: 'Shift',
    caseUp: 'Shift',
    caps: 'Shift',
    shiftCaps: 'Shift',
  },
  eng: {
    caseDown: 'Shift',
    caseUp: 'Shift',
    caps: 'Shift',
    shiftCaps: 'Shift',
  },
},
{
  key: 'KeyZ',
  rus: {
    caseDown: 'я',
    caseUp: 'Я',
    caps: 'Я',
    shiftCaps: 'я',
  },
  eng: {
    caseDown: 'z',
    caseUp: 'Z',
    caps: 'Z',
    shiftCaps: 'z',
  },
},
{
  key: 'KeyX',
  rus: {
    caseDown: 'ч',
    caseUp: 'Ч',
    caps: 'Ч',
    shiftCaps: 'ч',
  },
  eng: {
    caseDown: 'x',
    caseUp: 'X',
    caps: 'X',
    shiftCaps: 'x',
  },
},
{
  key: 'KeyC',
  rus: {
    caseDown: 'с',
    caseUp: 'С',
    caps: 'С',
    shiftCaps: 'с',
  },
  eng: {
    caseDown: 'c',
    caseUp: 'C',
    caps: 'C',
    shiftCaps: 'c',
  },
},
{
  key: 'KeyV',
  rus: {
    caseDown: 'м',
    caseUp: 'М',
    caps: 'М',
    shiftCaps: 'м',
  },
  eng: {
    caseDown: 'v',
    caseUp: 'V',
    caps: 'V',
    shiftCaps: 'v',
  },
},
{
  key: 'KeyB',
  rus: {
    caseDown: 'и',
    caseUp: 'И',
    caps: 'И',
    shiftCaps: 'и',
  },
  eng: {
    caseDown: 'b',
    caseUp: 'B',
    caps: 'B',
    shiftCaps: 'b',
  },
},
{
  key: 'KeyN',
  rus: {
    caseDown: 'т',
    caseUp: 'Т',
    caps: 'Т',
    shiftCaps: 'т',
  },
  eng: {
    caseDown: 'n',
    caseUp: 'N',
    caps: 'N',
    shiftCaps: 'n',
  },
},
{
  key: 'KeyM',
  rus: {
    caseDown: 'ь',
    caseUp: 'Ь',
    caps: 'Ь',
    shiftCaps: 'ь',
  },
  eng: {
    caseDown: 'm',
    caseUp: 'M',
    caps: 'M',
    shiftCaps: 'm',
  },
},
{
  key: 'Comma',
  rus: {
    caseDown: 'б',
    caseUp: 'Б',
    caps: 'Б',
    shiftCaps: 'б',
  },
  eng: {
    caseDown: ',',
    caseUp: '<',
    caps: ',',
    shiftCaps: '<',
  },
},
{
  key: 'Period',
  rus: {
    caseDown: 'ю',
    caseUp: 'Ю',
    caps: 'Ю',
    shiftCaps: 'ю',
  },
  eng: {
    caseDown: '.',
    caseUp: '>',
    caps: '.',
    shiftCaps: '>',
  },
},
{
  key: 'Slash',
  rus: {
    caseDown: '.',
    caseUp: ',',
    caps: '.',
    shiftCaps: ',',
  },
  eng: {
    caseDown: '/',
    caseUp: '?',
    caps: '/',
    shiftCaps: '?',
  },
},
{
  key: 'ArrowUp',
  rus: {
    caseDown: '▲',
    caseUp: '▲',
    caps: '▲',
    shiftCaps: '▲',
  },
  eng: {
    caseDown: '▲',
    caseUp: '▲',
    caps: '▲',
    shiftCaps: '▲',
  },
},
{
  key: 'ShiftRight',
  rus: {
    caseDown: 'Shift',
    caseUp: 'Shift',
    caps: 'Shift',
    shiftCaps: 'Shift',
  },
  eng: {
    caseDown: 'Shift',
    caseUp: 'Shift',
    caps: 'Shift',
    shiftCaps: 'Shift',
  },
},
];
const keysIn5Row = [{
  key: 'ControlLeft',
  rus: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
    caps: 'Ctrl',
    shiftCaps: 'Ctrl',
  },
  eng: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
    caps: 'Ctrl',
    shiftCaps: 'Ctrl',
  },
},
{
  key: 'MetaLeft',
  rus: {
    caseDown: 'Win',
    caseUp: 'Win',
    caps: 'Win',
    shiftCaps: 'Win',
  },
  eng: {
    caseDown: 'Win',
    caseUp: 'Win',
    caps: 'Win',
    shiftCaps: 'Win',
  },
},
{
  key: 'AltLeft',
  rus: {
    caseDown: 'Alt',
    caseUp: 'Alt',
    caps: 'Alt',
    shiftCaps: 'Alt',
  },
  eng: {
    caseDown: 'Alt',
    caseUp: 'Alt',
    caps: 'Alt',
    shiftCaps: 'Alt',
  },
},
{
  key: 'Space',
  rus: {
    caseDown: ' ',
    caseUp: ' ',
    caps: ' ',
    shiftCaps: ' ',
  },
  eng: {
    caseDown: ' ',
    caseUp: ' ',
    caps: ' ',
    shiftCaps: ' ',
  },
},
{
  key: 'AltRight',
  rus: {
    caseDown: 'Alt',
    caseUp: 'Alt',
    caps: 'Alt',
    shiftCaps: 'Alt',
  },
  eng: {
    caseDown: 'Alt',
    caseUp: 'Alt',
    caps: 'Alt',
    shiftCaps: 'Alt',
  },
},
{
  key: 'ArrowLeft',
  rus: {
    caseDown: '◄',
    caseUp: '◄',
    caps: '◄',
    shiftCaps: '◄',
  },
  eng: {
    caseDown: '◄',
    caseUp: '◄',
    caps: '◄',
    shiftCaps: '◄',
  },
},
{
  key: 'ArrowDown',
  rus: {
    caseDown: '▼',
    caseUp: '▼',
    caps: '▼',
    shiftCaps: '▼',
  },
  eng: {
    caseDown: '▼',
    caseUp: '▼',
    caps: '▼',
    shiftCaps: '▼',
  },
},
{
  key: 'ArrowRight',
  rus: {
    caseDown: '►',
    caseUp: '►',
    caps: '►',
    shiftCaps: '►',
  },
  eng: {
    caseDown: '►',
    caseUp: '►',
    caps: '►',
    shiftCaps: '►',
  },
},
{
  key: 'ControlRight',
  rus: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
    caps: 'Ctrl',
    shiftCaps: 'Ctrl',
  },
  eng: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
    caps: 'Ctrl',
    shiftCaps: 'Ctrl',
  },
},
];

module.exports = {
  symbolStatesEnum,
  keysIn1Row,
  keysIn2Row,
  keysIn3Row,
  keysIn4Row,
  keysIn5Row,
};
