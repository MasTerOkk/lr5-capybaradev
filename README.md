# lr5-capybaradev

A utility library that provides functions to generate random arrays and matrices for various applications.

## Installation

Install the package via npm:

```bash
npm install lr5-capybaradev
```
## Using

To use the module, it must be imported

```javascript
import capybara from 'lr5-capybaradev';
```

## Functions

### generateRandomArray
Generates a random array. By default, it creates an array of 10 elements, each from 0 to 100.
You can set minimum, maximum and length manually

```javascript
capybara.generateRandomArray();

capybara.generateRandomArray(50, 0, 10);
```

### generateRandomMatrix
Generates a random matrix. By default, it creates an matrix of 3 rows and 3 column, each element from 0 to 100.
You can set minimum, maximum and rows and columns count manually

```javascript
capybara.generateRandomMatrix();

capybara.generateRandomMatrix(5, 3, 0, 10);
```