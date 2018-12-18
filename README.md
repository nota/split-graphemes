# split-graphemes

Divide ligature letters such as Thai, Khmer letters and complex emoji into array of graphemes. A grapheme is the minimum unit of writing system of any given language.

[![CircleCI](https://circleci.com/gh/nota/split-graphemes/tree/master.svg?style=svg)](https://circleci.com/gh/nota/split-graphemes/tree/master)

## Installation
```
$ npm install split-graphemes
```

## Usage
You can simply use this library instead of `Array.from` to get graphemes.

## Examples
### Emoji

```js
// An emoji '👨‍👩‍👦‍👦' consists of 4 people face emoji joined by Zero Width Joiners (ZWJ).
// This emoji is divided into 7 letters.
const chars = Array.from('👨‍👩‍👦‍👦') // ['👨', ZWJ, '👩', ZWJ, '👦', ZWJ, '👦']
```

```js
// It is interpreted exactly as one character!
const chars = splitGraphemes('👨‍👩‍👦‍👦') // ['👨‍👩‍👦‍👦']
```

### Khmer characters

```js
// It is interpreted as 8 characters.
const chars = Array.from('ប៉ុស្ដិ៍') // ['ប', '៉', 'ុ', 'ស', '្', 'ដ', 'ិ', '៍']
```

```js
const chars = splitGraphemes('ប៉ុស្ដិ៍') // ['ប៉ុ', 'ស្ដិ៍']
```

## Supported ligature characters
The list of characters is at [here](https://github.com/nota/split-graphemes/tree/master/src).
- [Emoji](https://en.wikipedia.org/wiki/Unicode_block)
- [Khmer](https://www.unicode.org/charts/PDF/U1780.pdf)
- [Lao](https://www.unicode.org/charts/PDF/U0E80.pdf)
- [Myanmar](https://www.unicode.org/charts/PDF/U1000.pdf)
- [Thai](https://www.unicode.org/charts/PDF/U0E00.pdf)



