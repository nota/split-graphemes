# split-graphemes

Divide ligature letters such as Thai, Khmer letters and complex emoji into array of [graphemes](https://en.wikipedia.org/wiki/Grapheme).
You can simply use this library instead of `Array.from` to get graphemes.

[![CircleCI](https://circleci.com/gh/nota/split-graphemes/tree/master.svg?style=svg)](https://circleci.com/gh/nota/split-graphemes/tree/master)

## Installation
```
$ npm install split-graphemes
```

## Examples
### Emoji

```js
// An emoji '👨‍👩‍👦‍👦' consists of 4 people face emoji joined by Zero Width Joiners (ZWJ).
const chars = Array.from('👨‍👩‍👦‍👦') // ['👨', ZWJ, '👩', ZWJ, '👦', ZWJ, '👦']
```

```js
// It is interpreted exactly as one character!
const chars = splitGraphemes('👨‍👩‍👦‍👦') // ['👨‍👩‍👦‍👦']
```

### Khmer characters

```js
Array.from('ប៉ុស្ដិ៍') // ['ប', '៉', 'ុ', 'ស', '្', 'ដ', 'ិ', '៍']
```

```js
splitGraphemes('ប៉ុស្ដិ៍') // ['ប៉ុ', 'ស្ដិ៍']
```

### Japanese NFD
```js
splitGraphemes('ごん゙に゙ぢば') // ['ご', 'ん゙', 'に゙', 'ぢ', 'ば']
splitGraphemes('パピプペポ') // ['パ', 'ピ', 'プ', 'ペ', 'ポ']
```

### English
```js
splitGraphemes('Hello') // ['H', 'e', 'l', 'l', 'o']
```

## Supported ligature characters
The list of characters is at [here](https://github.com/nota/split-graphemes/tree/master/src).
- [Emoji](https://en.wikipedia.org/wiki/Unicode_block)
- [Arabic](https://www.unicode.org/charts/PDF/U0600.pdf) and [Arabic supplement](https://www.unicode.org/charts/PDF/U0750.pdf)
- [Bengali](https://www.unicode.org/charts/PDF/U0980.pdf)
- [Devanagari](https://www.unicode.org/charts/PDF/U0900.pdf)
- [Gujarati](https://www.unicode.org/charts/PDF/U0A80.pdf)
- [Japanese Hiragana](https://www.unicode.org/charts/PDF/U3040.pdf) and [Katakana](https://www.unicode.org/charts/PDF/U30A0.pdf) NFD
- [Kannada](https://www.unicode.org/charts/PDF/U0C80.pdf)
- [Khmer](https://www.unicode.org/charts/PDF/U1780.pdf)
- [Lao](https://www.unicode.org/charts/PDF/U0E80.pdf)
- [Malayalam](https://unicode.org/charts/PDF/U0D00.pdf)
- [Myanmar](https://www.unicode.org/charts/PDF/U1000.pdf)
- [Tamil](https://www.unicode.org/charts/PDF/U0B80.pdf)
- [Telugu](https://www.unicode.org/charts/PDF/U0C00.pdf)
- [Thai](https://www.unicode.org/charts/PDF/U0E00.pdf)
- [Tibetan](https://www.unicode.org/charts/PDF/U0F00.pdf)


