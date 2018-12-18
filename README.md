# split-graphemes

Divide ligature letters, such as Thai, Khmer letters and some emoji, that deform or combine glyphs depending on the position of characters into the minimum unit parts, graphemes.

It can also be used for strings containing characters other than ligatures, like alphabets and Japanese.

[![CircleCI](https://circleci.com/gh/nota/split-graphemes/tree/master.svg?style=svg)](https://circleci.com/gh/nota/split-graphemes/tree/master)

## Installation
```
$
```

## Usage
Use `splitGraphemes(str)` instead of `Array.from(str)` to separate character strings into character units.

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
const chars = splitGraphemes('ប៉ុស្ដិ៍') // ['ប៉ុស្ដិ៍']
```

## Supported ligature characters
The list of characters is at [here](https://github.com/nota/split-graphemes/tree/master/src).
- [Emoji](https://en.wikipedia.org/wiki/Unicode_block)
- [Khmer](https://www.unicode.org/charts/PDF/U1780.pdf)
- [Lao](https://www.unicode.org/charts/PDF/U0E80.pdf)
- [Myanmar](https://www.unicode.org/charts/PDF/U1000.pdf)
- [Thai](https://www.unicode.org/charts/PDF/U0E00.pdf)



