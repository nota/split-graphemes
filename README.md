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

### Japanese
```js
splitGraphemes('こんにちは') // ['こ', 'ん', 'に', 'ち', 'は']
```

### English
```js
splitGraphemes('Hello') // ['H', 'e', 'l', 'l', 'o']
```

## Supported ligature characters
The list of characters is at [here](https://github.com/nota/split-graphemes/tree/master/src).
- [Emoji](https://en.wikipedia.org/wiki/Unicode_block)
- [Khmer](https://www.unicode.org/charts/PDF/U1780.pdf)
- [Lao](https://www.unicode.org/charts/PDF/U0E80.pdf)
- [Myanmar](https://www.unicode.org/charts/PDF/U1000.pdf)
- [Thai](https://www.unicode.org/charts/PDF/U0E00.pdf)



